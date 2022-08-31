import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Top_banner from '../Two_D_animation/Top_banner.js';
import Footer from '../../component/Home-page/Footer.js';
import FBanner from '../../component/Home-page/FBanner.js';

import TwoDnew from './TwoDnew';




function Explore2d() {
  const heading="EXPLORE OUR 2D WORK" ;
  return (
    <div className='app-container'><Top_banner heading={heading}/>
    <TwoDnew/>
<FBanner/><Footer/>
    
  </div>
  )
}

export default Explore2d