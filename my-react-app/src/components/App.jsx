import "../styles/App.css";
import "../styles/Header.css"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Carousel } from "./Carousel"

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
          <div className="welcome-content">
            WELCOME TO THE <strong>LUXURY MOTORS</strong>
            <br></br>
            <div className="welcome-content2">CAR DEALERSHIP</div>
            <Carousel/>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
