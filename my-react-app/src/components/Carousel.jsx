import { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import lambo from "../assets/lambo.jpg";
import aston from "../assets/aston.jpg";
import r8 from "../assets/r8.jpg";
import ferrari from "../assets/ferrari.jpg";
import mclaren from "../assets/mclaren.jpg";
import rollscull from "../assets/rollscull.jpg";
import urus from "../assets/urus.jpg";
import gwagon from "../assets/gwagon.jpg";
import porshe from "../assets/porshe.jpg";
import defender from "../assets/defender.jpg";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="carousels-container">
        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={120}
            totalSlides={5}
            currentSlide={currentSlide}
            isPlaying={true}
            interval={4000}
          >
            <div></div>
            <Slider>
              <Slide index={0}>
                <div className="slide">
                  LAMBORGHINI HURACAN TECNICA
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
                  ASTON MARTIN VANTAGE
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
                AUDI R8 SPYDER
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
                   FERRARI SF90
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
                 MCLAREN P1
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
          </CarouselProvider>
        </div>
        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={120}
            totalSlides={5}
            currentSlide={currentSlide}
            isPlaying={true}
            interval={4000}
          >
            <Slider>
              <Slide index={0}>
                <div className="slide">
                  ROLLS-ROYCE CULLINAN
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={rollscull}
                      width={300}
                      alt="ROLLS-ROYCE CULLINAN"
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
                        <div className="sub-price">£340,500</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2023</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Black Diamond</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide">
                  LAMBORGHINI URUS
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={urus}
                      width={350}
                      alt="LAMBORGHINI URUS"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">190 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">3.1 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£200,000</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2021</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Blu Eleos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="slide">
                  MERCEDES-BENZ G AMG G63
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={gwagon}
                      width={300}
                      alt="Audi R8 Spyder"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">137 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">4.5 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£184,950</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2023</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Dark Olive Green Magno</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="slide">
                  PORSCHE CAYENNE TURBO GT
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={porshe}
                      width={300}
                      alt="PORSCHE CAYENNE TURBO GT"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">189 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">3.0 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£144,950</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2022</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">
                          PTS Graphite Blue Metallic
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="slide">
                  LAND ROVER DEFENDER 110
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={defender}
                      width={300}
                      alt="Mclaren P1"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">149 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">5.1 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£99,995</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2023</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Santorini Black</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
};
