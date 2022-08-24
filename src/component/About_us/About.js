import React from 'react'


// import Process from './Process.js'; 

// import Techused from './Techused.js';

import Clients from './Clients.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';
import FBanner from './FBanner.js';
// import Services from './Services.js';
import Top_banner from './Top_banner.js';
import Newabout from './Newabout.js';
import imgspring from '../../images/6909.jpg'
import Abou from './Abou.js';
import imgsprin from '../../images/4380.jpg'
import Counts from '../Home-page/home_counter'



function About() {
  return (
    <>
    <div className='app-container'><Top_banner />
      <Newabout/><Abou/><Counts/><Testimonials/><Clients/><FBanner/><Footer/>
      
    </div>
    </>
  )
}

export default About