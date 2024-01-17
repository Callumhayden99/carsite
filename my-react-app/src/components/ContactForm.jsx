import "../styles/Contact.css";
import { useState } from "react";

export const ContactForm = () =>{


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return(
        <>
        <div className="contact-header">
        <h1 className="contact-h1">ENQUIRIES & BOOKINGS</h1>
        <hr className="contact-hr"></hr>
        </div>
        <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
                autoComplete="given-name" // Add this line
                required
            />
        </div>
        <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                autoComplete="family-name" // Add this line
                required
            />
        </div>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                autoComplete="email" // Add this line
                required
            />
        </div>
        <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you..."
                required
            ></textarea>
        </div>
        <button className="contact-button" type="submit">Submit</button>
    </form>
    </div>
    </>
    )
}