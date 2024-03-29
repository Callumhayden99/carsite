import "../styles/Aboutus.css";

import shelby from "../assets/shelby.jpg";
import tele from "../assets/tele.png";
import autocar from "../assets/autocar.png";
import evo from "../assets/evo.png";
import sold1 from "../assets/sold1.jpg";
import sold2 from "../assets/sold2.jpg";
import sold3 from "../assets/sold3.jpg";
import sold from "../assets/sold.jpg";

export const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <img className="sold-header-img" src={sold} alt="" />
        <div className="triple-container">
          <h3 className="about-us">WHY CHOOSE LUXURY</h3>
          <hr className="about-hr"></hr>
          <div className="about-content">
            <div className="content1">
              Whilst we would love to list 101 reasons why you should choose
              Luxury when it comes to buying or selling your next car and tell
              you all about our core values and why we've been successful for
              over 2 decades operating at the highest end of the industry, we
              feel it is probably better to hear what others say about us, the
              respected journalists and experts of our industry and most
              importantly, our clients.
            </div>
          </div>
          <div className="inspiring-container">
            <h3 className="inspiring-h3">INSPIRING GREATNESS</h3>
            <hr className="inspiring-hr"></hr>
            <p className="inspiring-p">
              Inspiring Greatness exists at the very core of Rolls-Royce Motor
              Cars. It is the guiding force from which our innovation,
              aspirations, and ongoing legacy unfold. As we continue to extend
              the limits of possibility, Inspiring Greatness will forever remain
              our ultimate pursuit.
            </p>
          </div>
        </div>
        <div className="our-work">
          <h3 className="sold-h3">RECENTLY SOLD</h3>
          <hr className="sold-hr"></hr>
          <div className="sold-container">
            <div className="sold-img-container">
              <div className="sold-box-1"></div>
              <div className="sold-name">ASTON MARTIN V12 VANTAGE</div>
              <img className="sold-img" src={sold3} width={500} alt="ASTON MARTIN V12 VANTAGE" />
            </div>
            <div className="sold-img-container">
              <div className="sold-box-2"></div>
              <div className="sold-name">FERRARI 488 PISTA SPIDER</div>
              <img className="sold-img" src={sold2} width={500} alt="FERRARI 488 PISTA SPIDER" />
            </div>
            <div className="sold-img-container">
              <div className="sold-box-3"></div>
              <div className="sold-name">FERRARI ENZO</div>
              <img className="sold-img" src={sold1} width={500} alt="FERRARI ENZO" />
            </div>
          </div>
        </div>
        <div className="media-content">
          <div className="image-overlay-container">
            <img
              className="shelby-cover"
              src={shelby}
              alt="mustang driving in the sun"
            ></img>
            <div className="overlay-content">
              <h3 className="about-us2">WHAT THE MEDIA SAY</h3>
              <hr className="media-hr"></hr>
              <div className="media-box-container">
                <div className="box-1">
                  <div className="number">1</div>
                  <div className="box-content">
                    "One of the most respected high end<br></br> UK car dealers"
                  </div>
                  <img
                    className="autocar"
                    src={autocar}
                    width={200}
                    alt="the autocar logo"
                  ></img>
                  <hr className="hr-media-box"></hr>
                </div>
                <div className="box-2">
                  <div className="number">2</div>
                  <div className="box-content">
                    "Luxury have a reputation for stocking sensational metal"
                  </div>
                  <img
                    className="telegraph"
                    src={tele}
                    width={300}
                    alt="the telegraph logo"
                  ></img>
                  <hr className="hr-media-box2"></hr>
                </div>
                <div className="box-3">
                  <div className="number">3</div>
                  <div className="box-content">
                    "Long established high end car dealer"
                  </div>
                  <img
                    className="evo"
                    src={evo}
                    width={150}
                    alt="the evo logo"
                  ></img>
                  <hr className="hr-media-box3"></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
