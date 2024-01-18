import "../styles/App.css";
import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Cars } from "./Cars";
import { Carousel } from "./Carousel";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";
import { OurValues } from "./OurValues";
import { Sell } from "./Sell";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";
import { SellFormEvaluation } from "./SellFormEvaluation";

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
            path="*"
            element={
              <>
                <div className="main-content">
                  <MainContent />
                  <Carousel />
                  <OurValues />
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
          <Route
            path="/sell"
            element={
              <>
                <Sell />
                <Footer />
              </>
            }
          />
          <Route 
          path="/sell-form-valuation"
          element={
            <>
            <SellFormEvaluation />
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
