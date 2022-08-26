import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import photoshop from '../../images/adobe-animate.webp';
import Pixlr from '../../images/blender.png';
import picsArt from '../../images/picsArt.jpg';
import illustrator from '../../images/Maya.png';
import GravityDesigner from '../../images/GravitDesigner.png';
import ClipStudioPaint from '../../images/ClipStudioPaint.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// import {Button} from "@material-ui/core";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import '../Two_D_animation/Techused.css';


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


function Techused() {
  return (
    
    <div className='  '>
    
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-11   bg-slate-50 ">
       <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <span className='Under'>
          <h1 className='text-center font-semibold text-5xl  pt-4 mb-5'>Technology <span className=' text-violet-700'>Used</span></h1>
         <hr className='hr'></hr>
        </span>
       
       <p className='text-center mb-9 mt-7 text-lg'>Designers are meant to be loved, not to be understood. Design adds value faster than it adds costs.</p>
       </AnimationOnScroll>
       
        <Grid  container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='1'  src={photoshop} className=' w-16 img-icon '></img>
            </div>
            
              <h2 className='text-lg font-bold font-mono text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Adobe Animate</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>It is used to design vector graphics and animation for television series, online animation, commercials, and other interactive projects.</p>
              
              <a href="https://helpx.adobe.com/in/animate/user-guide.html" target="_blank"> <span id="a" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("b",'2')} onMouseLeave={()=>handleleave("b",'2')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='2' src={illustrator} className=' w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Autodesk Maya</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Maya is a professional 3D animation, modeling, simulation, and rendering toolset, designed for creating realistic characters and blockbuster-worthy effects.</p>
              
               <a href="https://forge.autodesk.com/developer/documentation" target="_blank"><span id="b" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("c",'3')} onMouseLeave={()=>handleleave("c",'3')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='3' src={picsArt} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Cartoon Animator 4</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Cartoon Animator 4 - Animation Features. Puppet your 2D characters with Cartoon Animator's motion capture solution for both facial and body animation.</p>
              
              <a href='https://manual.reallusion.com/Cartoon_Animator_4/ENU/Pipeline/Content/Resources/4.0/01_Welcome/Welcome.htm'> <span id="c" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 pt-6 pb-11  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("d",'4')} onMouseLeave={(e)=>handleleave("d",'4')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='4' src={ClipStudioPaint} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Clip Studio Paint</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Digital artists dig Clip Studio Paint’s simple collection of illustration apps because of its simplicity, mirror feature and affordability.</p>
              
              <a href="https://www.clipstudio.net/en/manuals/" target="_blank"> <span id="d" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("e",'5')} onMouseLeave={()=>handleleave("e",'5')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='5' src={Pixlr} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Blender</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, compositing and motion tracking, even video editing.</p>
              
              <a href="https://docs.blender.org/" target="_blank" > <span id="e" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={()=>handleenter("f",'6')} onMouseLeave={()=>handleleave("f",'6')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div  className='flex justify-center'>
              <img id='6'  src={GravityDesigner} className=' w-16'></img>
            </div>
            
              <h2  className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Gravit Designer</h2>
              <p  className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>It is HTML-based graphic design software that can be used on any platform. It has a powerful image and vector graphic creation and manipulation capabilities.</p>
              
              <a href="https://documentation.corelvector.com/introduction/" target="_blank"> <span id="f" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        
        </Grid>
        

    </div>
    </div>
    
  )
}

export default Techused