import React, { useState } from 'react';
import './AllLinksCss/AllLinks.css';

const Contact_Us = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset(); // optional: reset the form after submission
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          We are available <strong className="contact-description-strong">24/7</strong> to assist you. Feel free to reach out for support,
          questions, or feedback.
        </p>

        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Full Name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Type your message here..." required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        ) : (
          <p className="thank-you-message"> Thank you for contacting us! <br/>Lets help the needy.</p>
        )}

        <div className="contact-info">
          <p><strong>Email:</strong> onliondonation@gmail..com</p>
          <p><strong>Phone:</strong> +971 (55) 987-6543</p>
          <p><strong>Support Hours:</strong> 24/7 Availability</p>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
