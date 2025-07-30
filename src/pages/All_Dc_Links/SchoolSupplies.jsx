import React, { useState } from 'react';
import SchoolSuppliesVideo from '../../assets/Video/SchoolSuppliesVideo.mp4'



const SchoolSupplies = () => {
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
       <video src={SchoolSuppliesVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
          <h1>Donate School Supplies</h1>
  <p>
    Help us equip children with <strong>essential tools for learning</strong>—notebooks, pens, backpacks, and more.
  </p>
  <p>
    <em>Your support empowers a child to succeed in the classroom and beyond.</em>
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

export default SchoolSupplies;







