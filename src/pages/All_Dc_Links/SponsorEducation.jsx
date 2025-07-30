import React, { useState } from 'react';
import SponsorEducationVideo from '../../assets/Video/SponsorEducationVideo.mp4'



const SponsorEducation = () => {
  const [amount, setAmount] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleDonation = () => {
    const donation = parseFloat(amount);
    if (isNaN(donation) || donation <= 0) {
      setThankYouMessage('Please enter a valid amount in AED. ');
      return;
    }

    setThankYouMessage(` Thankyou for being someone's smile, Thank you for donating ${donation.toFixed(2)} AED for the needy`);
    setAmount('');
  };

  return (
    <div className="plant-trees-page">
       <video src={SponsorEducationVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
          <h1>Sponsor a Child’s Education</h1>
  <p>
    Give a child the gift of <strong>quality education</strong> and a chance to build a brighter future.
  </p>
  <p>
    <em>Your sponsorship covers tuition, books, uniforms, and more.</em>
  </p>


        <input
          type="number"
          placeholder="Enter donation amount (AED)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={handleDonation}>Donate Now</button>

        {thankYouMessage && <div className="thank-you">{thankYouMessage}</div>}
      </div>
    </div>
  );
};

export default SponsorEducation;
