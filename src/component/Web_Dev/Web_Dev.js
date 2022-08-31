import React from 'react'

import TwoD_deignbeni from './TwoD_deignbeni.js';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Techused from './Techused.js';

import Faq from '../Home-page/Faq.js';
import {webD} from '../Home-page/faqData.js';
import Clients from '../Home-page/Clients.js';
import Testimonials from '../Home-page/Testimonials.js';

import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';
import Top_banner from '../Two_D_animation/Top_banner.js';
import Steps from '../digital/Steps.js';


function Web_Dev() {
  const heading="WEB DEVELOPMENT" ;
  return (

    <div className='app-container'><Top_banner heading={heading}/>
      <TwoD_deignbeni /><Steps/><Techused/><Testimonials/><Clients/><Faq home={webD}/><FBanner/><Footer/>

      
    </div>
  )
}

export default Web_Dev