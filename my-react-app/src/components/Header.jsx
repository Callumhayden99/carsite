import { NavLink } from "react-router-dom";
import search from "../assets/search.svg";

export const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="h1-title">Luxury Motors</h1>
        <nav className="nav-bar">
          <NavLink className="home" activeClassName="active" to="/">
            <span>Home</span>
          </NavLink>
          <NavLink className="cars" activeClassName="active" to="/cars">
            <span>Cars</span>
          </NavLink>
          <NavLink className="services" activeClassName="active" to="/services">
            <span>Services</span>
          </NavLink>
          <NavLink className="about-us" activeClassName="active" to="/about">
            <span>About Us</span>
          </NavLink>
        </nav>
        <div className="search-container">
          <img
            className="search-icon"
            src={search}
            width={40}
            alt="search icon"
          />
          <input
            className="search-bar"
            type="text"
            placeholder="Search for a car"
          ></input>
        </div>
      </header>
    </>
  );
};
