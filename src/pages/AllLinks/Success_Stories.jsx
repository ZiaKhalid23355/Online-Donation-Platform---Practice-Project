import React from 'react'
import './AllLinksCss/AllLinks.css';
import SuccessStoriesVideo from '../../assets/Video/SuccessStoriesVid.mp4'

const Success_Stories = () => {
  return (
<div className="success-stories-container">
      <div className="video-background">


        
        <video className="actual-video" src={SuccessStoriesVideo} autoPlay loop muted playsInline />
      </div>

      <div className="overlay-content">
        <h1 className="main-title">Success Stories</h1>
        <p className="intro-text">
          Thanks to your generous support, we’ve been able to create lasting impact across multiple communities. 
          Below are just a few examples of how your donations are changing lives.
        </p>

        <div className="stories-grid">

          <div className="story-card">
            <h3>Clean Water for Life</h3>
            <p>
              In remote villages of Southeast Asia, your donations helped install water purification systems, 
              providing clean drinking water to over 500 families for the first time.
            </p>
          </div>
          <div className="story-card">
  <h3>Smiles in Orphanages</h3>
  <p>Abandoned no more — children now sleep peacefully, nurtured by your love and support.</p>
</div>

<div className="story-card">
  <h3>Hope on Wheels</h3>
  <p>Medical vans reached remote villages — treating hundreds, all because you cared.</p>
</div>

<div className="story-card">
  <h3>Clean Cities, Proud People</h3>
  <p>From littered streets to shining neighborhoods — your donations restored civic pride.</p>
</div>

<div className="story-card">
  <h3>Fueling Dreams with Supplies</h3>
  <p>Books, bags, and bright futures — you’ve equipped young minds to chase their dreams.</p>
</div>

<div className="story-card">
  <h3>Warm Meals, Warmer Hearts</h3>
  <p>Your support keeps community kitchens open — every plate served is a silent thank-you.</p>
</div>

<div className="story-card">
  <h3>Blood That Saves Lives</h3>
  <p>From emergency rooms to road accidents — your funded drives helped save countless lives.</p>
</div>

<div className="story-card">
  <h3>NGOs That Move Mountains</h3>
  <p>Behind every success is a team on the ground — and you gave them the power to act.</p>
</div>

<div className="story-card">
  <h3>Relief Where It's Needed</h3>
  <p>In the chaos of floods and earthquakes, your donations brought calm, food, and shelter.</p>
</div>


          <div className="story-card">
            <h3>Rebuilding After Disaster</h3>
            <p>
              Following severe floods in South Asia, we provided emergency shelter, food, and medical support to thousands of displaced families.
            </p>
          </div>

          <div className="story-card">
            <h3>Education That Empowers</h3>
            <p>
              Hundreds of underprivileged children are now attending school regularly, thanks to education sponsorships and school supply donations.
            </p>
          </div>

          <div className="story-card">
            <h3>Feeding the Homeless</h3>
            <p>
              Through our community kitchens, we’ve served over 20,000 hot meals to homeless individuals in urban areas across the region.
            </p>
          </div>

          <div className="story-card">
            <h3>Planting for the Planet</h3>
            <p>
              Your support enabled the planting of over 10,000 trees in deforested regions, contributing to carbon offset and biodiversity restoration.
            </p>
          </div>

          <div className="story-card">
            <h3>Hope Through Mental Health</h3>
            <p>
              With your contributions, we’ve provided therapy and mental health services to hundreds of individuals battling depression and anxiety.
            </p>
          </div>

        </div>
      </div>
    </div>
)
}

export default Success_Stories