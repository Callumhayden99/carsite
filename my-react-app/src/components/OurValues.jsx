import value1 from "../assets/value1.jpg";
import value2 from "../assets/value2.jpg";
import value3 from "../assets/value3.jpg";
import track from "../assets/track.jpg";
import "../styles/OurValues.css";

export const OurValues = () => {
  return (
    <>
      <div className="our-value-conatiner">
        <h1 className="values-h1">OUR CORE VALUES</h1>
        <hr className="values-hr"></hr>
        <div className="values-trio">
          <div className="value-box1">
            <img
              className="value-box-img1"
              src={value1}
              width={270}
              alt="women working on a ferrari engine"
            ></img>
            <h2 className="value-box-h1">TRADITION AND INNOVATION</h2>
            <p className="value-box-p1">
              Tradition and innovation drive each other. The ongoing quest for
              lasting firsts is what fuels the Ferrari legend. <br></br>
              <br></br>Our ability to combine revolutionary technological
              solutions with exceptional artisanal craftsmanship is what enables
              us to create icons that stay timeless in a fast-changing world.
            </p>
          </div>
          <div className="value-box2">
            <img
              className="value-box-img2"
              src={value2}
              width={300}
              alt="classic ferrari car"
            />
            <h2 className="value-box-h2">INDIVIDUAL AND TEAM</h2>
            <p className="value-box-p2">
              Our talented individuals are our greatest resource. However, they
              can only pursue the extraordinary by working together as a team.
              <br></br>
              <br></br>
              By fostering integrity, excellence and generosity, we give each of
              our people the possibility to express their own full potential -
              and be part of something greater.
            </p>
          </div>
          <div className="value-box3">
            <img
              className="value-box-img3"
              src={value3}
              width={300}
              alt="luxury car getting ade in the factory"
            />
            <h2 className="value-box-h3">PASSION AND ACHIEVEMENT</h2>
            <p className="value-box-p3">
              Ferrari’s racing spirit lives on in emotions that transcend the
              road and the track, ultimately becoming an authentic attitude
              towards life. <br></br>
              <br></br>Nothing excites us more than setting ambitious targets
              and expectations – and then exceeding them, to push every
              boundary. It is how the power of passion becomes the beauty of
              achievement.
            </p>
          </div>
        </div>
      </div>
      <div className="art">
        <h2 className="art-h2">THE ART OF PERFORMANCE</h2>
        <hr className="art-hr"></hr>
        <p className="art-p">
          Life. It’s not about figures. It’s about feelings. The moments that
          feed your soul. The occasions that take your breath away. The
          instances that leave you speechless. These are the moments we live
          for.
        </p>
        <p className="art-p">
          That’s why our designers and engineers at Jaguar develop a blend of
          responsive performance that gets your pulse racing, dramatic design
          that makes you stop and stare and a sense of theatre that stirs your
          emotions.
        </p>
        <p className="art-p">
          Our cars are a manifestation of our passion. Performance that cannot
          be measured, only felt. That’s why we call it art.
        </p>
      </div>
      <div className="end-of-art">
        <div className="art-overlay">
            <h3 className="art-h3">OUR SEARCH FOR EXCELLENCE</h3>
          <img className="track" src={track} alt="super car on the track" />
        </div>
      </div>
    </>
  );
};
