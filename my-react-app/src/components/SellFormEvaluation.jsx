import "../styles/SellFormEvaluation.css";
import bugatti2 from "../assets/bugatti2.jpg";

export const SellFormEvaluation = () => {
  return (
    <>
      <div className="sell-form-evaluation-container">
        <img
          className="bugatti2"
          src={bugatti2}
          alt="bugatti on the race track"
        />
        <div className="evaluation-content">
          <div className="header-eval-container">
          </div>
          <div className="eval-form-container">
            <h2 className="eval-h2">GET A VALUATION</h2>
            <hr className="eval-hr2"></hr>
            <form className="eval-form">
              <label className="eval-label">
                Registration
                <input
                  className="eval-input"
                  type="text"
                  name="registration"
                  id="registration"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Name
                <input
                  className="eval-input"
                  type="text"
                  name="name"
                  id="name"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Make
                <input
                  className="eval-input"
                  type="text"
                  name="make"
                  id="make"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Email
                <input
                  className="eval-input"
                  type="text"
                  name="email"
                  id="email"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Model
                <input
                  className="eval-input"
                  type="text"
                  name="model"
                  id="model"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Phone
                <input
                  className="eval-input"
                  type="text"
                  name="phone"
                  id="phone"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Mileage
                <input
                  className="eval-input"
                  type="text"
                  name="mileage"
                  id="mileage"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Year
                <input
                  className="eval-input"
                  type="text"
                  name="year"
                  id="year"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Exterior Colour
                <input
                  className="eval-input"
                  type="text"
                  name="colour"
                  id="colour"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Interior Colour
                <input
                  className="eval-input"
                  type="text"
                  name="in-colour"
                  id="in-colour"
                  required
                ></input>
              </label>
              <label className="eval-label">
                Message
                <textarea
                  className="text-area"
                  name="message"
                  id="message"
                ></textarea>
              </label>
              <label className="eval-label">
                Any Further Information (e.g. Specification & Service History)
                <textarea
                  className="text-area"
                  name="information"
                  id="information"
                ></textarea>
              </label>
              <button className="send-button">SEND ENQUIRY</button>
              <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
