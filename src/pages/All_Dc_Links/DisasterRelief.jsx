import React, { useState } from 'react';
import DisasterReliefVideo from '../../assets/Video/DisasterReliefVideo.mp4'



const DisasterRelief = () => {
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
       <video src={DisasterReliefVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
         <h1>Disaster Relief</h1>
<p>
  <strong>Act swiftly in times of crisis.</strong> Your donation helps deliver <em>emergency aid, food, clean water, shelter, and medical support</em> to those affected by natural or man-made disasters.
</p>
<p>
  Every contribution brings relief and hope to communities facing their darkest hours. <strong>Be the help they need—when they need it most.</strong>
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

export default DisasterRelief;

