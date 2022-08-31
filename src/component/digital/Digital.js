import React from 'react'

import TwoD_deignbeni from './TwoD_deignbeni.js';
import Steps from './Steps.js'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Techused from './Techused.js';
import Faq from '../Home-page/Faq.js';
import {digital} from '../Home-page/faqData.js';
import Clients from './Clients.js';
import Testimonials from './Testimonials.js';
import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';
import Top_banner from './Top_banner.js';




function Digital() {
  return (
    <div className='app-container'><Top_banner />
      <TwoD_deignbeni /><Steps/><Techused/><Testimonials/><Clients/><Faq home={digital}/><FBanner/><Footer/>
      
    </div>
  )
}

export default Digital