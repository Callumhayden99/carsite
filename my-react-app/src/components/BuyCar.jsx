import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/SingleCar.css";
import EnquiryForm from "./EnquiryForm";
import { TestDrive } from "./TestDrive";

export const BuyCar = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTestDriveFormOpen, setIsTestDriveFormOpen] = useState(false);

  const openEnquiryForm = () => {
    setIsEnquiryFormOpen(true);
  };

  const closeEnquiryForm = () => {
    setIsEnquiryFormOpen(false);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? car.photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === car.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && lightboxOpen) {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [lightboxOpen]);

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
      <div className="buy-car-container">
        <div className="top-section">
          <div className="buy-car-details">
            <img
              className="car-img"
              src={car.imageUrl}
              width={650}
              alt={car.name}
            />
            <div className="car-buttons">
            <button className="back-button-car" onClick={handleBack}>
              BACK TO RESULTS
            </button>
            <button className="car-buy-enquire" onClick={openEnquiryForm}>
              ENQUIRE
            </button>
            <button
              className="car-buy-test"
              onClick={() => setIsTestDriveFormOpen(true)}
            >
              BOOK A TEST DRIVE
            </button>
            {isTestDriveFormOpen && (
              <TestDrive
                isOpen={isTestDriveFormOpen}
                onClose={() => setIsTestDriveFormOpen(false)}
              />
            )}
            </div>
          </div>
          <div className="car-details">
            <h1 className="car-name">{car.name}</h1>
            <div className="car-details-container">
              <div className="car-details-column">
                <div className="car-detail-item">
                  <span className="car-detail-label">Price:</span>
                  <span className="car-detail-value">
                    {car.price.toLocaleString("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    })}
                  </span>
                </div>
                <div className="car-detail-item">
                  <span className="car-detail-label">Colour:</span>
                  <span className="car-detail-value">{car.colour}</span>
                </div>
                <div className="car-detail-item">
                  <span className="car-detail-label">Interior:</span>
                  <span className="car-detail-value">{car.interior}</span>
                </div>
                <div className="car-detail-item">
                  <span className="car-detail-label">Transmission:</span>
                  <span className="car-detail-value">{car.transmission}</span>
                </div>
              </div>
              <div className="car-details-column">
                <div className="car-detail-item">
                  <span className="car-detail-label">Mileage:</span>
                  <span className="car-detail-value">
                    {car.mileage} miles
                  </span>
                </div>
                <div className="car-detail-item">
                  <span className="car-detail-label">Engine:</span>
                  <span className="car-detail-value">{car.engine}</span>
                </div>
                <div className="car-detail-item">
                  <span className="car-detail-label">Body:</span>
                  <span className="car-detail-value">{car.body}</span>
                </div>
                <div className="car-detail-item">
                  <span className="car-detail-label">Year:</span>
                  <span className="car-detail-value">{car.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-section">
          {car.photos.map((photo, index) => (
            <img
              key={index}
              width={310}
              src={photo}
              alt={`Photo ${index}`}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
        <div className="bottom-section">
          <h1 className="car-overview-h1">OVERVIEW: </h1>
          <p className="car-overview">{car.overview}</p>
        </div>
        <EnquiryForm isOpen={isEnquiryFormOpen} onClose={closeEnquiryForm} />

        {lightboxOpen && (
          <div className="lightbox">
            <span className="lightbox-close" onClick={closeLightbox}>
              &times;
            </span>
            <img
              src={car.photos[currentImageIndex]}
              alt={`Photo ${currentImageIndex}`}
            />
            <span className="lightbox-prev" onClick={goToPrevious}>
              &lsaquo;
            </span>
            <span className="lightbox-next" onClick={goToNext}>
              &rsaquo;
            </span>
          </div>
        )}
      </div>
    </>
  );
};
