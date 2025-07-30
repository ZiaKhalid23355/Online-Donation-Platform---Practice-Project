import React, { useState } from 'react';
import SupportNgosVideo from '../../assets/Video/SupportNgosVideo.mp4'



const SupportNgos = () => {
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
       <video src={SupportNgosVideo} className="background-video" autoPlay loop muted playsInline>
      </video>


      <div className="donation-box">
        
         <h1>Support NGOs</h1>
<p>
  <strong>Empower local NGOs</strong> making a real difference on the ground. Your contribution strengthens the work of community-based organizations focused on <em>healthcare, education, environment, and social justice</em>.
</p>
<p>
  With your help, NGOs can reach more people, expand their programs, and create sustainable change. <strong>Together, we can fuel grassroots impact</strong> that transforms lives and communities.
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

export default SupportNgos;
