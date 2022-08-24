import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import environment from '../../images/3d_Work/3d_Enviornment/HOUSE.png';
import art from '../../images/3d_Work/3dConcepts/3darts_concept.jpg';
import interior from '../../images/3d_Work/3dInterior/interiorDeign.jpg';


import props from '../../images/3d_Work/3dprops/3d_props.webp';

import outfits from '../../images/3d_Work/3doutfits/outfits.webp';
import Charcter from '../../images/3d_Work/3doutfits/3d_Character.webp';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';




// import {Button} from "@material-ui/core";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import '../Two_D_animation/Services.css';

const style = {
  position: 'absolute',
  // top: '40%',
  // left: '30%',
  // transform: 'translate(-50%, -50%)',
  opacity:"0.87",
  width: '100%',
  height:'100%',
  bgcolor: 'black',
  borderRadius: '4px',
  // boxShadow: 24,
  p: 4,
};





function Services() {
  const [open, setOpen] = useState(0);


  const handleenter=(c,d)=>{
    document.getElementById(c).style.backgroundColor = "blueviolet";
    document.getElementById(c).style.color = "white"; 
    document.getElementById(d).style.width="78px";
    
      console.log("yes");
  }
  const handleleave=(c,d)=>{
    document.getElementById(c).style.backgroundColor = "white";
    document.getElementById(c).style.color = "black"; 
    document.getElementById(d).style.width="64px";
  
  }
  
  const handleOpen = (id) =>{
    console.log(`running open${id}`);
    
    setOpen(id);
  } 
  const handleClose = () => setOpen(0);

  return (
    
    <div className='twod_services_container  pb-5 lg:px-14 '>
    
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-11    mb-8">
       <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
        <span className='Under'>
          <h1 className='text-center text-white font-semibold text-5xl  pt-8 mb-5'>What We Do In <span className='font-pop italic  font-light text-violet-500'>3D</span></h1>
         <hr className='hr'></hr>
        </span>
       
       <p className='text-center text-white mb-9 mt-7 font-mono text-lg'>Below are the 3d services which we provides.</p>
       </AnimationOnScroll>
       
        <Grid  container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp"> */}
         
              
    <div className='box blury-card'>       
            <img  className='  text-center mx-auto cursor-pointer' onClick={()=>handleOpen(1)} src={outfits}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white text-lg font-semibold xl:font-bold xl:text-xl '>Outfits</h2>
            </div>
    </div>

           
                    <Modal
                                                       open={open==1}
                                                       onClose={handleClose}
                                                       aria-labelledby="modal-modal-title"
                                                       aria-describedby="modal-modal-description"
                                                       
                                                   >
                                                       <Box sx={style} className="flex justify-center items-center">
                                                      
                                                        <div className='opacity-100' onClick={()=>handleClose()}>
                                                          <div className='flex justify-end mr-6'>
                                                            <CloseIcon className='text-white cursor-pointer'/>
                                                          </div>
                                                          
                                                          <img src={outfits} className="w-11/12 h-64 sm:h-80 lg:h-96 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal>  

                      
          
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">     */}
          
        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(2)} src={Charcter}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white  text-lg font-semibold xl:font-bold xl:text-xl'>Character</h2>
            </div>
    </div>

                  
              
                    <Modal
                                                       open={open==2}
                                                       onClose={handleClose}
                                                       aria-labelledby="modal-modal-title"
                                                       aria-describedby="modal-modal-description"
                                                       
                                                   >
                                                       <Box sx={style} className="flex justify-center items-center">
                                                      
                                                        <div className='opacity-100' onClick={()=>handleClose()}>
                                                          <div className='flex justify-end mr-6'>
                                                            <CloseIcon className='text-white cursor-pointer'/>
                                                          </div>
                                                          
                                                          <img src={Charcter} className="w-11/12 h-64 sm:h-80 lg:h-96 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal> 
                      
              
      
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">    */}
          

        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(3)} src={environment}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white text-lg font-semibold xl:font-bold xl:text-xl'>3d Enviornment</h2>
            </div>
    </div>

    
              
                     <Modal
                                                       open={open==3}
                                                       onClose={handleClose}
                                                       aria-labelledby="modal-modal-title"
                                                       aria-describedby="modal-modal-description"
                                                       
                                                   >
                                                       <Box sx={style} className="flex justify-center items-center">
                                                      
                                                        <div className='opacity-100' onClick={()=>handleClose()}>
                                                          <div className='flex justify-end mr-6'>
                                                            <CloseIcon className='text-white cursor-pointer'/>
                                                          </div>
                                                          
                                                          <img src={environment} className="w-11/12 h-64 sm:h-80 lg:h-96 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal>  
                      
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp"> */}
        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(4)} src={interior}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white  text-lg font-semibold xl:font-bold xl:text-xl'>Interior Design</h2>
            </div>
    </div>

           
              
                    <Modal
                                                       open={open==4}
                                                       onClose={handleClose}
                                                       aria-labelledby="modal-modal-title"
                                                       aria-describedby="modal-modal-description"
                                                       
                                                   >
                                                       <Box sx={style} className="flex justify-center items-center">
                                                      
                                                        <div className='opacity-100' onClick={()=>handleClose()}>
                                                          <div className='flex justify-end mr-6'>
                                                            <CloseIcon className='text-white cursor-pointer'/>
                                                          </div>
                                                          
                                                          <img src={interior} className="w-11/12 h-64 sm:h-80 lg:h-96 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal>
                      
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp"> */}
              
          
        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(5)} src={props}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white text-lg font-semibold xl:font-bold xl:text-xl'>3d Props</h2>
            </div>
    </div>

                  
              
                    <Modal
                                                       open={open==5}
                                                       onClose={handleClose}
                                                       aria-labelledby="modal-modal-title"
                                                       aria-describedby="modal-modal-description"
                                                       
                                                   >
                                                       <Box sx={style} className="flex justify-center items-center">
                                                      
                                                        <div className='opacity-100' onClick={()=>handleClose()}>
                                                          <div className='flex justify-end mr-6'>
                                                            <CloseIcon className='text-white cursor-pointer'/>
                                                          </div>
                                                          
                                                          <img src={props} className="w-11/12 h-64 sm:h-80 lg:h-96 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal> 
          
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp"> */}
         
              
          

        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(6)} src={art}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white text-lg font-semibold xl:font-bold xl:text-xl'>3D Art</h2>
            </div>
    </div>

                
              
                    <Modal
                                                       open={open==6}
                                                       onClose={handleClose}
                                                       aria-labelledby="modal-modal-title"
                                                       aria-describedby="modal-modal-description"
                                                       
                                                   >
                                                       <Box sx={style} className="flex justify-center items-center">
                                                      
                                                        <div className='opacity-100' onClick={()=>handleClose()}>
                                                          <div className='flex justify-end mr-6'>
                                                            <CloseIcon className='text-white cursor-pointer'/>
                                                          </div>
                                                          
                                                          <img src={art} className="w-11/12 h-64 sm:h-80 lg:h-96 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal> 
                     
          {/* </AnimationOnScroll> */}
        </Grid>
        
        </Grid>
        
       
        

    </div>
    <div className='flex justify-center '>
          <a href="/ThreeD/Explore3d" className='cursor-pointer text-white inline-block hover:bg-violet-600   bg-violet-700 px-3 py-3 rounded-lg font-semibold '>Explore Our 3d works</a>
    </div>
    </div>
      
    
  )
}

export default Services