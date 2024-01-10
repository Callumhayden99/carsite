import "../styles/App.css";
import "../styles/Header.css";
import "../styles/Carousel.css";
import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Cars } from "./Cars";
import { Carousel } from "./Carousel";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";
import { MainContent } from "./MainContent";

function App() {
  const location = useLocation();

  useEffect(() => {
    const bodyStyle = document.body.style;
    switch (location.pathname) {
      case "/":
        bodyStyle.backgroundImage =
          'url("https://www.topgear.com/sites/default/files/2021/11/DSC01735.jpg")';
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
        <main>
          <Cars />
          <Services />
          <AboutUs />
          <MainContent />
          <Carousel />
        </main>
        <Routes>
          <Route path="/" />
          <Route path="/cars" />
          <Route path="/services" />
          <Route path="/aboutUs" />
        </Routes>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
