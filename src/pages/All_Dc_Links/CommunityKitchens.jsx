import React, { useState } from 'react';
import CommunityKitchensVideo from '../../assets/Video/CommunityKitchensVideo.mp4'



const CommunityKitchens = () => {
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
       <video src={CommunityKitchensVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
   <h1>Community Kitchens</h1>
<p>
  <strong>No one should go to bed hungry.</strong> Your contribution helps us run <em>community kitchens that serve warm, nutritious meals</em> to those in need, every single day.
</p>
<p>
  <strong>Together, we can fight hunger</strong> and bring comfort to the vulnerable—one meal at a time.
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

export default CommunityKitchens;





