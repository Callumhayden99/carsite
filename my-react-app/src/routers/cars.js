// routes/cars.js
import express from 'express';
import { getAllCars } from '../controllers/cars.js'; // Make sure the path is correct

const router = express.Router();

router.get('/cars', getAllCars); // Route to get all cars


export default router;
