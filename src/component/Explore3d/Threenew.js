import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { AnimationOnScroll } from 'react-animation-on-scroll';






 import {ThreeDEnvi,outfit,props,ThreeDConcept,video,Interior} from './Exploredata.js';

import Gallery from './Gallery.js';
import VideoGallery from './VideoGallery';





import './Threenew.css';

function Explorenew() {
  
  const[show,setShow]=useState(0);

  // const handleenter=(c,d)=>{
  //           document.getElementById(c).style.backgroundColor = "blueviolet";
  //           document.getElementById(c).style.color = "white"; 
  //           document.getElementById(d).style.width="70px";
            
  //             console.log("yes");
  //         }
  //  const handleleave=(c,d)=>{
  //           document.getElementById(c).style.backgroundColor = "white";
  //           document.getElementById(c).style.color = "black"; 
  //           document.getElementById(d).style.width="64px";
          
  //         }      
        
    const handleshow=(x)=>{
      setShow(x);
    }
         
         
   return (
     

 
    <div className=' px-4 sm:px-6 md:px-8 lg:px-10 xl:px-11 pb-6  bg-slate-50 '>
      <span className='Under mb-7'>
          <h1 className='text-center font-semibold text-5xl  pt-4 mb-3'>Our  <span className=' text-violet-700'>3D Work</span></h1>
         <hr className='hr'></hr>
      </span>

      <div className='nav-expore inline-block  mb-10 cursor-pointer' >
        <ul className='flex   inline-block flex-wrap '>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===0 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(0)} >3D Video</li>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===1 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`}  onClick={()=>handleshow(1)}>3D Props</li>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===2 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(2)}>3D Concept Arts</li>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===3 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(3)}>Outfits/Character</li>
          <li  style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===4 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(4)} >Interior Design</li>
          <li style={{boxShadow:"rgba(0, 0, 0, 0.60) 0px 5px 15px 0px"}} className={` ${show===5 && "bg-violet-600 text-white " } rounded-md py-2 px-2 mr-2 border-b-violet-600 border-b-2  text-xl font-semibold mr-3 mb-5`} onClick={()=>handleshow(5)} >3D Enviornment</li>
        </ul>
      </div>
      
    {show!=0?<></>:<><VideoGallery filterArr={video}/>
    {/* <Grid  container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item "  style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video style={{width:"700px", height:"300px"}} controls >
                   <source src={video1} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item "  style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video style={{width:"700px", height:"300px"}} controls >
                   <source src={video2} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item "  style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video style={{width:"700px", height:"300px"}} controls >
                   <source src={video3} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item "  style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video style={{width:"700px", height:"300px"}} controls >
                   <source src={video4} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item "  style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video style={{width:"700px", height:"300px"}} controls >
                   <source src={video5} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item "  style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video style={{width:"700px", height:"300px"}} controls >
                   <source src={video6} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        
        </Grid> */}
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