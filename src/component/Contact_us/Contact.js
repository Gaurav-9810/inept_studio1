import React from 'react'


import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';

import Top_banner from '../Two_D_animation/Top_banner.js';
import ContactSection from './ContactSection.js';



function Contact() {
  const heading="CONTACT US" ;
  return (
    <>
    <div className='app-container'><Top_banner heading={heading}/>
      <ContactSection/><FBanner/><Footer/>
      
    </div>
    </>
  )
}

export default Contact