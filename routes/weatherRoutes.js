import express from 'express';
import { getWeatherByLocationId, weatherHistory } from '../controllers/weatherController.js';

const router = express.Router();

router.get('/:locationId', getWeatherByLocationId);
router.get('/', weatherHistory);

export default router;
