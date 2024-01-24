import { LeftMenu } from "./LeftMenu";
import { useEffect, useState } from "react";
import "../styles/cars.css";

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
              <div className="car-card-container">
              <div className="car-card">
              <h2 className="car-card-name">{car.name}</h2>
                <img className="card-card-img" src={car.imageUrl} alt={car.name} />
                <div className="car-details">
                  <p>Price: {car.price.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}</p>
                  <p>Year: {car.year}</p>
                  <p>Colour: {car.colour}</p>
                  <p>Mileage: {car.mileage} miles</p>
                </div>
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
