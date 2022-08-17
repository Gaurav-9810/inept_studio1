import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import flutter from '../../images/flutter.png';
import swift from '../../images/swift1.jpg';
import kotlin from '../../images/kotlin.jpg';
import react_native from '../../images/react.png';
import python from '../../images/python1.jpg';
import java from '../../images/java_pic.png';
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
       
       <p className='text-center mb-9 mt-7 text-lg'>The sole reason we are in business is to make life less difficult for our clients.</p>
       </AnimationOnScroll>
       
        <Grid  container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
          <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("a",'1')} onMouseLeave={(e)=>handleleave("a",'1')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='1'  src={flutter} className=' w-16 img-icon '></img>
            </div>
            
              <h2 className='text-lg font-bold font-mono text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Flutter</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Flutter is Google’s free and open-source UI framework for creating native mobile applications. Released in 2017, Flutter allows developers to build mobile applications with a single codebase and programming language. This capability makes building both iOS and Android apps simpler and faster. </p>
              
              <a href = 'https://docs.flutter.dev/resources/faq'> <span id="a" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("b",'2')} onMouseLeave={()=>handleleave("b",'2')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='2' src={react_native} className=' w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>React Native</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.

</p>
              
               <a href = 'https://reactnative.dev/'><span id="b" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("c",'3')} onMouseLeave={()=>handleleave("c",'3')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='3' src={kotlin} className='rounded-full w-16'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Kotlin</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.</p>
              
              <a href = 'https://kotlinlang.org/'><span id="c" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 pt-6 pb-11  rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={(e)=>handleenter("d",'4')} onMouseLeave={(e)=>handleleave("d",'4')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='4' src={java} className='rounded-full w-16 scale-110'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Java</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Program core features and classes from the Java programming language are used in Android, which is the dominant platform for developing and deploying mobile device apps.</p>
              
              <a href = 'https://www.java.com/en/'><span id="d" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item" onMouseEnter={()=>handleenter("e",'5')} onMouseLeave={()=>handleleave("e",'5')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div className='flex justify-center'>
              <img id='5' src={swift} className='rounded-full w-16 scale-110'></img>
            </div>
            
              <h2 className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Swift</h2>
              <p className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love</p>
              
               <a href = 'https://www.swift.org/about/'><span id="e" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  >
        <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <div  className="flex-col items-center text-center px-6 py-6 rounded-lg hover:bg-blue-100 tech-item " onMouseEnter={()=>handleenter("f",'6')} onMouseLeave={()=>handleleave("f",'6')} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
            <div  className='flex justify-center'>
              <img id='6'  src={python} className='rounded-full w-20 scale-110 '></img>
            </div>
            
              <h2  className='text-lg font-bold font-serif text-black mt-4 mb-2' style={{fontFamily:'Raleway, sans-serif'}}>Python</h2>
        <p  className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>Python can be used for Android App Development even though Android doesn't support native Python development. This can be done using various tools that convert the Python apps into Android Packages.
Python has some frameworks like Kivy and Beeware.</p>
              
            <a href = 'https://www.python.org/about/apps/'><span id="f" className='tech-btn  px-2  pb-2 pt-1 py-1 rounded-lg '>Read More</span></a>
          </div>
          </AnimationOnScroll>
        </Grid>
        
        </Grid>
        

    </div>
    </div>
    
  )
}

export default Techused