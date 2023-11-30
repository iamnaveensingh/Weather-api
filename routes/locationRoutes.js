import express from 'express';
import {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
} from '../controllers/locationController.js';

const router = express.Router();

router.get('/', getAllLocations);
router.get('/:locationId', getLocationById);
router.post('/', createLocation);
router.put('/:locationId', updateLocation);
router.delete('/:locationId', deleteLocation);

export default router;
