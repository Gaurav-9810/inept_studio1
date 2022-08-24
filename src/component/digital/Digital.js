import React from 'react'

import TwoD_deignbeni from './TwoD_deignbeni.js';
import Steps from './Steps.js'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Techused from './Techused.js';
import Faq from './Faq.js';
import Clients from './Clients.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';
import FBanner from './FBanner.js';
import Top_banner from './Top_banner.js';




function Digital() {
  return (
    <div className='app-container'><Top_banner />
      <TwoD_deignbeni /><Steps/><Techused/><Testimonials/><Clients/><Faq/><FBanner/><Footer/>
      
    </div>
  )
}

export default Digital