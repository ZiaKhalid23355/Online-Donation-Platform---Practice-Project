import React, { useState } from 'react';
import CleanCityVideo from '../../assets/Video/CleanCityVideo.mp4'



const CleanCity = () => {
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
       <video src={CleanCityVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
          <h1>Support a Cleaner City</h1>
  <p>
    Your donation helps drive <strong>waste management, recycling, and community clean-up</strong> programs, making urban spaces healthier and more beautiful.
  </p>
  <p>
    <em>Every contribution keeps our streets and air cleaner.</em>
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

export default CleanCity;

