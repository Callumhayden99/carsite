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
import { Footer } from "./Footer";
import { NavLink } from "react-router-dom";

export const Cars = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Start with sidebar closed

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [filter, setFilter] = useState("");

  const handleFilterClick = (manufacturer) => {
    setFilter(manufacturer);
  };

  const allCars = [{}];

  const getCars = (filter) => {
    if (!filter) return allCars;
    return allCars.filter((car) => car.manufacturer === filter);
  };

  const displayedCars = getCars(filter);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

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
          <h1 className="filter-h1">VIEW FULL STOCK</h1>
          <h2 className="filter-h2">SEARCH BY MANUFACTURER</h2>
          <div className="car-options">
            <span
              className="car1"
              onClick={() => handleFilterClick("Aston Martin")}
            >
              Aston Martin
            </span>
            <span className="car1" onClick={() => handleFilterClick("Audi")}>
              Audi
            </span>
            <span className="car1" onClick={() => handleFilterClick("BMW")}>
              BMW
            </span>
            <span className="car1" onClick={() => handleFilterClick("Bentley")}>
              Bentley
            </span>
            <span className="car1" onClick={() => handleFilterClick("Bugatti")}>
              Bugatti
            </span>
            <span className="car1" onClick={() => handleFilterClick("Ferrari")}>
              Ferrari
            </span>
            <span
              className="car1"
              onClick={() => handleFilterClick("Lamborghini")}
            >
              Lamborghini
            </span>
            <span
              className="car1"
              onClick={() => handleFilterClick("Land rover")}
            >
              Land rover
            </span>
            <span
              className="car2"
              onClick={() => handleFilterClick("Maserati")}
            >
              Maserati
            </span>
            <span className="car2" onClick={() => handleFilterClick("Mclaren")}>
              Mclaren
            </span>
            <span className="car2" onClick={() => handleFilterClick("Porshe")}>
              Porshe
            </span>
            <span className="car2" onClick={() => handleFilterClick("Mustang")}>
              Mustang
            </span>
            <span
              className="car2"
              onClick={() => handleFilterClick("Rolls-Royce")}
            >
              Rolls-Royce
            </span>
            <span
              className="car2"
              onClick={() => handleFilterClick("Mercedes-Benz")}
            >
              Mercedes-Benz
            </span>
          </div>
          <h2 className="search-bodystyle">SEARCH BY BODYSTYLE</h2>
          <div className="car-option">
            <span>Coupe</span>
            <span>SUV</span>
            <span>Convertible</span>
            <span>Estate</span>
            <span>Saloon</span>
            <span>Light 4x4 utility</span>
            <span>Hatchback</span>
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
      <div className="footer-content">
        <Footer />
      </div>
    </>
  );
};
