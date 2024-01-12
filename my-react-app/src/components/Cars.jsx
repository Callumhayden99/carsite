import aston2 from "../assets/aston2.jpg";
import maserati from "../assets/maserati.jpg";
import porshe1 from "../assets/porshe1.jpg";
import bentley from "../assets/bentley.jpg";
import rolls1 from "../assets/rolls1.jpg";
import { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
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
        <div className="slide">
          ASTON MARTIN VANQUISH ZAGATO SPEEDSTER
          <div className="car-container">
            <img
              className="car-img"
              src={aston2}
              width={300}
              alt="ASTON MARTIN VANQUISH ZAGATO SPEEDSTER"
            />
            <div className="car-spec">
              <div className="spec-1">
                <div className="speed">Top Speed:</div>
                <div className="sub-speed">201 MPH</div>
              </div>
              <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">3.4 S</div>
              </div>
              <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£559,950</div>
              </div>
              <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2018</div>
              </div>
              <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Ming Blue</div>
              </div>
            </div>
          </div>
        </div>
        </Slide>
        <Slide index={1}>
        <div className="slide">
          PORSCHE 911 TURBO S CABRIOLET
          <div className="car-container">
            <img
              className="car-img"
              src={porshe1}
              width={300}
              alt="PORSCHE 911 TURBO S CABRIOLET"
            />
            <div className="car-spec">
              <div className="spec-1">
                <div className="speed">Top Speed:</div>
                <div className="sub-speed">205 MPH</div>
              </div>
              <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">2.7 S</div>
              </div>
              <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£154,950</div>
              </div>
              <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2022</div>
              </div>
              <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Jet Black Metallic</div>
              </div>
            </div>
          </div>
        </div>
        </Slide>
        <Slide index={2}>
        <div className="slide">
          MASERATI MC20 CIELO
          <div className="car-container">
            <img
              className="car-img"
              src={maserati}
              width={350}
              alt="MASERATI MC20 CIELO"
            />
            <div className="car-spec">
              <div className="spec-1">
                <div className="speed">Top Speed:</div>
                <div className="sub-speed">198 MPH</div>
              </div>
              <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">2.9 S</div>
              </div>
              <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£269,950</div>
              </div>
              <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2023</div>
              </div>
              <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Grigio Incognito</div>
              </div>
            </div>
          </div>
        </div>
        </Slide>
        <Slide index={3}>
        <div className="slide">
          BENTLEY CONTINENTAL SUPERSPORTS CONVERTIBLE
          <div className="car-container">
            <img
              className="car-img"
              src={bentley}
              width={300}
              alt="BENTLEY CONTINENTAL SUPERSPORTS CONVERTIBLE"
            />
            <div className="car-spec">
              <div className="spec-1">
                <div className="speed">Top Speed:</div>
                <div className="sub-speed">205 MPH</div>
              </div>
              <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">3.7 S</div>
              </div>
              <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£104,950</div>
              </div>
              <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2018</div>
              </div>
              <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Anthracite Grey</div>
              </div>
            </div>
          </div>
        </div>
        </Slide>
        <Slide index={4}>
        <div className="slide">
          ROLLS-ROYCE DAWN
          <div className="car-container">
            <img
              className="car-img"
              src={rolls1}
              width={300}
              alt="ROLLS-ROYCE DAWN"
            />
            <div className="car-spec">
              <div className="spec-1">
                <div className="speed">Top Speed:</div>
                <div className="sub-speed">155 MPH</div>
              </div>
              <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">4.5 S</div>
              </div>
              <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£164,950</div>
              </div>
              <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2016</div>
              </div>
              <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Black Diamond</div>
              </div>
            </div>
          </div>
        </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};
export const Cars = () => {
  return (
    <>
      <div className="filter-menu">
        <h1 className="filter-h1">VIEW FULL STOCK</h1>
        <h2 className="filter-h2">SEARCH BY MANUFACTURER</h2>
        <div className="car-options">
          <span>Aston Martin</span>
          <span className="car1">Audi</span>
          <span className="car1">BMW</span>
          <span className="car1">Bentley</span>
          <span className="car1">Bugatti</span>
          <span className="car1">Ferrari</span>
          <span className="car1">Lamborghini</span>
          <span className="car1">Land rover</span>
          <span className="car2">Maserati</span>
          <span className="car2">Mclaren</span>
          <span className="car2">Porshe</span>
          <span className="car2">Mustang</span>
          <span className="car2">Rolls-Royce</span>
          <span className="car2">Mercedes-Benz</span>
          <span className="car2">Mustang</span>
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
        <Carousel /> 
        <div className="sell">SELL YOUR CAR</div>
      </div>
    </>
  );
};

