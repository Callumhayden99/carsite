import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import lambo from '../assets/lambo.jpg';
import aston from '../assets/aston.jpg'
import r8 from '../assets/r8.jpg'

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={200}
      naturalSlideHeight={120}
      totalSlides={3}
    >
      <Slider> 
        <Slide index={0}> Lamborghini Huracan Tecnica
          <img src={lambo} width={250} alt="Lamborghini Huracan Tecnica" />
        </Slide>
        <Slide index={1}>Aston Martin Vantage
        <img src={aston} width={250} alt="Aston Martin Vantage"></img>
        </Slide>
        <Slide index={2}>Audi R8 Spyder
        <img src={r8} width={250} alt="Audi R8 Spyder"></img>
         </Slide>
      </Slider>

      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
