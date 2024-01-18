import "../styles/Carousel.css";
import { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import porshe911 from "../assets/porshe911.jpg";
import aston from "../assets/aston.jpg";
import mclaren1 from "../assets/mclaren1.jpg";
import ferrari from "../assets/ferrari.jpg";
import mclaren from "../assets/mclaren.jpg";
import rollscull from "../assets/rollscull.jpg";
import urus from "../assets/urus.jpg";
import gwagon from "../assets/gwagon.jpg";
import porshe from "../assets/porshe.jpg";
import defender from "../assets/defender.jpg";
import aston2 from "../assets/aston2.jpg";
import maserati from "../assets/maserati.jpg";
import porshe1 from "../assets/porshe1.jpg";
import bentley from "../assets/bentley.jpg";
import rolls1 from "../assets/rolls1.jpg";
import merc from "../assets/merc.jpg";
import porshe2 from "../assets/porshe2.jpg";
import ferrari1 from "../assets/ferrari1.jpg";
import aston3 from "../assets/aston3.jpg";
import ferrari2 from "../assets/ferrari2.jpg";

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
    <div className="carousels-container">
      <div className="carousel-container">
        <CarouselProvider
          naturalSlideWidth={50}
          naturalSlideHeight={23}
          totalSlides={5}
          currentSlide={currentSlide}
          isPlaying={true}
          interval={4000}
        >
          <Slider>
            <Slide index={0}>
              <div className="slide">
              PORSCHE 911 GT3 TOURING
                <div className="car-container">
                  <img
                    className="car-img"
                    src={porshe911}
                    width={300}
                    alt="PORSCHE 911 GT3 TOURING"
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
                      <div className="sub-colour">GT Silver Metallic</div>
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
                      <div className="sub-colour">Buckinghamshire Green</div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="slide">
              MCLAREN 570 GT MSO BLACK
                <div className="car-container">
                  <img
                    className="car-img"
                    src={mclaren1}
                    width={300}
                    alt="MCLAREN 570 GT MSO BLACK"
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
                      <div className="sub-colour">MSO Carbon Black</div>
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
                      <div className="sub-colour">Rosso Portofino</div>
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
          naturalSlideHeight={23}
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
      <div className="carousel-container">
        <CarouselProvider
          naturalSlideWidth={50}
          naturalSlideHeight={25}
          totalSlides={5}
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
            <Slide index={2}>
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
        </div>
        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={25}
            totalSlides={5}
            currentSlide={currentSlide}
            isPlaying={true}
            interval={4000}
          >
            <Slider>
              <Slide index={0}>
                <div className="slide">
                  MERCEDES-BENZ AMG GT BLACK SERIES
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={merc}
                      width={300}
                      alt="MERCEDES-BENZ AMG GT BLACK SERIES"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">202 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">2.9 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£389,995</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2022</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Obsidian Black</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide">
                  PORSCHE 911 DAKAR
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={porshe2}
                      width={350}
                      alt="Aston Martin Vantage"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">141 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">3.2 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£173,000</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2023</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Shade Green Metallic</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="slide">
                  FERRARI 812 SUPERFAST
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={ferrari1}
                      width={300}
                      alt="FERRARI 812 SUPERFAST"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">211 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">2.9 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£239,950</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2019</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Grigio Silverstone</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="slide">
                  ASTON MARTIN DBS SUPERLEGGERA
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={aston3}
                      width={300}
                      alt="ASTON MARTIN DBS SUPERLEGGERA"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">211 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">3.2 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£139,995</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2019</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Ultimate Black</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="slide">
                  FERRARI 812 SUPERFAST
                  <div className="car-container">
                    <img
                      className="car-img"
                      src={ferrari2}
                      width={300}
                      alt="FERRARI 812 SUPERFAST"
                    />
                    <div className="car-spec">
                      <div className="spec-1">
                        <div className="speed">Top Speed:</div>
                        <div className="sub-speed">211 MPH</div>
                      </div>
                      <div className="spec-1">
                        <div className="zero-sixty">0 - 60 MPH:</div>
                        <div className="sub-zero-sixty">2.9 S</div>
                      </div>
                      <div className="spec-1">
                        <div className="price">Price:</div>
                        <div className="sub-price">£254,950</div>
                      </div>
                      <div className="spec-1">
                        <div className="year">Year:</div>
                        <div className="sub-year">2018</div>
                      </div>
                      <div className="spec-1">
                        <div className="colour">Colour:</div>
                        <div className="sub-colour">Eosso Fuoco</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
  );
};
