// controllers/cars.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllCars = async (req, res) => {
  try {
    const cars = await prisma.luxuryCar.findMany();
    res.json(cars);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
