// routes/cars.js
import express from 'express';
import { getAllCars, getSingleCar } from '../controllers/cars.js'; // Make sure the path is correct

const router = express.Router();

router.get('/cars', getAllCars); // Route to get all cars

router.get('/cars/:id', getSingleCar);


export default router;
