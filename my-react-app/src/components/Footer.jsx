import "../styles/Footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="row">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="row">
            LUXURY Copyright © 2023 Luxury - All rights reserved || Designed By:
            LUXURY MOTORS
          </div>

          <div className="row">
            <p>
              Experience the epitome of luxury and performance. Luxury Motors
              brings you the finest selection of premium vehicles, handcrafted
              for automotive enthusiasts. Explore our exclusive range and
              elevate your driving experience today.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
