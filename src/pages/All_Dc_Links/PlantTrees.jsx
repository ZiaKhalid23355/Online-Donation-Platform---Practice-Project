import React, { useState } from 'react';
import ReforestationVideo from '../../assets/Video/ReforestationVideo.mp4'



const PlantTrees = () => {
  const [amount, setAmount] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  
  const handleDonation = async () => {
  const donation = parseFloat(amount);

  if (isNaN(donation) || donation <= 0) {
    setThankYouMessage("Please enter a valid amount in AED.");
    return;
  }

  try {
    await fetch("http://localhost:5000/api/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Plant Trees",
        Vanlue: donation
      })
    });

    setThankYouMessage(
      `Thank you for your donation of ${donation.toFixed(2)} AED`
    );
// To be edited from here
    setAmount("");
    //setAmount("")- Working required
  } catch (error) {
    console.log(error);
  }
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
