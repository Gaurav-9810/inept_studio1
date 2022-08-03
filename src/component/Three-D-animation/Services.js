import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import photoshop from '../images/photoshop.png';
import Pixlr from '../images/Pixlr.jpg';
import picsArt from '../images/picsArt.jpg';
import illustrator from '../images/illustrator.png';
import GravityDesigner from '../images/GravitDesigner.png';
import ClipStudioPaint from '../images/ClipStudioPaint.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import cardimg from '../images/cardimg.webp';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import logo_service from '../images/logo-service.png';
import cartoon from '../images/cartoon.webp';



// import {Button} from "@material-ui/core";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import '../';

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
          <h1 className='text-center text-white font-semibold text-5xl  pt-8 mb-5'>What We Do In <span className='font-pop italic  font-light text-violet-500'>2D</span></h1>
         <hr className='hr'></hr>
        </span>
       
       <p className='text-center text-white mb-9 mt-7 font-mono text-lg'>Below are the 2d services which we provides.</p>
       </AnimationOnScroll>
       
        <Grid  container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp"> */}
         
              
    <div className='box blury-card'>       
            <img  className='  text-center mx-auto cursor-pointer' onClick={()=>handleOpen(1)} src={cardimg}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white text-lg font-semibold xl:font-bold xl:text-xl '>Bussiness card</h2>
            </div>
    </div>

            {/*  */}
                  
                    {/* <div class="box blury-card">
                      <img src="https://source.unsplash.com/900x900/?street,travel
              " alt="Blue Ridge Mountains"/>
                      <div class="frame ">
                        <h2 className='text-sm '>Blue Ridge</h2>
                        
                      </div>
                    </div> */}
                 
            
             {/* </div>   */}
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
                                                          
                                                          <img src={cardimg} className="w-1/3 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal>  

                      
          
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">     */}
          
        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(1)} src={logo_service}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white  text-lg font-semibold xl:font-bold xl:text-xl'>Logo</h2>
            </div>
    </div>

                  {/* <div class="">
                        
                        <div class="wrapper">
                          <div class="box blury-card">
                            <img src="https://source.unsplash.com/900x900/?street,travel
                    " alt="Blue Ridge Mountains"/>
                            <div class="frame">
                              <h2>Blue Ridge</h2>
                              <p>MOUNTAINS</p>
                            </div>
                          </div>
                        </div>
                        
                      </div> */}
              
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
                                                          
                                                          <img src={logo_service} className="w-1/3 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal> 
                      
              
      
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">    */}
          

        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(1)} src={cartoon}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white text-lg font-semibold xl:font-bold xl:text-xl'>Bussiness card</h2>
            </div>
    </div>

    {/* <div class="">
          
          <div class="wrapper">
            <div class="box blury-card">
              <img src="https://source.unsplash.com/900x900/?street,travel
      " alt="Blue Ridge Mountains"/>
              <div class="frame">
                <h2>Blue Ridge</h2>
                <p>MOUNTAINS</p>
              </div>
            </div>
          </div>
          
        </div> */}
              
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
                                                          
                                                          <img src={cartoon} className="w-96 h-96 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal>  
                      
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp"> */}
        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(1)} src={cardimg}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white  text-lg font-semibold xl:font-bold xl:text-xl'>Bussiness card</h2>
            </div>
    </div>

            {/* <div class="">
                  
                  <div class="wrapper">
                    <div class="box blury-card">
                      <img src="https://source.unsplash.com/900x900/?street,travel
              " alt="Blue Ridge Mountains"/>
                      <div class="frame">
                        <h2>Blue Ridge</h2>
                        <p>MOUNTAINS</p>
                      </div>
                    </div>
                  </div>
                  
                </div> */}
              
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
                                                          
                                                          <img src={cardimg} className="w-1/3 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal>
                      
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp"> */}
              
          
        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(1)} src={cardimg}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white text-lg font-semibold xl:font-bold xl:text-xl'>Bussiness card</h2>
            </div>
    </div>

                  {/* <div class="">
                        
                        <div class="wrapper">
                          <div class="box blury-card">
                            <img src="https://source.unsplash.com/900x900/?street,travel
                    " alt="Blue Ridge Mountains"/>
                            <div class="frame">
                              <h2>Blue Ridge</h2>
                              <p>MOUNTAINS</p>
                            </div>
                          </div>
                        </div>
                        
                      </div> */}
              
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
                                                          
                                                          <img src={cardimg} className="w-1/3 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal> 
          
          {/* </AnimationOnScroll> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
        {/* <AnimationOnScroll  animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp"> */}
         
              
          

        <div className='box blury-card'>       
            <img  className='h-36 w-60   text-center mx-auto cursor-pointer' onClick={()=>handleOpen(1)} src={cardimg}>

              
            </img>
            <div className='frame '>
               <h2 className='text-white text-lg font-semibold xl:font-bold xl:text-xl'>Bussiness card</h2>
            </div>
    </div>

                {/* <div class="">
                      
                      <div class="wrapper">
                        <div class="box blury-card">
                          <img src="https://source.unsplash.com/900x900/?street,travel
                  " alt="Blue Ridge Mountains"/>
                          <div class="frame">
                            <h2>Blue Ridge</h2>
                            <p>MOUNTAINS</p>
                          </div>
                        </div>
                      </div>
                      
                    </div> */}
              
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
                                                          
                                                          <img src={cardimg} className="w-1/3 mx-auto opacity-100 "></img>
                                                        </div>
                                                       
                                                       </Box>
                      </Modal> 
                     
          {/* </AnimationOnScroll> */}
        </Grid>
        
        </Grid>
        

    </div>
    </div>
    
  )
}

export default Services