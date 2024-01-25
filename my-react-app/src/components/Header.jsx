import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";


// eslint-disable-next-line react/prop-types, no-unused-vars
export const Header = ({ onSearch }) => {

  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  return (
    <>
      <header className="header">
        <h1 className="h1-title">LUXURY MOTORS</h1>
        <nav className="nav-bar">
          <div className="button_cont">
            <NavLink
              to="/"
              className="example_d"
              rel="noopener noreferrer"
            >
              Home
            </NavLink>
          </div>
          <div className="button_cont">
            <NavLink
              to="/Cars"
              className="example_d"
              rel="noopener noreferrer"
            >
              Cars
            </NavLink>
          </div>
          <div className="button_cont">
            <NavLink
              to="/Services"
              className="example_d"
              rel="noopener noreferrer"
            >
              Services
            </NavLink>
          </div>
          <div className="button_cont">
          <NavLink
              to="/Aboutus"
              className="example_d"
              rel="noopener noreferrer"
            >
              About Us
            </NavLink>
          </div>
          <div className="button_cont">
          <NavLink
              to="/sell"
              className="example_d"
              rel="noopener noreferrer"
            >
              Sell
            </NavLink>
          </div>
        </nav>
        <div className="search-container">
          <form onSubmit={handleSubmit} role="search">
            <input
              className="header-input"
              id="search"
              type="search"
              placeholder="Search by make..."
              autoFocus
              required
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="submit-button" type="submit">Go</button>
          </form>
        </div>
      </header>
    </>
  );
};