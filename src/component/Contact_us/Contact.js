import React from 'react'

import Footer from './Footer.js';
import FBanner from './FBanner.js';

import Top_banner from './Top_banner.js';
import ContactSection from './ContactSection.js';



function Contact() {
  return (
    <>
    <div className='app-container'><Top_banner />
      <ContactSection/><FBanner/><Footer/>
      
    </div>
    </>
  )
}

export default Contact