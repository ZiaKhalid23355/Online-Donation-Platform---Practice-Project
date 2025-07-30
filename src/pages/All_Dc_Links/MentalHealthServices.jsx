import React, { useState } from 'react';
import MentalHealthServicesVideo from '../../assets/Video/MentalHealthServicesVideo.mp4'



const MentalHealthServices = () => {
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
       <video src={MentalHealthServicesVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
       <h1>Mental Health Services</h1>
<p>
  <strong>Mental well-being is just as important as physical health.</strong> Your donation supports <em>counseling, therapy, and crisis intervention</em> for individuals facing emotional and psychological struggles.
</p>
<p>
  <strong>Help us break the stigma—</strong><em>because every mind matters</em>.
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

export default MentalHealthServices;