import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/SingleCar.css";

export const BuyCar = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { carId } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/cars/${carId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCar(data);
      } catch (e) {
        console.error("Fetch error: " + e.message);
      }
    };

    if (carId) {
      fetchCar();
    }
  }, [carId]);

  if (!car) {
    return <div>Loading car details...</div>;
  }

  return (
    <>
      <button className="back-button-car" onClick={handleBack}>
        BACK TO RESULTS
      </button>
      <div className="buy-car-container">
        <div className="top-section">
          <div className="buy-car-image">
            <img src={car.imageUrl} alt={car.name} />
          </div>
          <h1>{car.name}</h1>
          <p>Price: {car.price}</p>
          <p>colour:{car.colour}</p>
          <p>interior:{car.interior}</p>
          <p>year: {car.year}</p>
          <p>Mileage: {car.mileage}</p>
          <p>Engine: {car.engine}</p>
          <p>Transmission: {car.transmission}</p>
          <p>Body: {car.body}</p>
        </div>
        <div className="middle-section">
          <p>{car.photos}</p>
        </div>
        <div className="bottom-section">
          <p>{car.overview}</p>
        </div>
      </div>
    </>
  );
};
