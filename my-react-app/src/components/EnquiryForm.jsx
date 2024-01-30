import PropTypes from "prop-types";

const EnquiryForm = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <h1>Enquiry Form</h1>
      <div className="enquiry-popup">
        <div className="enquiry-popup-inner">
          <h2 className="enquiry-title">Enquire about this car</h2>
          <form className="enquiry-form">
            <div className="form-group">
              <label htmlFor="firstName" className="enquiry-label">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="enquiry-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="enquiry-label">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="enquiry-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="enquiry-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="enquiry-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone" className="enquiry-label">
                Telephone:
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                required
                className="enquiry-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="enquiry-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="enquiry-textarea"
              ></textarea>
            </div>

            <button type="submit" className="enquiry-button">Send</button>
          </form>
          <button onClick={onClose} className="enquiry-close-button">Close</button>
        </div>
      </div>
    </div>
  );
};

EnquiryForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EnquiryForm;
