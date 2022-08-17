import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import photoshop from '../../images/seo.png';
import Pixlr from '../../images/semrush.jpg';
import picsArt from '../../images/googleadword.png';
import illustrator from '../../images/googleanalytics.png';
import GravityDesigner from '../../images/ub.jpg';
import ClipStudioPaint from '../../images/fbmanager.png';
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
            
              <h2 className='text-lg font-bold font-mono text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>All in One SEO</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>If WordPress is your content management system (CMS) of choice, you shouldn’t hesitate to install the All in One SEO Pack plugin.

</p>
              
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
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Google Analytics</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>It only takes a couple of minutes to add the Analytics code to your website, giving you the ability to track every action by every visitor and manage the SEO.</p>
              
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
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Google Adwords</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Google Ads is a great way to promote your site, services, or page. With Google Ads, you can promote your brand and company, finding relevant users and increasing conversion rate.</p>
              
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
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Facebook Business Manager </h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Facebook business manager is the perfect way to maximize the use of your Facebook business profile. Facebook Pages are the gateway for businesses.</p>
              
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
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>SEMrush</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>SEMrush is a toolkit that grow the online visibility of the business with SEO, content marketing, market research, advertising, social media management and search engine reputation management.</p>
              
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
            
              <h2  className='text-lg font-bold font-serif text-black mt-6 mb-1 ' style={{fontFamily:'Raleway, sans-serif'}}>Ubersuggest</h2>
              <p  className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Ubersuggest provides useful keyword information such as total search volume, difficulty, and paid difficulty. Running an ad campaign around that keyword helps in sales growth.

</p>
              
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