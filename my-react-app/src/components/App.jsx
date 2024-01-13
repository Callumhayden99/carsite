import "../styles/App.css";
import "../styles/Header.css";
import "../styles/Carousel.css";
import "../styles/Aboutus.css";
import "../styles/Cars.css";
import "../styles/services.css";
import "../styles/Footer.css";
import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Cars } from "./Cars";
import { Carousel } from "./Carousel";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    const bodyStyle = document.body.style;
    switch (location.pathname) {
      case "/":
        bodyStyle.backgroundImage =
          'url("https://pharoahgroup.com/wp-content/uploads/2-1.jpg';
        bodyStyle.backgroundSize = "cover";
        bodyStyle.backgroundPosition = "center";
        bodyStyle.backgroundRepeat = "no-repeat";
        break;
      default:
        bodyStyle.backgroundImage = "none";
        break;
    }
  }, [location]);

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-content">
                  <MainContent />
                  <Carousel />
                  <AboutUs />
                </div>
                <Footer />
              </>
            }
          />

          <Route
            path="/cars"
            element={
              <>
                <Cars />
                
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services />
              </>
            }
          />
          <Route
            path="/Aboutus"
            element={
              <>
                <AboutUs />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;