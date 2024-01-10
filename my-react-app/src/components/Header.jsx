import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log("Search submitted");
  };
  return (
    <>
      <header className="header">
        <img className="h1-title" src={logo} width={250} alt="Logo" />
        <nav className="nav-bar">
          <div className="button_cont">
            <NavLink
              to="/"
              className="example_d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </NavLink>
          </div>
          <div className="button_cont">
            <NavLink
              to="/Cars"
              className="example_d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cars
            </NavLink>
          </div>
          <div className="button_cont">
            <NavLink
              to="/Services"
              className="example_d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </NavLink>
          </div>
          <div className="button_cont">
            <NavLink
              to="/About us"
              className="example_d"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </NavLink>
          </div>
        </nav>
        <div className="search-container">
          <form onSubmit={handleSubmit} role="search">
            <label htmlFor="search"></label>
            <input
              id="search"
              type="search"
              placeholder="Search by make..."
              autoFocus
              required
            />
            <button type="submit">Go</button>
          </form>
        </div>
      </header>
    </>
  );
};
