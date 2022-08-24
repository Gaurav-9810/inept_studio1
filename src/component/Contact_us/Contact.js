import React from 'react'


import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';

import Top_banner from './Top_banner.js';
import ContactSection from './ContactSection.js';



function Contact() {
  return (
    <>
    <div className='app-container'><Top_banner/>
      <ContactSection/><FBanner/><Footer/>
      
    </div>
    </>
  )
}

export default Contact