import React,{useState} from 'react';
import Faqimg from '../../images/Faq.jpg';
import "../Two_D_animation/Faq.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'; 

function Faq() {
      const[show,setshow]=useState('1');

      const handleClick=(c)=>{
            
                   if(show==c){    
                  setshow('null');
            }
            else{
                  setshow(c);
            }
            
           
      }

  return (
    <div className='text-center mt-12 '>
      <AnimationOnScroll animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
      <div className=' '>
       <span className='Under'>
            <h1 className='text-5xl font-semibold   pt-4 mb-5' >Frequently Asked <span className=' text-violet-700'>Questions</span></h1>
            <hr></hr>
      </span>     
      <p className='text-center  mt-7 text-lg ' >The sole reason we are in business is to make life less difficult for our clients.</p>
      <div className='mx-4  sm:mx-14  lg:flex lg:justify-center lg:mx-6' >
      {/* <AnimationOnScroll  > */}
            <div className=' lg:w-2/5 lg:mr-12  '>
                  <AnimationOnScroll animateOnce={true}  animateIn="animated animatedFadeInUp sideanimation">
                  <img src={Faqimg}></img>
                  </AnimationOnScroll>
            </div>
      {/* </AnimationOnScroll> */}
            <div className=' lg:w-2/5 flex flex-col justify-center lg:ml-6 '>
      <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp sideanimation2">
                 
                  <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer shadow-md bg-violet-700  ' onClick={()=>handleClick('1')}  >
                        <div className='bg-violet-700  rounded-md pb-px' >
                
                              
                            <h2  className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between  ' >How important are games?{show=='1'?<span className=' mr-4  ' ><ExpandLessOutlinedIcon/></span>:<span  className='mr-4 z-30'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                       
                        { show=='1' &&  <p  className=' mb-2  faq-question rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'>The popularity of smart gadgets like smartphones, tablets etc has opened up a new avenue of entertainment in the software industry and that is the domain of Mobile gaming sector.And now games market is a big part of mobile ecosystem and is estimated to reach $14.4 billion by 2017.</p>
                        }
                        
                       
                      
                        </div>
                  </div>
                  </AnimationOnScroll>
                  <div className='lg:mr-4 lg:ml-4 mb-4 cursor-pointer rounded-md bg-violet-700' onClick={()=>handleClick('2')} >
                        <div className=' rounded-md shadow-md '>
                            <h2 className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between'>Which are the gaming platforms available? {show=='2'?<span className=' mr-4'><ExpandLessOutlinedIcon/></span>:<span className='mr-4'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                      { show=='2' &&   <p  className='mb-2 rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'> Different smart gadgets are running on different operating systems or platforms and the popular ones are Smartphone: Apple iOS, Android, Windows
Desktop: PC (Windows), Mac & Linux
Online: Browser and Facebook games.</p>
                        }
                        </div>
                  </div>
                  <div className='lg:mr-4 lg:ml-4 mb-3 cursor-pointer rounded-md bg-violet-700' onClick={()=>handleClick('3')} >
                        <div className=' rounded-md shadow-md '>
                            <h2 className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between'>How to start my game development project?{show=='3'?<span className=' mr-4'><ExpandLessOutlinedIcon/></span>:<span className='mr-4'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                      { show=='3' &&   <p  className='mb-2 rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'>For staring your own game development project, you just need an initial spark or a core idea that will be worked upon by our team to transform it in to an addictive gaming experience.</p>
                        }
                        </div>
                  </div>
            </div>
      </div>
      </div>
      </AnimationOnScroll>
      
    </div>
  )
}

export default Faq