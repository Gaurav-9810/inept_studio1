import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import photoshop from '../../images/photoshop.png';
import Pixlr from '../../images/Pixlr.jpg';
import picsArt from '../../images/picsArt.jpg';
import Figma from '../../images/figma.png';
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
       
       <p className='text-center mb-9 mt-7 text-lg'>Design creates culture. Culture shapes values. Values determine the future</p>
       </AnimationOnScroll>
       
        <Grid  container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='1'  src={photoshop} className=' w-16 img-icon '></img>
            </div>
            
              <h2 className='text-lg font-bold font-mono text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Adobe XD</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Adobe XD helps UX/UI design and development teams at the same time by giving access to a wide range of prototyping tools. Adobe XD is easy to set up and use, but also provides complex and detail-rich design tools.</p>
              
              <a href='https://www.adobe.com/in/products/xd.html'><span id="a" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("b",'2')} onMouseLeave={()=>handleleave("b",'2')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='2' src={Figma} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Figma</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Figma has the ability to co-edit live with your colleagues. Besides that, the tool has a nice interface that allows the insertion of elements, animations, and code in order to create high-fidelity prototypes.</p>
             
              <a href=' https://www.figma.com/'><span id="b" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("c",'3')} onMouseLeave={()=>handleleave("c",'3')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='3' src={picsArt} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>UXCam App Analytics</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>UXCam is analytics solution for mobile apps that allows you to get a deep understanding of user behavior. UXCam Session Recording capabilities allow to easily see how real users navigate through your app.</p>
              
              <a href='https://uxcam.com/'><span id="c" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 pt-6 pb-11  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("d",'4')} onMouseLeave={(e)=>handleleave("d",'4')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='4' src={ClipStudioPaint} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Framer</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Framer helps your team collaborate and focus on coding and design. Some new users complain about the interface and limitations of the program, but it provides all the flexibility and speed that is needed for designing prototypes.</p>
              
              <a href='https://www.framer.com/'><span id="d" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("e",'5')} onMouseLeave={()=>handleleave("e",'5')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='5' src={Pixlr} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>MockFlow</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>MockFlow offers an offline mode, which makes it accessible even when your team doesn’t have access to the cloud. Its strength is in creating wireframe designs that come with templates to help speed up the creative process.Helps tp collaborate at ease with everyone on the project through DesignSpaces</p>
              
               <a href='https://www.mockflow.com/'><span id="e" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={()=>handleenter("f",'6')} onMouseLeave={()=>handleleave("f",'6')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div  className='flex justify-center'>
              <img id='6'  src={GravityDesigner} className=' w-16'></img>
            </div>
            
              <h2  className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Flinto</h2>
              <p  className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Flinto allows to infuse life into your prototype by helping you add animations.It helps to create more convincing, engaging experiences.The animation process does take time, and there are some limitations when trying to create interactions between components in your prototype.</p>
              
              <a href='https://www.flinto.com/'><span id="f" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        
        </Grid>
        

    </div>
    </div>
    
  )
}

export default Techused