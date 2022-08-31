import React from 'react'

import TwoD_deignbeni from './TwoD_deignbeni.js';


import Techused from './Techused.js';

import Faq from '../Home-page/Faq.js';
import {threeD} from '../Home-page/faqData.js';
import Clients from './Clients.js';
import Testimonials from './Testimonials.js';
import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';
import Services from './Services.js';
import Top_banner from './Top_banner.js';
import Steps from '../digital/Steps.js';




function Three_D() {
  return (
    <>
    <div className='app-container'><Top_banner />
      <TwoD_deignbeni /><Services/><Steps/><Techused/><Testimonials/><Clients/><Faq home={threeD}/><FBanner/><Footer/>
      
    </div>
    </>
  )
}

export default Three_D