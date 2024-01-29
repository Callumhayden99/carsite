// controllers/cars.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCars = async (req, res) => {
  try {
    const cars = await prisma.luxuryCar.findMany();
    res.json(cars);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getSingleCar = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Requested car ID:", id);
    const car = await prisma.luxuryCar.findUnique({
      where: {
        id: id,
      },
    });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json(car);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};
