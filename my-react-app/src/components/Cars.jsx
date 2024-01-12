import aston2 from "../assets/aston2.jpg";
import maserati from "../assets/maserati.jpg";
import porshe1 from "../assets/porshe1.jpg";
import bentley from "../assets/bentley.jpg";
import rolls1 from "../assets/rolls1.jpg";
import { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const Carousel = ({cars}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="left-menu">
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
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
              width={300}
              alt="ASTON MARTIN VANQUISH ZAGATO SPEEDSTER"
            />
            <div className="car-spec2">
              <div className="spec-2">
                <div className="speed2">Top Speed:</div>
                <div className="sub-speed2">201 MPH</div>
              </div>
              <div className="spec-2">
                <div className="zero-sixty2">0 - 60 MPH:</div>
                <div className="sub-zero-sixty2">3.4 S</div>
              </div>
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
              width={300}
              alt="PORSCHE 911 TURBO S CABRIOLET"
            />
            <div className="car-spec2">
              <div className="spec-2">
                <div className="speed2">Top Speed:</div>
                <div className="sub-speed2">205 MPH</div>
              </div>
              <div className="spec-2">
                <div className="zero-sixty2">0 - 60 MPH:</div>
                <div className="sub-zero-sixty2">2.7 S</div>
              </div>
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
              width={350}
              alt="MASERATI MC20 CIELO"
            />
            <div className="car-spec2">
              <div className="spec-2">
                <div className="speed2">Top Speed:</div>
                <div className="sub-speed2">198 MPH</div>
              </div>
              <div className="spec-2">
                <div className="zero-sixty2">0 - 60 MPH:</div>
                <div className="sub-zero-sixty2">2.9 S</div>
              </div>
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
              width={300}
              alt="BENTLEY CONTINENTAL SUPERSPORTS CONVERTIBLE"
            />
            <div className="car-spec2">
              <div className="spec-2">
                <div className="speed2">Top Speed:</div>
                <div className="sub-speed2">205 MPH</div>
              </div>
              <div className="spec-2">
                <div className="zero-sixty2">0 - 60 MPH:</div>
                <div className="sub-zero-sixty2">3.7 S</div>
              </div>
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
              width={300}
              alt="ROLLS-ROYCE DAWN"
            />
            <div className="car-spec2">
              <div className="spec-2">
                <div className="speed2">Top Speed:</div>
                <div className="sub-speed2">155 MPH</div>
              </div>
              <div className="spec-2">
                <div className="zero-sixty2">0 - 60 MPH:</div>
                <div className="sub-zero-sixty2">4.5 S</div>
              </div>
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
  );
};

export const Cars = () => {

    const [filter, setFilter] = useState("");

    const handleFilterClick = (manufacturer) => {
        setFilter(manufacturer)
    }

    const allCars = [{

    }]

    const getCars = (filter) => {
        if (!filter) return allCars;
        return allCars.filter(car => car.manufacturer === filter);
    }

    const displayedCars = getCars(filter);

  return (
    <>
      <div className="filter-menu">
        <h1 className="filter-h1">VIEW FULL STOCK</h1>
        <h2 className="filter-h2">SEARCH BY MANUFACTURER</h2>
        <div className="car-options">
          <span className="car1" onClick={() => handleFilterClick('Aston Martin')}>Aston Martin</span>
          <span className="car1" onClick={() => handleFilterClick('Audi')}>Audi</span>
          <span className="car1" onClick={() => handleFilterClick('BMW')}>BMW</span>
          <span className="car1" onClick={() => handleFilterClick('Bentley')}>Bentley</span>
          <span className="car1" onClick={() => handleFilterClick('Bugatti')}>Bugatti</span>
          <span className="car1" onClick={() => handleFilterClick('Ferrari')}>Ferrari</span>
          <span className="car1" onClick={() => handleFilterClick('Lamborghini')}>Lamborghini</span>
          <span className="car1" onClick={() => handleFilterClick('Land rover')}>Land rover</span>
          <span className="car2" onClick={() => handleFilterClick('Maserati')}>Maserati</span>
          <span className="car2" onClick={() => handleFilterClick('Mclaren')}>Mclaren</span>
          <span className="car2" onClick={() => handleFilterClick('Porshe')}>Porshe</span>
          <span className="car2" onClick={() => handleFilterClick('Mustang')}>Mustang</span>
          <span className="car2" onClick={() => handleFilterClick('Rolls-Royce')}>Rolls-Royce</span>
          <span className="car2" onClick={() => handleFilterClick('Mercedes-Benz')}>Mercedes-Benz</span>
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
        <Carousel cars={displayedCars} /> 
        <div className="sell">SELL YOUR CAR</div>
      </div>
    </>
  );
};

