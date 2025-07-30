import React, { useState } from 'react';
import FeedTheHomelessVideo from '../../assets/Video/FeedTheHomelessVideo.mp4'



const FeedTheHomeless = () => {
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
       <video src={FeedTheHomelessVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
    <h1>Feed the Homeless</h1>
<p>
  <strong>Hunger shouldn't be a life sentence.</strong> Your donation helps provide <em>fresh, daily meals to those living on the streets</em>, offering nourishment, dignity, and hope.
</p>
<p>
  <strong>Make a real difference—</strong><em>one plate at a time</em>.
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

export default FeedTheHomeless;
