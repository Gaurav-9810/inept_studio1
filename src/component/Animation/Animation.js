import React from 'react'

import TwoD_deignbeni from './TwoD_deignbeni.js';


import Techused from './Techused.js';

import Faq from './Faq.js';
import Clients from '../Home-page/Clients.js';
import Testimonials from '../Home-page/Testimonials.js';
import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';

import Top_banner from '../Two_D_animation/Top_banner.js';
import Steps from '../digital/Steps.js';

import Services from './Services.js';



function Animation() {
  const heading="ANIMATION" ;
  return (
    <>
    <div className='app-container'><Top_banner heading={heading}/>
      <TwoD_deignbeni /><Services/><Steps/><Techused/><Testimonials/><Clients/><Faq/><FBanner/><Footer/>
      
    </div>
    </>
  )
}

export default Animation