import React, { useEffect } from 'react';
import './home_counter.css';
// import img1 from '../../images/Project completed.jpg';
// import img2 from '../../images/actice clients.webp';
// import img3 from '../../images/cup of coffee.webp';
// import img4 from '../../images/Happy clients.jpg';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HailIcon from '@mui/icons-material/Hail';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// import url from './home_service_scrpit.js';


import CountUp,{ useCountUp } from 'react-countup';

// const SimpleHook = () => {
//   useCountUp({ ref: 'counter', end: 1234567 });
//   return <span id="counter" />;
// };

function Home_counter() {
    // useCountUp({ ref: 'counter',start:0, end: 100 ,duration:5,enableScrollSpy: true,
    // scrollSpyDelay: 1000 });
    useCountUp({
        ref: "counter",
        end: 123,
        enableScrollSpy: true,
        // scrollSpyDelay: 1
      });
      useCountUp({
        ref: "counter2",end: 120,enableScrollSpy: true, scrollSpyDelay: 1
      });  
      useCountUp({
        ref: "counter3",end: 140,enableScrollSpy: true, scrollSpyDelay: 1
      }); 
      useCountUp({
        ref: "counter4",end: 120,enableScrollSpy: true, scrollSpyDelay: 1
      });   
  




  return (
    
      <div className='home_service_container'><div class="wrapper">
        {/* <span className='text-white' id="counter" /> */}
    <div class="container">
     <FileCopyIcon className='counterimg'sx={{fontSize:'70px'}}/>
    
    <span class="num"  id='counter'/>
   
        
        <span class="text">Project Completed </span>
    </div>
    <div class="container">
        <HailIcon className='counterimg'  sx={{fontSize:'70px'}}/>
        <span class="num"  id='counter2'>000</span>
        <span class="text">Active Clients</span>
    </div>
    <div class="container">
        <CoffeeIcon className='counterimg'sx={{fontSize:'70px'}} />
        <span class="num" id='counter3'>000</span>
        <span class="text">Cup of Coffee</span>
    </div>
    <div class="container">
        <GroupIcon className='counterimg' sx={{fontSize:'70px'}}/>
        <span class="num" id='counter4'>000</span>
        <span class="text">Happy Clients</span>
    </div>
</div></div>

  )
}

export default Home_counter