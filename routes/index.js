import express from 'express';
import locationRoutes from './locationRoutes.js';
import weatherRoutes from './weatherRoutes.js';

const router = express.Router();

router.use('/locations', locationRoutes);
router.use('/weather', weatherRoutes);
router.use('/history', weatherRoutes);

export default router;
