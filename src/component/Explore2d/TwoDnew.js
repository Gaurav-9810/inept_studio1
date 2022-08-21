import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { AnimationOnScroll } from 'react-animation-on-scroll';






 import {ThreeDEnvi,outfit,props,ThreeDConcept,video,Interior} from './Explore2ddata.js';

 import Gallery from '../Explore3d/Gallery.js';
import VideoGallery from '../Explore3d/VideoGallery.js';





import './TwoDnew.css';

function Explorenew() {
  
  const[show,setShow]=useState(0);

    
        
    const handleshow=(x)=>{
      setShow(x);
    }
         
         
   return (
     

 
    <div className=' px-4 sm:px-6 md:px-8 lg:px-10 xl:px-11 pb-6  bg-slate-50 '>
      <span className='Under mb-7'>
          <h1 className='text-center font-semibold text-5xl  pt-4 mb-3'>Our  <span className=' text-violet-700'>2D Work</span></h1>
         <hr className='hr'></hr>
      </span>

      <div className='nav-expore inline-block  mb-10 cursor-pointer' >
        <ul className='flex   inline-block flex-wrap '>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===0 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(0)} >3d video</li>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===1 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`}  onClick={()=>handleshow(1)}>3d Props</li>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===2 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(2)}>3d concept arts</li>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===3 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(3)}>outfits/Character</li>
          <li  style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===4 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(4)} >interior design</li>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===5 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(5)} >3d enviornment</li>
        </ul>
      </div>
      
    {show!=0?<></>:<><VideoGallery filterArr={video}/>
   
</>}
         {show!=1?<></>:<><Gallery filterArr={props}/></>} 
        {show!=2?<></>:<><Gallery filterArr={ThreeDConcept}/></>}  
        {show!=3?<></>:<><Gallery filterArr={outfit}/></>}
        {show!=4?<></>:<><Gallery filterArr={Interior}/></>}
        {show!=5?<></>:<><Gallery filterArr={ThreeDEnvi}/></>} 
        
        
             
    </div>
  )
}

export default Explorenew