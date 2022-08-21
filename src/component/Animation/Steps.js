import React,{useState} from 'react';
import Faqimg from '../../images/steps.png';

import "../Two_D_animation/Faq.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'; 

function Steps() {
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
      <div className=''>
       <span className='Under'>
            <h1 className='text-5xl font-semibold   pt-4 mb-5' >Steps of <span className=' text-violet-700'>Making</span></h1>
            <hr></hr>
      </span>     
      <p className='text-center  mt-7 text-lg mb-4' >The sole reason we are in business is to make life less difficult for our clients.</p>
      <div className='mx-4  sm:mx-14   lg:justify-center lg:mx-6 flex flex-col-reverse md:flex-row ' >
      {/* <AnimationOnScroll  > */}
            
      {/* </AnimationOnScroll> */}
            <div className=' lg:w-2/5 flex flex-col justify-center  lg:mr-6 '>
      <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp sideanimation2">
                 
                  <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer shadow-md bg-violet-700  ' onClick={()=>handleClick('1')}  >
                        <div className='bg-violet-700  rounded-md pb-px' >
                
                              
                            <h2  className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between  ' >1. Idea Generation (Ideation)
 {show=='1'?<span className=' mr-4  ' ><ExpandLessOutlinedIcon/></span>:<span  className='mr-4 z-30'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                       
                        { show=='1' &&  <p  className=' mb-2  faq-question rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'>This first step or stage of the Product Development process, often called “Ideation,” is where new product concepts originate. </p>
                        }
                        
                       
                      
                        </div>
                  </div>
                  </AnimationOnScroll>
                  <div className='lg:mr-4 lg:ml-4 mb-4 cursor-pointer rounded-md bg-violet-700' onClick={()=>handleClick('2')} >
                        <div className=' rounded-md shadow-md '>
                            <h2 className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between'>2. Prototyping{show=='2'?<span className=' mr-4'><ExpandLessOutlinedIcon/></span>:<span className='mr-4'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                      { show=='2' &&   <p  className='mb-2 rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'> In this prototyping phase (or step) in the product development process the team justifies the company’s investment in the development of a product by requiring the team to create a detailed business plan. </p>
                        }
                        </div>
                  </div>
                  <div className='lg:mr-4 lg:ml-4 mb-3 cursor-pointer rounded-md bg-violet-700' onClick={()=>handleClick('3')} >
                        <div className=' rounded-md shadow-md '>
                            <h2 className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between'>3.Validation and Testing{show=='3'?<span className=' mr-4'><ExpandLessOutlinedIcon/></span>:<span className='mr-4'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                      { show=='3' &&   <p  className='mb-2 rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'>Validation and testing means ensuring the prototype works as planned. It also means validating the product in the eyes of the customers and markets, while testing the viability of the financial model for the product. </p>
                        }
                        </div>
                  </div>
                  <div className='lg:mr-4 lg:ml-4 mb-3 cursor-pointer rounded-md bg-violet-700' onClick={()=>handleClick('4')} >
                        <div className=' rounded-md shadow-md '>
                            <h2 className='pl-2 font-semibold  text-left md:pl-4 text-white py-2 flex justify-between'>6. Commercialization
{show=='3'?<span className=' mr-4'><ExpandLessOutlinedIcon/></span>:<span className='mr-4'><ExpandMoreOutlinedIcon/></span>}</h2>  
                       
                      { show=='4' &&   <p  className='mb-2 rounded-b-md  py-2 px-3 bg-white text-left md:px-8 md:py-4'>During this step of the product development process (including the manufacturing process), the team realizes everything required to bring the final product to market, including marketing and sales plans (or sales training if necessary) for the market introduction. </p>
                        }
                        </div>
                  </div>
            </div>

            <div className=' lg:w-4/12 lg:pb-14 lg:ml-12  '>
                  <AnimationOnScroll animateOnce={true}  animateIn="animated animatedFadeInUp sideanimation">
                  <img className='   ' src={Faqimg}></img>
                  </AnimationOnScroll>
            </div>
      </div>
      </div>
      </AnimationOnScroll>
      
    </div>
  )
}

export default Steps