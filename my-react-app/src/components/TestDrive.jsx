import { useState } from "react";
import PropTypes from "prop-types";

export const TestDrive = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    telephone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you can add logic to send data to a server or process it further
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="enquiry-popup">
      <div className="enquiry-popup-inner">
        <h2 className="enquiry-title">Book a Test Drive</h2>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="enquiry-label">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="enquiry-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="enquiry-label">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="enquiry-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone" className="enquiry-label">Telephone:</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="enquiry-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="enquiry-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="enquiry-input"
              required
            />
          </div>

          <button type="submit" className="enquiry-button">Submit</button>
        </form>
        <button onClick={onClose} className="enquiry-close-button">Close</button>
      </div>
    </div>
  );
};

TestDrive.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TestDrive;
