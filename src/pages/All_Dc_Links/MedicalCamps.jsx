import React, { useState } from 'react';
import MedicalCampsVideo from '../../assets/Video/MedicalCampsVideo.mp4'



const MedicalCamps = () => {
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
       <video src={MedicalCampsVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
          <h1>Fund Free Medical Camps</h1>
  <p>
    Your donation helps organize <strong>health check-ups, treatments, and life-saving services</strong> for underserved communities.
  </p>
  <p>
    <em>Every dirham provides care to someone in need.</em>
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

export default MedicalCamps;




