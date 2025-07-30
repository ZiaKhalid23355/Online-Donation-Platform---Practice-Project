import React, { useState } from 'react';
import ShelterConstructionVideo from '../../assets/Video/ShelterConstructionVideo.mp4'



const ShelterConstruction = () => {
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
       <video src={ShelterConstructionVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
     <h1>Shelter Construction</h1>
<p>
  <strong>Everyone deserves a safe place to call home.</strong> Your donation supports the <em>construction of secure, sustainable shelters</em> for families displaced by poverty, conflict, or disaster.
</p>
<p>
  Help rebuild lives with dignity. <strong>Every brick laid brings hope and stability to someone in need.</strong>
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

export default ShelterConstruction;



