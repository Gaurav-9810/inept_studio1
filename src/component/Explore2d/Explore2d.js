import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Top_banner from './Top_banner.js';
import Footer from '../../component/Home-page/Footer.js';
import FBanner from '../../component/Home-page/FBanner.js';

import TwoDnew from './TwoDnew';




function Explore2d() {
  return (
    <div className='app-container'><Top_banner />
    <TwoDnew/>
<FBanner/><Footer/>
    
  </div>
  )
}

export default Explore2d