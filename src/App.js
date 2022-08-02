
import './App.css';
import TwoD_deignbeni from './component/TwoD_deignbeni';
import Process from './component/Process.js'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Techused from './component/Techused';
// import TechUsed1 from './component/TechUsed1';
import Faq from './component/Faq';
import Clients from './component/Clients';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';
import FBanner from './component/FBanner';
import Services from './component/Services';
import Top_banner from './component/Top_banner';



function App() {
  return (
    < >
    <BrowserRouter>
      <Routes>
          <Route path='/' element={[ <div className='app-container'><Top_banner />
      <TwoD_deignbeni /><Services/><Process/><Techused/><Testimonials/><Clients/><Faq/><FBanner/><Footer/>
      
    </div>]
  
  }/>
      </Routes>
    </BrowserRouter>
   
     {/* <Top_banner/> */}
     
    </>
  
   
  );
}

export default App;
