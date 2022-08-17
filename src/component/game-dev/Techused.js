import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import photoshop from '../../images/unity.webp';
import Pixlr from '../../images/Blender.png';
import picsArt from '../../images/stencly.png';
import illustrator from '../../images/gamemaker.png';
import GravityDesigner from '../../images/gamesalad.jpg';
import ClipStudioPaint from '../../images/agk.png';
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
       
       <p className='text-center mb-9 mt-7 text-lg'>Websites promote you 24/7: No employee will do that.</p>
       </AnimationOnScroll>
       
        <Grid  container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='1'  src={photoshop} className='rounded-full w-16 img-icon '></img>
            </div>
            
              <h2 className='text-lg font-bold font-mono text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>UNITY</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Unity is what you need to develop amazing 3D games. The top game creation software has an easy user-interface and can be used by beginners. This game development software can add amazing cinematic effects as well to make the game interesting.</p>
              
               <span id="a" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("b",'2')} onMouseLeave={()=>handleleave("b",'2')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='2' src={illustrator} className='rounded-full img-icon w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>GAME_MAKER</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>GameMaker: Studio is the best game app development software that helps you develop fun-filled games. This best game development software offers advanced gaming tutorials for beginners to work as professionals.You can create customized gaming .</p>
              
               <span id="b" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("c",'3')} onMouseLeave={()=>handleleave("c",'3')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='3' src={picsArt} className=' w-16 rounded-full scale-y-125 scale-x-125 '></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>STENCLY</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Stencyl makes game development easy with its code-free operations. The game development software has the drag-and-drop interface. You can embed ads, create online payment gateways in your game, and make extra money by using this game app development software.</p>
              
               <span id="c" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 pt-6 pb-11  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("d",'4')} onMouseLeave={(e)=>handleleave("d",'4')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='4' src={ClipStudioPaint} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>ACREATE</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>ACreate games that are loved by all by using AI-driven top game creation software, Autodesk. With its easy drag-and-drop interface, high customization ability, and hassle-free operations, calling it as best game development software won’t be wrong.</p>
              
               <span id="d" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("e",'5')} onMouseLeave={()=>handleleave("e",'5')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='5' src={Pixlr} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>BLENDER</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Blender is an open-source best game app development software that can create engaging and adventurous games over a single click. This top game development software can do motion tracking, video editing, modeling, and any other type of 3D designing easily. </p>
              
               <span id="e" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={()=>handleenter("f",'6')} onMouseLeave={()=>handleleave("f",'6')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div  className='flex justify-center mt-4 '>
              <img id='6'  src={GravityDesigner} className='  w-16 scale-y-150 scale-x-150  '></img>
            </div>
            
              <h2  className='text-lg font-bold font-serif text-black mt-6 mb-1 ' style={{fontFamily:'Raleway, sans-serif'}}>GAMESALAD</h2>
              <p  className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>GameSalad is an innovative game development software that makes learning fun by creating useful gaming learning content. The game app development software can easily include the K12 curriculum in a gaming environment and enhance learning.</p>
              
               <span id="f" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span>
          </div>
          </AnimationOnScroll>
        </Grid>
        
        </Grid>
        

    </div>
    </div>
    
  )
}

export default Techused