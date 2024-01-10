import { NavLink, Routes, Route } from "react-router-dom";
import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";

export const MainContent = () => {
  return (
    <>
      <div className="welcome-content">
        WELCOME TO THE <strong>LUXURY MOTORS</strong>
        <br></br>
        <div className="welcome-content2">CAR DEALERSHIP</div>
      </div>
      <div className="center-container">
        <div className="opening1">
          <p>
            We are a luxury business, an independent luxury car dealership
            established in 1994 with a curated selection of the latest
            supercars, luxury SUVs and modern performance cars for sale.
          </p>
        </div>
        <div className="opening2">
          <p>
            We pride ourselves on preparing and presenting them to the very
            highest standards whilst our long-serving staff are dedicated to
            building relationships and ensuring the experience of buying or
            selling supercars is always an enjoyable, seamless and secure
            process.
          </p>
        </div>
      </div>
      <div className="middle-content">
        <div className="cover-image-container">
          <img
            src={cover1}
            className="cover-image"
            alt="picture of a luxury car with an explore page"
          />
          <NavLink to="/cars" className="cover-image-text1">Explore</NavLink>
        </div>
        <div className="cover-image-container">
          <img
            src={cover2}
            className="cover-image"
            alt="picture of a luxury car with a service page"
          />
          <NavLink to="/services" className="cover-image-text2">Services</NavLink>
        </div>
        <div className="cover-image-container">
          <img
            src={cover3}
            className="cover-image"
            alt="picture of a luxury car with a sell page"
          />
          <NavLink to="/sell" className="cover-image-text3">Sell</NavLink>
        </div>
        <Routes>
            <Route path="/cars"/>
            <Route path="/services"/>
            <Route path="/sell"/>
        </Routes>
      </div>
      <h3 className="latest-arrivals">Latest Arrivals</h3>
      <hr className="latest-hr"></hr>
    </>
  );
};
