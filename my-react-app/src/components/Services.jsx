import show from "../assets/show.jpg";
import spanner from "../assets/spanner.jpg";
import parts from "../assets/parts.jpg";
import { Footer } from "./Footer";

export const Services = () => {
  return (
    <div className="page-container">
      <img className="show-room" src={show} alt="luxury show room img"></img>
      <h2 className="service-title">LUXURY MOTORS</h2>
      <h1 className="service-sub-title">SERVICE</h1>
      <i className="gg-arrow-long-down-e"></i>
      <main>
        <section className="service-main-content">
          <div className="text-content">
            <h2 className="cert-repairs">
              CERTIFIED REPAIRS AND ORIGINAL SPARE PARTS
            </h2>
            <div className="repairs">
              You can count on Lamborghini’s After Sales service to deliver
              excellent quality, reliability and performance in any condition
              thanks to the qualified support of our official Lamborghini
              network of Dealers and Service Points. Certified technicians
              guarantee service geared toward maintaining the integrity of your
              vehicle to ensure impeccable and perfect functionality regardless
              of age and mileage.<br></br>
              <br></br> If your vehicle requires repair or restoration work,
              only original spare parts will be used and in accordance with the
              manufacturer’s specifications in order to ensure the highest
              standards of quality.
            </div>
          </div>
          <div className="service-img-container">
            <img
              className="img-cut"
              width={1400}
              src={spanner}
              alt="hand holding a spanner"
            ></img>
          </div>
        </section>
        <section className="parts-main-content">
        <div className="parts-img-container">
            <img
              className="img-cut2"
              width={1400}
              src={parts}
              alt="img that contains car parts"
            ></img>
          </div>
          <div className="text-content2">
            <h2 className="spare-parts">ORIGINAL SPARE PARTS</h2>
            <div className="parts">
              Our goal has always been to satisfy and exceed the expectations of
              our customers in terms of quality and service and our spare parts
              are built and distributed to reflect that goal. Preserving the
              efficiency of your Lamborghini means preserving the synergy
              between the elements. <br></br><br></br> The only solution to maintain the
              superiority and exclusivity of your vehicle intact over time is to
              use original spare parts. Only components that comply with the
              specifications of each model can restore the vehicle to its
              original high comfort and efficiency levels for optimum
              performance, quality and safety.
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-content2">
        <Footer />
      </footer>
    </div>
  );
};
