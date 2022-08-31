import React from 'react'
import TwoD_deignbeni from './TwoD_deignbeni.js';
import Process from '../digital/Steps.js'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Techused from './Techused.js';

import Faq from '../Home-page/Faq.js';
import {UI} from '../Home-page/faqData.js';
import Clients from '../Home-page/Clients.js';
import Testimonials from '../Home-page/Testimonials.js';

import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';
import Top_banner from '../Two_D_animation/Top_banner.js';


function UI_Desg() {
  const heading="UI/UX DESIGNING" ;
  return (

    <div className='app-container'><Top_banner heading={heading}/>
      <TwoD_deignbeni /><Process/><Techused/><Testimonials/><Clients/><Faq home={UI}/><FBanner/><Footer/>

      
    </div>
  )
}

export default UI_Desg