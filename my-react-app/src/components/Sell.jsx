import "../styles/sell.css";
import sell from "../assets/sell.jpg";
import arrow from "../assets/arrow.svg";

export const Sell = () => {
  return (
    <>
      <div className="sell-container">
        <div className="sell-header">
          <img className="sell-img" src={sell} alt="lamborghini on the track" />
          <h2 className="sell-form">SELL FORM</h2>
          <img className="arrow" src={arrow} width={90} alt="arrow svg" />
        </div>
        <h1 className="sell-h1">SELL YOU CAR</h1>
        <hr className="sell-hr"></hr>
        <p className="sell-p">
          At Luxury we are prolific buyers of the world’s finest
          supercars, performance cars and luxury SUVs.
        </p>
        <p className="sell-p">
          We specialise in exceptionally high specification, low mileage
          examples as well as the latest and rarest models so if you are looking
          to sell your supercar or luxury car then please fill out the form
          below and one of our buyers will be in touch.
        </p>
        <div className="evaluation-form">
          <h2 className="seller-h2">GET A VALUATION</h2>
          <hr className="sell-hr2"></hr>
          <p className="sell-p2">Please fill out your car details below.</p>
          <p className="sell-p2">
            Please note, we are specifically looking for low mileage (ideally
            under 25,000 miles) and high specification cars of a similar calibre
            to our stock list. We are not able to provide valuations for all
            cars.
          </p>
          <div className="form2">
            <form className="seller-form">
              <label className="seller-label">
                {" "}
                Make *
                <input
                  className="seller-input"
                  type="text"
                  placeholder="Type make here..."
                  required
                />
              </label>
              <label className="seller-label">
                {" "}
                Model *
                <input
                  className="seller-input"
                  type="text"
                  placeholder="Model make here..."
                  required
                />
              </label>
              <label className="seller-label">
                {" "}
                Mileage *
                <input
                  className="seller-input"
                  type="text"
                  placeholder="Mileage make here..."
                  required
                />
              </label>
              <button className="sell-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <h1 className="buying-service">OUR BUYING SERVICE REVIEWS</h1>
        <hr className="buying-hr"></hr>
        <div className="buying-service-box">
          <div className="sell-box1">
            <p className="sell-box-p1">
              Luxury are absoulte exprts in their field and totally professional
              at all times. Their knowledge of the market and trust they have
              developed with their customers made them the perfect partner to
              sell my Mclaren. I would not hesitate to recommend Luxury and look
              forward to buying from them in the future.
            </p>
            <p className="sell-box-name1"> Jack Miller</p>
            <hr className="sell-box-hr1"></hr>
          </div>
          <div className="sell-box2">
            <p className="sell-box-p2">
              Luxury were a breeze to deal with from start to finish. They also
              paid me £5,000 more than the other companies. I would and will
              recommend them to anyone thinking of selling their supercar.
            </p>
            <p className="sell-box-name2">Dan Roberts</p>
            <hr className="sell-box-hr2"></hr>
          </div>
          <div className="sell-box3">
            <p className="sell-box-p3">
              I have now sold 4 cras through Luxury and I could not be happier
              with the experience. I was impressed in each case by their
              integrity and slick process. It has been and pleasure doing
              business with them.
            </p>
            <p className="sell-box-name3">Callum Hayden</p>
            <hr className="sell-box-hr3"></hr>
          </div>
        </div>
        <div className="buying-options-container">
          <div className="option-box1">
           <div className="purchase">OUTRIGHT PURCHASE</div>
           <div className="learn-more">LEARN MORE</div>
          </div>
          <div className="option-box2">
           <div className="purchase">SALE OR RETURN</div>
           <div className="learn-more">LEARN MORE</div>
          </div>
          <div className="option-box3">
           <div className="purchase">PART EXCHANGE</div>
           <div className="learn-more">LEARN MORE</div>
          </div>
          <div className="option-box4">
           <div className="purchase">FORWARD ORDER</div>
           <div className="learn-more">LEARN MORE</div>
          </div>
        </div>
      </div>
    </>
  );
};
