import "../styles/sell.css";
import { NavLink } from "react-router-dom";
import sell from "../assets/sell.jpg";
import bugatti from "../assets/bugatti.jpg";

export const Sell = () => {
  return (
    <>
      <div className="sell-container">
        <div className="sell-header">
          <img className="sell-img" src={sell} alt="lamborghini on the track" />
        </div>
        <h1 className="sell-h1">SELL YOUR CAR</h1>
        <hr className="sell-hr"></hr>
        <p className="sell-p">
          At Luxury we are prolific buyers of the world’s finest supercars,
          performance cars and luxury SUVs.
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
              <NavLink to="/sell-form-valuation">
              <button className="sell-button" type="submit">
                Submit
              </button>
              </NavLink>
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
           <a href="#div_id1"><div className="learn-more">LEARN MORE</div></a>
          </div>
          <div className="option-box2">
            <div className="purchase">SALE OR RETURN</div>
            <a href="#div_id2"><div className="learn-more">LEARN MORE</div></a>
          </div>
          <div className="option-box3">
            <div className="purchase">PART EXCHANGE</div>
            <a href="#div_id3"><div className="learn-more">LEARN MORE</div></a>
          </div>
          <div className="option-box4">
            <div className="purchase">FORWARD ORDER</div>
            <a href="#div_id4"><div className="learn-more">LEARN MORE</div></a>
          </div>
          <div id="div_id1"></div>
        </div>
        <div className="learnmore">
          <div className="learnmore-box-1">
            <h3 className="learn-h3">OUTRIGHT PURCHASE</h3>
            <p className="outright-p1">Overview</p>
            <div className="aside-container">
              <aside className="outright-aside">
                <h3 className="benefits">Benefits</h3>
                <ul className="benefits-ul">
                  <li>Top prices paid</li>
                  <li>Fast & hassle-free</li>
                  <li>Same day viewing and payment</li>
                  <li>Nationwide collection included</li>
                </ul>
              </aside>
            </div>
            <p className="outright-p2">
              This is our preferred method of buying, it is the simplest and
              most convenient way to sell your car.
            </p>
            <p className="outright-p2">
              We will provide an initial valuation of your car and upon
              agreement, we will arrange a viewing followed by an instant bank
              transfer. If there is outstanding finance on the car this will
              also be cleared for you.
            </p>
            <p className="outright-p2">
              Nationwide collection is available and can usually be arranged
              within 24 hours if necessary.
            </p>
          </div>
          <div id="div_id2"></div>
        </div>
        <div className="learnmore2">
          <div className="learnmore-box-1">
            <h3 className="learn-h3">SALE OR RETURN</h3>
            <p className="outright-p1">Overview</p>
            <div className="aside-container">
              <aside className="outright-aside">
                <h3 className="benefits">Benefits</h3>
                <ul className="benefits-ul2">
                  <li>
                    Opportunity for a higher return price than an outright
                    purchase
                  </li>
                  <li>Removes the risks and hassles of selling privately</li>
                  <li>
                    Professionally advertised to the highest standards in the
                    industry
                  </li>
                  <li>
                    Exposure to the largest social media following of any
                    dealership in the UK
                  </li>
                  <li>
                    Dealership benefits such as warranty, finance, part-exchange
                    and a showroom experience to attract potential buyers
                  </li>
                </ul>
              </aside>
            </div>
            <p className="outright-p2">
              Think your car is worth more than what you’ve been offered to buy?
              Thinking of selling privately?
            </p>
            <p className="outright-p2">
              It’s always worth considering our brokerage service whereby we
              sell the car on your behalf and take a commission. Our ability to
              offer finance, part-exchange, warranty and a showroom experience
              will take all the risks and hassles of selling privately away from
              you.
            </p>
            <p className="outright-p2">
              When choosing a dealership to market your car for you it’s
              important that you find the right fit and ensure your car gets the
              exposure it deserves. At Romans you will benefit from having your
              car prepared to the highest standards, access to Romans exclusive
              client base and of course professionally advertised across various
              platforms including our social media channels, Romans website and
              various third-party platforms including Auto-Trader and
              Pistonheads
            </p>
          </div>
          <div id="div_id3"></div>
        </div>
        <div className="learnmore3">
          <div className="learnmore-box-1">
            <h3 className="learn-h3">PART EXCHANGE</h3>
            <p className="outright-p1">Overview</p>
            <div className="aside-container">
              <aside className="outright-aside">
                <h3 className="benefits">Benefits</h3>
                <ul className="benefits-ul">
                  <li>Very convenient</li>
                  <li>One simple transaction</li>
                  <li>Turn up in your old car to collect your new car</li>
                  <li>All part-exchanges considered</li>
                </ul>
              </aside>
            </div>
            <p className="outright-p2">
              Sometimes the best way to strike a good deal is by offering your
              car in part exchange against the value of a car we have in stock.
            </p>
            <p className="outright-p2">
              Though we always prefer to take in part exchanges that we would
              retail here at Romans, we are happy to consider all part exchanges
              and due to our fantastic relationships with a network of
              dealerships, we will ensure we get the very best price for your
              car.
            </p>
          </div>
          <div id="div_id4"></div>
        </div>
        <div className="learnmore4">
          <div className="learnmore-box-1">
            <h3 className="learn-h3">FORWARD ORDER</h3>
            <p className="outright-p1">Overview</p>
            <div className="aside-container">
              <aside className="outright-aside">
                <h3 className="benefits">Benefits</h3>
                <ul className="benefits-ul">
                  <li>Potential premiums free of capital gains tax</li>
                  <li>Expert advice</li>
                  <li>Discretion assured</li>
                  <li>Removes the hassle of cancelling your order</li>
                </ul>
              </aside>
            </div>
            <p className="outright-p2">
              Put down a deposit on a new car you no longer want? Want to see if
              there is a premium to be made on a highly demanded car?
            </p>
            <p className="outright-p2">
            We may well buy the order slot from you or sell it on for you hassle-free. Just get in touch.
            </p>
          </div>
        </div>
        <img className="bugatti"
        src={bugatti} alt="bugatti" />
      </div>
    </>
  );
};
