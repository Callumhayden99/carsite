import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    const car = await createCar();
    console.log("Car created:", car);
}

async function createCar() {
    const car = await prisma.luxuryCar.create({
        data: {
            name: "Aston Martin Vanquish S",
            price: 149.95000,
            image_url: "https://i.imgur.com/A6bgM7d.jpg",
            mileage: 6673,
            colour: "Onyx Black",
            year: 2020,
            make: "Aston Martin",
            body: "Coupe",
            topSpeed: 201.0,
            zeroToSixty: 3.5
        },
    });
    return car;
}

seed()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    })
    // eslint-disable-next-line no-undef
    .finally(() => process.exit(0)); // Changed exit code to 0 for successful completion
