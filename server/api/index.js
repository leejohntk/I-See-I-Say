const router = require('express').Router()
module.exports = router

router.use('/trans', require('./translate'))
router.use('/vision', require('./vision'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
