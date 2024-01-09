import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import lambo from "../assets/lambo.jpg";
import aston from "../assets/aston.jpg";
import r8 from "../assets/r8.jpg";
import ferrari from "../assets/ferrari.jpg";  // Corrected filename if necessary
import mclaren from "../assets/mclaren.jpg"; 

export const Carousel = () => {
  return (
    <div className="carousel-container"> 
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={5}
    >
      <Slider>
        <Slide index={0}>
          <div className="slide">
            Lamborghini Huracan Tecnica
            <div className="car-container">
              <img
                className="car-img"
                src={lambo}
                width={300}
                alt="Lamborghini Huracan Tecnica"
              />
              <div className="car-spec">
                <div className="spec-1">
                  <div className="speed">Top Speed:</div>
                  <div className="sub-speed">202 MPH</div>
                </div>
                <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">3.2 S</div>
                </div>
                <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£255,855</div>
                </div>
                <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2022</div>
                </div>
                <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Matte Black</div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="slide">
            Aston Martin Vantage
            <div className="car-container">
              <img
                className="car-img"
                src={aston}
                width={350}
                alt="Aston Martin Vantage"
              />
           <div className="car-spec">
                <div className="spec-1">
                  <div className="speed">Top Speed:</div>
                  <div className="sub-speed">200 MPH</div>
                </div>
                <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">3.5 S</div>
                </div>
                <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£239,950</div>
                </div>
                <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2022</div>
                </div>
                <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Green Metallic</div>
                </div>
              </div>
              </div>
          </div>
        </Slide>
        <Slide index={2}>
          <div className="slide">
            Audi R8 Spyder
            <div className="car-container">
              <img
                className="car-img"
                src={r8}
                width={300}
                alt="Audi R8 Spyder"
              />
               <div className="car-spec">
                <div className="spec-1">
                  <div className="speed">Top Speed:</div>
                  <div className="sub-speed">204 MPH</div>
                </div>
                <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">3.2 S</div>
                </div>
                <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£147,590</div>
                </div>
                <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2023</div>
                </div>
                <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Grey Metallic</div>
                </div>
              </div>
              </div>
          </div>
        </Slide>
        <Slide index={3}>
          <div className="slide">
            Ferrai SF90
            <div className="car-container">
              <img
                className="car-img"
                src={ferrari}
                width={300}
                alt="Ferrai SF90"
              />
              <div className="car-spec">
                <div className="spec-1">
                  <div className="speed">Top Speed:</div>
                  <div className="sub-speed">211 MPH</div>
                </div>
                <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">2.5 S</div>
                </div>
                <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£409,995</div>
                </div>
                <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2022</div>
                </div>
                <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">Red</div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={4}>
          <div className="slide">
            Mclaren P1
            <div className="car-container">
              <img
                className="car-img"
                src={mclaren}
                width={300}
                alt="Mclaren P1"
              />
              <div className="car-spec">
                <div className="spec-1">
                  <div className="speed">Top Speed:</div>
                  <div className="sub-speed">217 MPH</div>
                </div>
                <div className="spec-1">
                <div className="zero-sixty">0 - 60 MPH:</div>
                <div className="sub-zero-sixty">2.8 S</div>
                </div>
                <div className="spec-1">
                <div className="price">Price:</div>
                <div className="sub-price">£1,350,000</div>
                </div>
                <div className="spec-1">
                <div className="year">Year:</div>
                <div className="sub-year">2015</div>
                </div>
                <div className="spec-1">
                <div className="colour">Colour:</div>
                <div className="sub-colour">metallic grey</div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Slider>

      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
    </div>
  );
};
