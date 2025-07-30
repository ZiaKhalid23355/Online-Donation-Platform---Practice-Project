import React, { useState } from 'react';
import ReforestationVideo from '../../assets/Video/ReforestationVideo.mp4'



const PlantTrees = () => {
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
       <video src={ReforestationVideo} className="background-video" autoPlay loop muted playsInline>
      </video>

      


      <div className="donation-box">
           <h2><strong>Make a Lasting Impact</strong></h2>

  <p>
    Your donation helps <strong>restore forests</strong>, <em>absorb carbon</em>, and <strong>revive ecosystems</strong>.
    Each tree you support contributes to a healthier, greener planet.
  </p>

  <p>
    <em>Together, we grow a better future.</em>
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

export default PlantTrees;
