import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//imports needs modifications- for fullstack development
//To be edited after cloning

import Home from './pages/Home/Home';
import About_Us from './pages/AllLinks/About_Us';
import Contact_Us from './pages/AllLinks/Contact_Us';
import Revenue_Generated from './pages/AllLinks/Revenue_Generated';
import Success_Stories from './pages/AllLinks/Success_Stories';
import Browse_By_Language from './pages/AllLinks/Browse_By_Language';
import Fb_page from './pages/AllLinks/Fb_page';
import Insta_page from './pages/AllLinks/Insta_page';
import Twitter_page from './pages/AllLinks/Twitter_page';
import HelpCenter from './pages/AllLinks/HelpCenter';
import Jobs from './pages/AllLinks/Jobs';
import Terms_Of_Use from './pages/AllLinks/Terms_Of_Use';
import Cookies_Preference from './pages/AllLinks/Cookies_Preference';
import Privacy from './pages/AllLinks/Privacy';
import SearchIcon from './pages/AllLinks/SearchIcon';

import PlantTrees from './pages/All_Dc_Links/PlantTrees';
import CleanWater from './pages/All_Dc_Links/CleanWater';
import CleanCity from './pages/All_Dc_Links/CleanCity';
import OceanconServation from './pages/All_Dc_Links/Ocean';
import BloodDonation from './pages/All_Dc_Links/BloodDonation';
import MedicalCamps from './pages/All_Dc_Links/MedicalCamps';
import MentalHealthServices from './pages/All_Dc_Links/MentalHealthServices';
import Orphanages from './pages/All_Dc_Links/Orphanages';
import SponsorEducation from './pages/All_Dc_Links/SponsorEducation';
import SchoolSupplies from './pages/All_Dc_Links/SchoolSupplies';
import FeedTheHomeless from './pages/All_Dc_Links/FeedTheHomeless';
import ShelterConstruction from './pages/All_Dc_Links/ShelterConstruction';
import CommunityKitchens from './pages/All_Dc_Links/CommunityKitchens';
import SupportNgos from './pages/All_Dc_Links/SupportNgos';
import DisasterRelief from './pages/All_Dc_Links/DisasterRelief';
import SDLC from './pages/SDLC/SDLC.JSX';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/AboutUs" element={<About_Us />} />
          <Route path="/ContactUs" element={<Contact_Us />} />
          <Route path="/RevenueGenerated" element={<Revenue_Generated />} />
          <Route path="/SuccessStories" element={<Success_Stories />} />
          <Route path="/BrowseByLanguage" element={<Browse_By_Language />} />
          <Route path="/Fbpage" element={<Fb_page />} />
          <Route path="/Instapage" element={<Insta_page />} />
          <Route path="/Twitterpage" element={<Twitter_page />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/HelpCenter" element={<HelpCenter />} />
          <Route path="/TermsOfUse" element={<Terms_Of_Use />} />
          <Route path="/CookiesPreference" element={<Cookies_Preference />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/SearchIcon" element={<SearchIcon />} />


          
          <Route path="/plantprees" element={<PlantTrees />} />
          <Route path="/cleanwater" element={<CleanWater />} />
          <Route path="/cleancity" element={<CleanCity />} />
          <Route path="/oceanconservation" element={<OceanconServation />} />
          <Route path="/blooddonation" element={<BloodDonation />} />
          <Route path="/medicalcamps" element={<MedicalCamps />} />
          <Route path="/mentalhealth" element={<MentalHealthServices />} />
          <Route path="/orphanages" element={<Orphanages />} />
          <Route path="/sponsoreducation" element={<SponsorEducation />} />
          <Route path="/schoolsupplies" element={<SchoolSupplies />} />
          <Route path="/feedhomeless" element={<FeedTheHomeless />} />
          <Route path="/shelterconstruction" element={<ShelterConstruction />} />
          <Route path="/communitykitchens" element={<CommunityKitchens />} />
          <Route path="/supportngos" element={<SupportNgos />} />
          <Route path="/disasterrelief" element={<DisasterRelief />} />


<Route path="/sdlc" element={<SDLC />} />



        </Routes>
     
    </Router>
  );
};

export default App;
