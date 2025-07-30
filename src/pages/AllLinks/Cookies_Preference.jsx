import React from 'react'
import './AllLinksCss/AllLinks.css';

const Cookies_Preference = () => {
  return (
    <div className='cookiespreference'>
      <div className='cookiespreference-content'>
       <h1>Cookies Preference</h1>
        <p>
          At our Online Donation Platform, we use cookies to enhance your browsing experience and ensure our website functions effectively. Cookies help us understand user behavior, track website performance, and remember your preferences for a seamless donation process.
        </p>
        <p>
          By using our website, you consent to the use of essential cookies. You also have the option to manage your cookie preferences. These may include performance cookies, analytics cookies, and marketing cookies, which help us improve our services and tailor content to better suit your needs.
        </p>
        <p>
          You can update or withdraw your cookie consent at any time through your browser settings. Please note that disabling certain cookies may affect the functionality of our site. For more information on how we use cookies and manage your data, please refer to our <a href="/Privacy" style={{ color: '#00ff15', textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
        <p>
          Our platform operates in accordance with data protection regulations in the UAE and globally. We are committed to transparency and your trust in us remains our top priority.
        </p>
      </div>
    </div>
  )
}

export default Cookies_Preference