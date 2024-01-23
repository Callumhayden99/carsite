import { LeftMenu } from "./LeftMenu";
import { useEffect, useState } from "react";

export const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/cars");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
      } catch (e) {
        console.error("Fetch error: " + e.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <LeftMenu />
      <h1>Luxury Cars</h1>
      <div className="fetch-data">
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <div className="car-card">
                <img src={car.imageUrl} alt={car.name} className="car-image" />
                <div className="car-details">
                  <h2>{car.name}</h2>
                  <p>Price: £{car.price.toFixed(2)}</p>
                  <p>Year: {car.year}</p>
                  <p>Colour: {car.colour}</p>
                  <p>Mileage: {car.mileage} miles</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cars;
