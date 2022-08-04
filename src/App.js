
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Three from './component/Three-D/Three_D.js'
// import TwoD from './component/Two_D_animation/'
import Animation from './component/Animation/Animation.js';
import WebD from './component/Web_Dev/Web_Dev.js';
import UI from './component/UI_Desg/UI_Desg.js';
import App_Dev from './component/App_Dev/App_Dev.js';
import Two from './component/Two_D_animation/Two';
import Home from './component/Home-page/home_top_banner.js';






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
          <Route path='/' element={[<Home/>]}></Route>
          



      </Routes>
    </BrowserRouter>

    
   
     {/* <Top_banner/> */}
     
    </>
  
   
  );
}

export default App;
