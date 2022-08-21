import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import photoshop from '../../images/photoshop.png';
import Pixlr from '../../images/Pixlr.jpg';
import picsArt from '../../images/picsArt.jpg';
import illustrator from '../../images/illustrator.png';
import GravityDesigner from '../../images/GravitDesigner.png';
import ClipStudioPaint from '../../images/ClipStudioPaint.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import video1 from '../../Videos/final0001-0838.mkv';

function ThreeDWork() {

      const handleenter=(c,d)=>{
            document.getElementById(c).style.backgroundColor = "blueviolet";
            document.getElementById(c).style.color = "white"; 
            document.getElementById(d).style.width="70px";
            
              console.log("yes");
          }
          const handleleave=(c,d)=>{
            document.getElementById(c).style.backgroundColor = "white";
            document.getElementById(c).style.color = "black"; 
            document.getElementById(d).style.width="64px";
          
          }

  return (
    <div className=' px-4 sm:px-6 md:px-8 lg:px-10 xl:px-11 pb-6  bg-slate-50 '>
      <span className='Under mb-7'>
          <h1 className='text-center font-semibold text-5xl  pt-4 mb-3'>Our  <span className=' text-violet-700'>3D Work</span></h1>
         <hr className='hr'></hr>
      </span>
      
      <Grid  container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video width="750" height="700" controls >
                   <source src={video1} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video width="750" height="700" controls >
                   <source src={video1} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video width="750" height="700" controls >
                   <source src={video1} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video width="750" height="700" controls >
                   <source src={video1} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video width="750" height="700" controls >
                   <source src={video1} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            
          
          <video width="750" height="700" controls >
                   <source src={video1} type="video/mp4"/>
          </video>
             
          </div>
          </AnimationOnScroll>
        </Grid>
        
        </Grid>
    </div>
  )
}

export default ThreeDWork