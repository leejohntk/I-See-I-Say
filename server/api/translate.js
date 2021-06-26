const router = require('express').Router();
module.exports = router;

const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();

const CREDS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// Instantiates a client
const translate = new Translate({
  credentials: CREDS,
  projectId: CREDS.project_id,
});

// POST /api/trans
router.post('/', async (req, res, next) => {
  try {
    async function translateText() {
      // The text to translate
      const text = req.body.q;

      // The target language
      const target = req.body.target;

      // Translates some text
      const [translation] = await translate.translate(text, target);
      return translation;
    }

    const translatedText = await translateText();

    res.send(translatedText);
  } catch (error) {
    next(error);
  }
});
