const router = require('express').Router();
module.exports = router;

const { Translate } = require('@google-cloud/translate').v2;
const vision = require('@google-cloud/vision');
const fs = require('fs');
require('dotenv').config();

const CREDS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// Creates a client for VISION API
const client = new vision.ImageAnnotatorClient({
  credentials: CREDS,
  projectId: CREDS.project_id,
});

// Instantiates a client for TRANSLATE
const translate = new Translate({
  credentials: CREDS,
  projectId: CREDS.project_id,
});

// POST /api/vision
router.post('/', async (req, res, next) => {
  // console.log('vision api req.body -->', req.body.img)

  async function visionAPIrequest() {
    let detectedObj = '';

    async function translateText(detectedObj) {
      // The text to translate
      const text = detectedObj;

      // The target language
      const target = 'fr';

      // Translates some text
      const [translation] = await translate.translate(text, target);
      console.log(`2. Detected obj passed from Vision api: ${text}`);
      console.log(`3. Translated obj to French: ${translation}`);
      return translation;
    }

    //   const fileName = `./resources/burger.jpg`;
    //   const request = {
    //     image: { content: fs.readFileSync(fileName) },
    //   };

    const request = {
      image: { content: req.body.img },
    };

    const [result] = await client.objectLocalization(request);
    const objects = result.localizedObjectAnnotations;

    console.log('1. primary OBJ decected -->', objects[0].name);
    detectedObj = objects[0].name;

    //     objects.forEach((object) => {
    //       console.log(`VISION DETECTS - Name: ${object.name}`);
    //       console.log(`VISION - Confidence: ${object.score}`);
    //       const vertices = object.boundingPoly.normalizedVertices;
    //       vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
    //     });
    //   console.log('obj before translate', detectedObj)

    translateText(detectedObj);
  }

  visionAPIrequest();
  console.log('visionAPIrequest done!');
  res.sendStatus(201);
});
