import React from 'react'
import TwoD_deignbeni from './TwoD_deignbeni.js';
import Process from './Process.js'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Techused from './Techused.js';
import Faq from '../Home-page/Faq.js';
import {AppD} from '../Home-page/faqData.js';
import Clients from './Clients.js';
import Testimonials from './Testimonials.js';
import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';
import Top_banner from './Top_banner.js';
import Steps from '../digital/Steps.js';


function App_Dev() {
  return (
    <div className='app-container'><Top_banner />
    <TwoD_deignbeni /><Steps/><Techused/><Testimonials/><Clients/><Faq home={AppD}/><FBanner/><Footer/>
    
  </div>
  )
}

export default App_Dev