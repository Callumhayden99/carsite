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
            interior: "Pure Black & Electron Yellow Leathe",
            engine: "6.0-litre V12",
            transmission: "8-Speed Touchtronic III",
            overview: "The Vanquish S represents the last flagship V12 Aston to feature their naturally aspirated 6.0L V12 engine, widely regarded as one of the best sounding engines in the modern era. Aston Martin very much took a new direction after the end of the Vanquish with both the adoption of twin-turbocharged engines as well as changing their design language with it's successor the DBS Superleggera taking on a much more aggressive styling. For some people the Vanquish represents the last of the truly elegant Astons and its beauty certainly contributes to the reckoning that this era of Vanquish will be regarded in the future as a true classic and one of their very best. Unveiled to the world in November 2016, the Vanquish S features a number of mechanical and aesthetic upgrades over the standard Vanquish. Starting with the bodywork the received aerodynamic tweaks such as a new front splitter helping to reduce front end lift whilst smoothing air flow over the front wheels to keep the cars aerodynamic efficiency high. At the rear of the car two single tailpipes have been replaced by more aggressive throatier twin tailpipe clusters. These are not just for show but form part of a freer-flowing exhaust and inlet system which is responsible for the horsepower increase which now sits at 595bhp. Finally, a suspension overhaul including reprogrammed adjustable dampers, new rear anti-roll bar and firmer springs make the S a much more focused and direct car to drive, whilst still retaining enough ride comfort to make it an accomplished grand tourer. Overall, the Vanquish S is an incredibly appealing proposition which should have both the older generation and the newer generation of Aston lovers appreciating the superb combination of beauty, a scintillating soundtrack and a highly luxurious and fast 2+2 grand tourer. ",
            year: 2020,
            make: "Aston Martin",
            body: "Coupe",
            topSpeed: 201.0,
            zeroToSixty: 3.5,
            photos: [ "https://imgur.com/YGYSJkI", "https://imgur.com/Y0aArpg", "https://imgur.com/kp6qeKY", "https://imgur.com/usUDvqZ", "https://imgur.com/AD3oWUj", "https://imgur.com/3oVbqK1"]
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
