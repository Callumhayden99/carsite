import "../styles/Cars.css";
import aston2 from "../assets/aston2.jpg";
import maserati from "../assets/maserati.jpg";
import porshe1 from "../assets/porshe1.jpg";
import bentley from "../assets/bentley.jpg";
import rolls1 from "../assets/rolls1.jpg";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { useState, useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Header } from "./Header";

import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const LeftMenu = ({ onMakeSelect, onBodyStyleSelect, onResetFilters  }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Start with sidebar closed

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleFilterClick = (make) => {
    onMakeSelect(make); // Update the selected car make
  };

  const handleResetFilter = () => {
    onMakeSelect(""); // Reset the filter
  };

  const handleBodyStyleClick = (bodyStyle) => {
    onBodyStyleSelect(bodyStyle);
  };

  return (
    <>
      <Header />
      {!isSidebarOpen && (
        <div onClick={toggleSidebar} className="open-filters-btn">
          Open Filters
        </div>
      )}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div onClick={toggleSidebar} className="close-sidebar-btn">
          Close
        </div>
        <div className="filter-menu">
          <button className="filter-button" onClick={onResetFilters}>
            RESET FILTERS
          </button>
          <button className="filter-button" onClick={handleResetFilter}>
            VIEW FULL STOCK
          </button>
          <h2 className="filter-h2">SEARCH BY MANUFACTURER</h2>
          <div className="car-options">
            <button
              className="car1"
              onClick={() => handleFilterClick("Aston Martin")}
            >
              Aston Martin
            </button>
            <button className="car1" onClick={() => handleFilterClick("BMW")}>
              BMW
            </button>
            <button
              className="car1"
              onClick={() => handleFilterClick("Bentley")}
            >
              Bentley
            </button>
            <button
              className="car1"
              onClick={() => handleFilterClick("Bugatti")}
            >
              Bugatti
            </button>
            <button
              className="car1"
              onClick={() => handleFilterClick("Ferrari")}
            >
              Ferrari
            </button>
            <button
              className="car1"
              onClick={() => handleFilterClick("Lamborghini")}
            >
              Lamborghini
            </button>
            <button
              className="car1"
              onClick={() => handleFilterClick("Land Rover")}
            >
              Land rover
            </button>
            <button
              className="car2"
              onClick={() => handleFilterClick("Maserati")}
            >
              Maserati
            </button>
            <button
              className="car2"
              onClick={() => handleFilterClick("Mclaren")}
            >
              Mclaren
            </button>
            <button
              className="car2"
              onClick={() => handleFilterClick("Porsche")}
            >
              Porsche
            </button>
            <button
              className="car2"
              onClick={() => handleFilterClick("Rolls-Royce")}
            >
              Rolls-Royce
            </button>
            <button
              className="car2"
              onClick={() => handleFilterClick("Mercedes-Benz")}
            >
              Mercedes-Benz
            </button>
          </div>
          <h2 className="search-bodystyle">SEARCH BY BODYSTYLE</h2>
          <div className="car-option">
            <button
              className="car1"
              onClick={() => handleBodyStyleClick("Coupe")}
            >
              Coupe
            </button>
            <button
              className="car1"
              onClick={() => handleBodyStyleClick("SUV")}
            >
              SUV
            </button>
            <button
              className="car1"
              onClick={() => handleBodyStyleClick("Convertible")}
            >
              Convertible
            </button>
            <button
              className="car1"
              onClick={() => handleBodyStyleClick("SUV")}
            >
              Estate
            </button>
            <button
              className="car1"
              onClick={() => handleBodyStyleClick("Saloon")}
            >
              Saloon
            </button>
          </div>
          <h3 className="latest">LATEST ARRIVALS</h3>
          <div className="left-menu">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={116}
              totalSlides={totalSlides}
              currentSlide={currentSlide}
              isPlaying={true}
              interval={4000}
            >
              <Slider>
                <Slide index={0}>
                  <div className="car-slide">
                    ASTON MARTIN VANQUISH<br></br> ZAGATO SPEEDSTER
                    <div className="car-container2">
                      <img
                        className="car-img2"
                        src={aston2}
                        width={270}
                        alt="ASTON MARTIN VANQUISH ZAGATO SPEEDSTER"
                      />
                      <div className="car-spec2">
                        <div className="spec-2">
                          <div className="price2">Price:</div>
                          <div className="sub-price2">£559,950</div>
                        </div>
                        <div className="spec-2">
                          <div className="year2">Year:</div>
                          <div className="sub-year2">2018</div>
                        </div>
                        <div className="spec-2">
                          <div className="colour2">Colour:</div>
                          <div className="sub-colour2">Ming Blue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="car-slide">
                    PORSCHE 911 TURBO<br></br> S CABRIOLET
                    <div className="car-container2">
                      <img
                        className="car-img2"
                        src={porshe1}
                        width={270}
                        alt="PORSCHE 911 TURBO S CABRIOLET"
                      />
                      <div className="car-spec2">
                        <div className="spec-2">
                          <div className="price2">Price:</div>
                          <div className="sub-price2">£154,950</div>
                        </div>
                        <div className="spec-2">
                          <div className="year2">Year:</div>
                          <div className="sub-year2">2022</div>
                        </div>
                        <div className="spec-2">
                          <div className="colour2">Colour:</div>
                          <div className="sub-colour2">Jet Black Metallic</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="car-slide">
                    MASERATI MC20 CIELO
                    <div className="car-container2">
                      <img
                        className="car-img2"
                        src={maserati}
                        width={270}
                        alt="MASERATI MC20 CIELO"
                      />
                      <div className="car-spec2">
                        <div className="spec-2">
                          <div className="price2">Price:</div>
                          <div className="sub-price2">£269,950</div>
                        </div>
                        <div className="spec-2">
                          <div className="year2">Year:</div>
                          <div className="sub-year2">2023</div>
                        </div>
                        <div className="spec-2">
                          <div className="colour2">Colour:</div>
                          <div className="sub-colour2">Grigio Incognito</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="car-slide">
                    BENTLEY CONTINENTAL<br></br>SUPERSPORTS
                    <div className="car-container2">
                      <img
                        className="car-img2"
                        src={bentley}
                        width={270}
                        alt="BENTLEY CONTINENTAL SUPERSPORTS CONVERTIBLE"
                      />
                      <div className="car-spec2">
                        <div className="spec-2">
                          <div className="price2">Price:</div>
                          <div className="sub-price2">£104,950</div>
                        </div>
                        <div className="spec-2">
                          <div className="year2">Year:</div>
                          <div className="sub-year2">2018</div>
                        </div>
                        <div className="spec-2">
                          <div className="colour2">Colour:</div>
                          <div className="sub-colour2">Anthracite Grey</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="car-slide">
                    ROLLS-ROYCE DAWN
                    <div className="car-container2">
                      <img
                        className="car-img2"
                        src={rolls1}
                        width={270}
                        alt="ROLLS-ROYCE DAWN"
                      />
                      <div className="car-spec2">
                        <div className="spec-2">
                          <div className="price2">Price:</div>
                          <div className="sub-price2">£164,950</div>
                        </div>
                        <div className="spec-2">
                          <div className="year2">Year:</div>
                          <div className="sub-year2">2016</div>
                        </div>
                        <div className="spec-2">
                          <div className="colour2">Colour:</div>
                          <div className="sub-colour2">Black Diamond</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
          <NavLink className="sell" to="/sell">
            SELL YOUR CAR
          </NavLink>
        </div>
      </div>
    </>
  );
};
