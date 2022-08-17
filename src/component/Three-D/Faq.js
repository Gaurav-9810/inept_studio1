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
                
                              
                            <h2  className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between  ' >what is 3D Design? {show=='1'?<span className=' mr-4  ' ><ExpandLessOutlinedIcon/></span>:<span  className='mr-4 z-30'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                       
                        { show=='1' &&  <p  className=' mb-2  faq-question rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'>3D design is the process of using computer-modeling software to create an object within a three-dimensional space.</p>
                        }
                        
                       
                      
                        </div>
                  </div>
                  </AnimationOnScroll>
                  <div className='lg:mr-4 lg:ml-4 mb-4 cursor-pointer rounded-md bg-violet-700' onClick={()=>handleClick('2')} >
                        <div className=' rounded-md shadow-md '>
                            <h2 className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between'>What does 3D environment mean ? {show=='2'?<span className=' mr-4'><ExpandLessOutlinedIcon/></span>:<span className='mr-4'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                      { show=='2' &&   <p  className='mb-2 rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'> A 3D environment can be taken as a computer-controlled digital setting, which appears as a background in the videogames and animated movies. It is created with the illusion of depth.</p>
                        }
                        </div>
                  </div>
                  <div className='lg:mr-4 lg:ml-4 mb-3 cursor-pointer rounded-md bg-violet-700' onClick={()=>handleClick('3')} >
                        <div className=' rounded-md shadow-md '>
                            <h2 className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between'>What interior design means ? {show=='3'?<span className=' mr-4'><ExpandLessOutlinedIcon/></span>:<span className='mr-4'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                      { show=='3' &&   <p  className='mb-2 rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.</p>
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