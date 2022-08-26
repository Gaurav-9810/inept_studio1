import React from 'react'


import Homecomponent  from './Homecomponent.js';

import Faq from './Faq.js';
import Clients from './Clients.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';
import FBanner from './FBanner.js';
import Counter from './home_counter.js';
import Top_banner from './home_top_banner';
import Home_Service from './Home_Service.js';



function Home() {
  return (
    <>
    <div className='app-container'><Top_banner /><Home_Service/><Homecomponent/>
      <Testimonials/><Clients/><Counter/><Faq/><FBanner/><Footer/>
    </div>
    </>
  )
}

export default Home