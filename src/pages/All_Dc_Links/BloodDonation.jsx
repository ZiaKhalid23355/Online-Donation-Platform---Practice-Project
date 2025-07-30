import React, { useState } from 'react';
import BloodDonationn from '../../assets/Video/BloodDonationVideo.mp4'



const BloodDonation = () => {
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
       <video src={BloodDonationn} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
          <h1>Support Blood Donation Drives</h1>
  <p>
    Every <strong>drop of blood</strong> can be a lifeline. Your donation empowers us to organize blood drives, supply hospitals, and respond to emergencies swiftly.
  </p>
  <p>
    <em>Be the reason someone lives another day</em> — your support truly saves lives.
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

export default BloodDonation;














