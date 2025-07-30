import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import Twitterr from '../../assets/Socials/twitter.webp';
import Facebookk from '../../assets/Socials/Facebook.webp';
import Instagramm from '../../assets/Socials/insta.webp';

const Footer = () => {
  return (
    <div className="footer">
      <ul id="socialicons">
        <li>
          <Link to="/Fbpage">
            <img id="fbicon" src={Facebookk} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link to="/Instapage">
            <img id="instaicon" src={Instagramm} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link to="/Twitterpage">
            <img id="twittericon" src={Twitterr} alt="Twitter" />
          </Link>
        </li>
      </ul>

      <ul id="sociallinks">
        <li><Link to="/HelpCenter">Help Center</Link></li>
        <li><Link to="/Jobs">Jobs</Link></li>
        <li><Link to="/TermsOfUse">Terms of Use</Link></li>
        <li><Link to="/Privacy">Privacy</Link></li>
        <li><Link to="/CookiesPreference">Cookies Preferences</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
      </ul>

      <p>&copy;{new Date().getFullYear()} Online Donation Platform. All rights reserved.</p>
    </div>
  );
};

export default Footer;
