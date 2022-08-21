import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Footer.js';
import FBanner from './FBanner.js';
import Top_banner from './Top_banner.js';
import ThreeDWorks from './ThreeDWork.js';
import ThreeDnew from './Threenew';
import Gallery from './Gallery.js';



function Explore3d() {
  return (
    <div className='app-container'><Top_banner />
    <ThreeDnew/>
<FBanner/><Footer/>
    
  </div>
  )
}

export default Explore3d