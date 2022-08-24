import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from '../Home-page/Footer.js';
import FBanner from '../Home-page/FBanner.js';
import Top_banner from './Top_banner.js';

import ThreeDnew from './Animationnew.js';
// import Gallery from './Gallery.js';



function ExploreAnimation() {
  return (
    <div className='app-container'><Top_banner />
    <ThreeDnew/>
<FBanner/><Footer/>
    
  </div>
  )
}

export default ExploreAnimation