import "../styles/App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Cars } from "./Cars";
import { LeftMenu } from "./LeftMenu";
import { Carousel } from "./Carousel";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";
import { OurValues } from "./OurValues";
import { Sell } from "./Sell";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";
import { SellFormEvaluation } from "./SellFormEvaluation";
import { BuyCar } from "./BuyCar";


function App() {
  const location = useLocation();
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedBodyStyle, setSelectedBodyStyle] = useState("");

  const handleMakeSelection = (make) => {
    setSelectedMake(make);
  };

  const handleBodyStyleSelection = (bodyStyle) => {
    setSelectedBodyStyle(bodyStyle);
  };

  const resetFilters = () => {
    setSelectedMake("");
    setSelectedBodyStyle("");
  };

  let navigate = useNavigate();

  const handleSearch = (make) => {
    setSelectedMake(make);
    navigate("/cars"); // Navigate programmatically to /cars
  };

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
        <Header onSearch={handleSearch} />
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
                <LeftMenu
                  onMakeSelect={handleMakeSelection}
                  onBodyStyleSelect={handleBodyStyleSelection}
                  onResetFilters={resetFilters}
                />
                <Cars
                  selectedMake={selectedMake}
                  selectedBodyStyle={selectedBodyStyle}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services />
                <Footer />
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
          <Route
            path="/buy-Car/:carId"
            element={
              <>
                <BuyCar />
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
