import './Dc.css';
import { Link } from 'react-router-dom'

import React from 'react';
import ReforestationIma from '../../assets/Donationcards/Reforestation.jpg'
import BloodDonationIma from '../../assets/Donationcards/BloodDonation.jpg'
import CleanCityIma from '../../assets/Donationcards/CleanCity.jpg'
import CleanWaterIma from '../../assets/Donationcards/CleanWater.jpg'
import CommunityKitchensIma from '../../assets/Donationcards/CommunityKitchens.jpg'
import DisasterReliefIma from '../../assets/Donationcards/DisasterRelief.jpg'
import FeedTheHomelessIma from '../../assets/Donationcards/FeedtTheHomeless.jpg'
import FreeMedicalCampsIma from '../../assets/Donationcards/FreeMedicalCamps.jpg'
import MentalHealthServicesIma from '../../assets/Donationcards/MentalHealthServices.jpg'
import OceansIma from '../../assets/Donationcards/Ocean.jpg'
import OrphanageIma from '../../assets/Donationcards/Orphanage.jpg'
import SchoolSupliesIma from '../../assets/Donationcards/SchoolSuplies.jpg'
import ShelterIma from '../../assets/Donationcards/Shelter.jpg'
import SponsorEducationIma from '../../assets/Donationcards/SponsorEducation.jpg'
import SupportNOGIma from '../../assets/Donationcards/SupportNOG.jpg'





const Dc = [
  { title: "Plant Trees", description: "Help reforest areas and offset carbon emissions.", image: ReforestationIma, link: "/plantprees" },

  { title: "Clean Water Access", description: "Bring safe drinking water to remote communities.", image: CleanWaterIma, link: "/cleanwater" },

  { title: "Ocean & Wildlife Conservation", description: "Protect endangered species and clean oceans.", image: OceansIma, link: "/oceanconservation" },

  { title: "City Cleanliness", description: "Support initiatives that keep public spaces clean.", image: CleanCityIma, link: "/cleancity" },

  { title: "Blood Donation Drives", description: "Fund and promote local blood donation events.", image: BloodDonationIma, link: "/blooddonation" },

  { title: "Medical Camps", description: "Provide free healthcare to underserved areas.", image: FreeMedicalCampsIma, link: "/medicalcamps" },

  { title: "Mental Health Services", description: "Support therapy, counseling, and awareness.", image: MentalHealthServicesIma, link: "/mentalhealth" },

  { title: "Orphanages", description: "Care for and educate orphaned children.", image: OrphanageIma, link: "/orphanages" },

  { title: "Sponsor Education", description: "Help underprivileged kids go to school.", image: SponsorEducationIma, link: "/sponsoreducation" },

  { title: "School Supplies", description: "Donate books, uniforms, and materials.", image: SchoolSupliesIma, link: "/schoolsupplies" },

  { title: "Feed the Homeless", description: "Ensure regular meals for those in need.", image: FeedTheHomelessIma, link: "/feedhomeless" },

  { title: "Shelter Construction", description: "Build safe housing for the displaced.", image: ShelterIma, link: "/shelterconstruction" },
  
  { title: "Community Kitchens", description: "Keep food banks and kitchens running.", image: CommunityKitchensIma, link: "/communitykitchens" },

  { title: "Support NGOs", description: "Fund grassroots organizations creating change.", image: SupportNOGIma, link: "/supportngos" },

  { title: "Disaster Relief", description: "Respond to floods, earthquakes, and more.", image: DisasterReliefIma, link: "/disasterrelief" },
];


const DonationOptions = () => {
  return (
    <div className="donation-section">
      <h1 className="donation-heading">You can donate to the following Areas</h1>

      <section className="donation-grid">
        {Dc.map((area, index) => (
          <div className="donation-card" key={index}>
                  <img src={area.image} alt={area.title} className="donation-image" />
            <h2>{area.title}</h2>
            <p>{area.description}</p>


<Link to={area.link} className="card-buttons">Know More</Link>



          </div>
        ))}
      </section>
    </div>
  );
};

export default DonationOptions;
