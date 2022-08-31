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
import {home} from './faqData.js';



function Home() {
  return (
    <>
    <div className='app-container'><Top_banner /><div className='mb-10'><Home_Service /></div><Homecomponent/><div className="mt-24 xl:mt-36"><Testimonials/> </div>
   
      <Clients/><Counter/><Faq home={home}/><FBanner/><Footer/>
    </div>
    </>
  )
}

export default Home