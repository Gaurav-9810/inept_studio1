
import './App.css';
import TwoD_deignbeni from './component/Two_D_animation/TwoD_deignbeni.js';
import Process from './component/Two_D_animation/Process.js'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Techused from './component/Two_D_animation/Techused.js';
// import TechUsed1 from './component/TechUsed1';
import Faq from './component/Two_D_animation/Faq.js';
import Clients from './component/Two_D_animation/Clients.js';
import Testimonials from './component/Two_D_animation/Testimonials.js';
import Footer from './component/Two_D_animation/Footer.js';
import FBanner from './component/Two_D_animation/FBanner.js';
import Services from './component/Two_D_animation/Services.js';
import Top_banner from './component/Two_D_animation/Top_banner.js';
import Three_D from './component/Three-D/Three_D'; 




function App() {
  return (
    < >
    {/* <BrowserRouter>
      <Routes>
          <Route path='/' element={[ <div className='app-container'><Top_banner />
      <TwoD_deignbeni /><Services/><Process/><Techused/><Testimonials/><Clients/><Faq/><FBanner/><Footer/>
      
    </div>]
  
  }/>
      </Routes>
    </BrowserRouter> */}

    <Three_D/>
   
     {/* <Top_banner/> */}
     
    </>
  
   
  );
}

export default App;
