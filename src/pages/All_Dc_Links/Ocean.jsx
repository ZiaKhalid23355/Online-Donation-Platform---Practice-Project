import React, { useState } from 'react';
import CleanOceanVideo from '../../assets/Video/CleanOceanVideo.mp4'



const CleanOcean = () => {
  const [amount, setAmount] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleDonation = () => {
    const donation = parseFloat(amount);
    if (isNaN(donation) || donation <= 0) {
      setThankYouMessage('Please enter a valid amount in AED. ');
      return;
    }

   setThankYouMessage(`Thank you for donating ${donation.toFixed(2)} AED`);
    setAmount('');
  };

  return (
    <div className="plant-trees-page">
       <video src={CleanOceanVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
   <h1>Protect Oceans & Wildlife</h1>
  <p>
    Our planet’s beauty lies in its <strong>diverse marine life</strong> and ecosystems. Your donation helps clean oceans, rescue endangered species, and restore natural habitats.
  </p>
  <p>
    <em>Together, we can keep our oceans alive</em> — and preserve wildlife for generations to come.
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

export default CleanOcean;
