
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Three from './component/Three-D/Three_D.js'
// import TwoD from './component/Two_D_animation/'
import Animation from './component/Animation/Animation.js';
import WebD from './component/Web_Dev/Web_Dev.js';
import UI from './component/UI_Desg/UI_Desg.js';
import App_Dev from './component/App_Dev/App_Dev.js';
import Two from './component/Two_D_animation/Two';
import Home from './component/Home-page/Home.js';
import Game from './component/game-dev/Game_dev.js';
import Digital from './component/digital/Digital.js';
import About from './component/About_us/About.js';
import Contact from './component/Contact_us/Contact.js';
import Explore3d from './component/Explore3d/Explore3d';
import Explore2d from './component/Explore2d/Explore2d';
import ExploreAnimation from './component/ExploreAnimation/ExploreAnimation';











function App() {
  return (
    < >
    <BrowserRouter>
      <Routes>
          <Route path='/ThreeD' element={[<Three/>] }/>
          <Route path='/TwoD' element={[<Two/>]}></Route>
          <Route path='/Animation' element={[<Animation/>]}></Route>
          <Route path='/WebD' element={[<WebD/>]}></Route>
          <Route path='/App' element={[<App_Dev/>]}></Route>
          <Route path='/UI' element={[<UI/>]}></Route>
          <Route path='/Game' element={[<Game/>]}></Route>
          <Route path='/Digital' element={[<Digital/>]}></Route>
          <Route path='/AboutUs' element={[<About/>]}></Route>
          <Route path='/ContactUs' element={[<Contact/>]}></Route>
          <Route path='/ThreeD/Explore3d' element={[<Explore3d/>]}></Route>
          <Route path='/TwoD/Explore2d' element={[<Explore2d/>]}></Route>
          <Route path='/Animation/ExploreAnimation' element={[<ExploreAnimation/>]}></Route>



          <Route path='/' element={[<Home/>]}></Route>
          



      </Routes>
    </BrowserRouter>

    
   
     {/* <Top_banner/> */}
     
    </>
  
   
  );
}

export default App;
