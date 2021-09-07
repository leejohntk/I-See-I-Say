const path = require('path')
const express = require('express')
const morgan = require('morgan')
const rateLimit = require("express-rate-limit");
const app = express()
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json({ limit: 150000}))

// apply rate limiter to requests that begin with /api/vision/
app.set('trust proxy', 1);
const apiLimiter = rateLimit({
  windowMs: (31 * 24 * 60 * 60 * 1000) / 2, // 15.5 days
  max: 450,
  onLimitReached: function (req, res, options) {
    res.send(['Too many requests made, please try again later!'])
  }
});
app.use("/api/vision/", apiLimiter);

// api routes
app.use('/api', require('./api'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
