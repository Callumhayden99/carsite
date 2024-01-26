import { useEffect, useState } from "react";
import "../styles/cars.css";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Cars = ({ selectedMake, selectedBodyStyle }) => {
  const [cars, setCars] = useState([]);

  // Function to fetch car data from your API
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
    <div className="fetch-data">
      <ul>
        {cars
          .filter(
            (car) =>
              // eslint-disable-next-line react/prop-types
              (selectedMake === "" ||
                // eslint-disable-next-line react/prop-types
                car.make.toLowerCase() === selectedMake.toLowerCase()) &&
              (selectedBodyStyle === "" || car.body === selectedBodyStyle)
          )
          .map((car) => (
            <li key={car.id}>
              <div className="car-card-container">
                <div className="car-card">
                  <h2 className="car-card-name">{car.name}</h2>
                  <img
                    className="car-card-img"
                    src={car.imageUrl}
                    alt={car.name}
                  />
                  <div className="car-details">
                    <div className="car-card-details">
                      <p className="car-card-year1">Make:</p>
                      <p className="car-card-year">{car.make}</p>
                    </div>
                    <div className="car-card-details">
                      <p className="car-card-price1">Price:</p>
                      <p className="car-card-price">
                        {car.price.toLocaleString("en-GB", {
                          style: "currency",
                          currency: "GBP",
                        })}
                      </p>
                    </div>
                    <div className="car-card-details">
                      <p className="car-card-year1">Year:</p>
                      <p className="car-card-year">{car.year}</p>
                    </div>
                    <div className="car-card-details">
                      <p className="car-card-mileage1">Mileage:</p>
                      <p className="car-card-mileage">{car.mileage} miles</p>
                    </div>
                    <div className="car-card-details">
                      <p className="car-card-colour1">Colour:</p>
                      <p className="car-card-colour">{car.colour}</p>
                    </div>
                    <div className="car-card-details">
                      <p className="car-card-body1">BodyStyle:</p>
                      <p className="car-card-body">{car.body}</p>
                    </div>
                    <NavLink to="/buy-Car">
                    <div className="car-card-details button-container">
                      <button className="car-card-button" type="submit">ENQUIRY</button>
                    </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Cars;
