import { NavLink } from "react-router-dom";
import logo99 from "../assets/logo99.png";

export const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
 
    console.log("Search submitted");
  };
  return (
    <>
      <header className="header">
        <img className="h1-title" src={logo99} width={450} alt="Logo" />
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
