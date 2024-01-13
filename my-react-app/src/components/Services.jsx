import show from "../assets/show.jpg";
import { Footer } from "./Footer";

export const Services = () => {
  return (
    <div className="page-container">
      
        <img className="show-room" src={show} alt="luxury show room img"></img>
        <h2 className="service-title">LUXURY MOTORS</h2>
        <h1 className="service-sub-title">SERVICE</h1>
        <i className="gg-arrow-long-down-e"></i>
      <main></main>
      <footer className="footer-content2">
        <Footer />
      </footer>
    </div>
  );
};
