import React from 'react'

import TwoD_deignbeni from './TwoD_deignbeni.js';
import Process from './Process.js'; 

import Techused from './Techused.js';

import Faq from './Faq.js';
import Clients from './Clients.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';
import FBanner from './FBanner.js';
import Services from './Services.js';
import Top_banner from './Top_banner.js';



function Three_D() {
  return (
    <>
    <div className='app-container'><Top_banner />
      <TwoD_deignbeni /><Services/><Process/><Techused/><Testimonials/><Clients/><Faq/><FBanner/><Footer/>
      
    </div>
    </>
  )
}

export default Three_D