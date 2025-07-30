import React, { useState } from 'react';
import OrphanagesVideo from '../../assets/Video/OrphanagesVideo.mp4'



const Orphanages = () => {
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
       <video src={OrphanagesVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
         <h1>Support Orphaned Children</h1>
  <p>
    Your contribution helps provide <strong>shelter, food, education, and emotional care</strong> for children without families.
  </p>
  <p>
    <em>Every donation builds a safer, brighter future for a child.</em>
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

export default Orphanages;
