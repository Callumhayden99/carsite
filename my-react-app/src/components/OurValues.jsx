import value1 from "../assets/value1.jpg";
import value2 from "../assets/value2.jpg";
import value3 from "../assets/value3.jpg";
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
              lasting firsts is what fuels the Ferrari legend. Our ability to
              combine revolutionary technological solutions with exceptional
              artisanal craftsmanship is what enables us to create icons that
              stay timeless in a fast-changing world.
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
              towards life. Nothing excites us more than setting ambitious
              targets and expectations – and then exceeding them, to push every
              boundary. It is how the power of passion becomes the beauty of
              achievement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
