const router = require('express').Router();
module.exports = router;

const vision = require('@google-cloud/vision');
require('dotenv').config();

const CREDS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// Creates a client for VISION API
const client = new vision.ImageAnnotatorClient({
  credentials: CREDS,
  projectId: CREDS.project_id,
});

// POST /api/vision
router.post('/', async (req, res, next) => {
  try {
    async function visionAPIrequest() {
      const request = {
        image: { content: req.body.img },
      };

      const [result] = await client.objectLocalization(request);
      let objects = result.localizedObjectAnnotations;

      // array of filtered items
      return objects
        .filter((object, index) => {
          if (object.score >= 0.6 && index <= 2) {
            return object.name;
          }
        })
        .map((object) => {
          return object.name;
        });
    }
    const detectedObjects = await visionAPIrequest();
    res.send(detectedObjects);
  } catch (error) {
    next(error);
  }
});
