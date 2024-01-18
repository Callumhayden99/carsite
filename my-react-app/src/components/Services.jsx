import "../styles/services.css";
import show from "../assets/show.jpg";
import spanner from "../assets/spanner.jpg";
import parts from "../assets/parts.jpg";
import training from "../assets/training.jpg";
import classic from "../assets/classic.jpg";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

export const Services = () => {
  return (
    <div className="page-container">
      <img className="show-room" src={show} alt="luxury show room img"></img>
      <h2 className="service-title">LUXURY MOTORS</h2>
      <h1 className="service-sub-title">SERVICE</h1>
      <i className="gg-arrow-long-down-e"></i>
      <main>
        <h1 className="luxury-service">
          WHY CHOOSE OFFICIAL LUXURY MOTORS CAR SERVICING?
        </h1>
        <hr className="service-hr"></hr>
        <div className="why-luxury">
          Who better to service your luxury car than the experts? With an Aston
          Martin service, you can relax in the knowledge that your Aston Martin
          is in safe hands. Our approved vehicle service technicians are
          regularly trained in the latest techniques They use only Genuine
          Parts, complete with a 12-month warranty, to ensure your car receives
          the very best service. Free checks for software and mechanical updates
          are, of course, included, as well as having the service record
          digitally updated to securely record the provenance of your car’s
          service history.
        </div>
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
              between the elements. <br></br>
              <br></br> The only solution to maintain the superiority and
              exclusivity of your vehicle intact over time is to use original
              spare parts. Only components that comply with the specifications
              of each model can restore the vehicle to its original high comfort
              and efficiency levels for optimum performance, quality and safety.
            </div>
          </div>
        </section>
        <section className="service-main-content">
          <div className="text-content">
            <h2 className="cert-repairs">TRAINING AND CERTIFICATION</h2>
            <div className="repairs">
              Located in Sant’Agata Bolognese and designed to provide training
              and refresher courses to After Sales staff, the Lamborghini
              Training Academy is on a mission to provide the needed skills to
              achieve Customer Experience excellence and the highest standards
              of service quality.<br></br>
              <br></br>Training is led by a team of experts who make sure the
              dealership staff becomes the perfect representation of the
              Lamborghini spirit. This spirit is all about precision, attention
              to details and technological evolution. Work on your vehicle will
              be done by highly specialized and certified professionals –
              always.
            </div>
          </div>
          <div className="service-img-container">
            <img
              className="img-cut"
              width={1400}
              src={training}
              alt="hand holding a spanner"
            ></img>
          </div>
        </section>
        <section className="parts-main-content">
          <div className="parts-img-container">
            <img
              className="img-cut2"
              width={1400}
              src={classic}
              alt="img that contains car parts"
            ></img>
          </div>
          <div className="text-content2">
            <h2 className="spare-parts">CLASSIC SPARE PARTS</h2>
            <div className="parts">
              Classic Spare Parts is the service that makes it possible to
              replace the components of classic Lamborghini vehicles while
              preserving their authenticity and increasing their value. Use of
              original spare parts is essential for the preservation,
              maintenance and restoration of classic models from Sant’Agata
              Bolognese.<br></br>
              <br></br> The spare parts come from a classic spare parts
              warehouse or are manufactured on request by the original
              suppliers. If a specific spare part is not available, it can be
              faithfully reproduced from the original drawings and technical
              specifications of the materials used.
            </div>
          </div>
        </section>
       <ContactForm/>
      </main>
    </div>
  );
};