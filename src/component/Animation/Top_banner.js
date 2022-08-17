import  React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Rightimg from '../../images/right-bottom.png';
import RightwhiteCurve from '../../images/right-white-curve.png';
import toplogo from '../../images/logo.png';
import fb from '../../images/facebook-icon.png';
import insta from '../../images/instagram-icon.png';
import linkdin from '../../images/linkedin-icon.png';
import whatsaap from '../../images/whatsapp-icon.png'
import twitter from '../../images/twitter-icon.png';
import sitelogo from '../../images/sitelogo.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

import '../Two_D_animation/Top_Banner.css';


import Modal from '@mui/material/Modal';
// import Modal from "react-animated-modal";



// import { Box } from '@mui/material';



const pages = ['HOME','BLOG','SERVICES','ABOUT US' ,'CONTACT US' ];

 const style = {
    position: 'absolute',
    // top: '40%',
    // left: '30%',
    // transform: 'translate(-50%, -50%)',
    opacity:"0.5",
    width: '100%',
    height:'100%',
    bgcolor: 'black',
    borderRadius: '4px',
    // boxShadow: 24,
    p: 4,
  };


function Top_banner() {
  const [open, setOpen] = useState(0);

  const handleOpen = (id) =>{
    console.log(`running open${id}`);
    
    setOpen(id);
  } 
  const handleClose = () => setOpen(0);

     
    
      

  return (
    <>
      <section class="header pt-4  mb-10 overflow-hidden">
		<nav className='hidden md:flex px-3'>
			<a className='w-1/5 pl-4' href="/"><img className='w-3/4 ' src={toplogo}/></a>
			<div className="w-4/5 flex sm:justify-center  " id="navLinks">
				 
                <ul className='flex justify-evenly sm:w-4/5 lg:w-3/5 '>
			<li className=' hover:text-slate-300 text-white font-semibold sm:text-sm md:text-sm xl:text-lg'><a href="/">HOME</a></li>
                    <li className='hover:text-slate-300 text-white font-semibold sm:text-sm md:text-sm xl:text-lg'><a href="#">BLOG</a></li>
                    <li className='hover:text-slate-300 text-white font-semibold sm:text-sm md:text-sm xl:text-lg'>
						<div class="dropdown">
							<span className='hover:text-slate-300 text-white font-semibold sm:text-sm md:text-sm xl:text-lg'>SERVICES</span>
							<div class="dropdown-content ">
								<ul class="dropdown-data ">
									<li className='hover:text-slate-300'><a href="/WebD">WEB DEVELOPMENT</a></li>
                  
									<li className='hover:text-slate-300'><a href="App">APP DEVELOPMENT</a></li>
									<li className='hover:text-slate-300'><a href="/UI">UI/UX DESIGNING</a></li>
									<li className='hover:text-slate-300'><a href="/TwoD">2D DESIGNING</a></li>
									<li className='hover:text-slate-300'><a href="/ThreeD">3D DESIGNING</a></li>
									<li className='hover:text-slate-300'><a href="/Animation">ANIMATION</a></li>
									<li className='hover:text-slate-300'><a href="#">GAME DEVELOPMENT</a></li>
									<li className='hover:text-slate-300'><a href="#">DIGITAL MARKETING</a></li>
                  
                  

							    </ul>
							</div>
							
						</div>
					</li>

					<li className='hover:text-slate-300 text-white font-semibold sm:text-sm md:text-sm xl:text-lg'><a href="">ABOUT US</a></li>
					<li className='hover:text-slate-300 text-white font-semibold sm:text-sm md:text-sm xl:text-lg'><a href="">CONTACT US</a></li>
				</ul>
			</div>		
		</nav>

{/* phone resoponsive */}
       <nav className='md:hidden flex'>
			<a className='w-32 pl-4' href="index.html"><img className=' mt-3' src={toplogo}/></a>
			<div className="w-4/5 flex  justify-end  " >
     
      <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={()=>handleOpen(1)}
              color="inherit"
              
            >
              <MenuIcon className='text-white z-10' />
        </IconButton>
      
      <Modal
                                                       open={open==1}
                                                       onClose={handleClose}
                                                       aria-labelledby="modal-modal-title"
                                                       aria-describedby="modal-modal-description"
                                                       
                                                      >
                                                       <Box className="p-0 m-0 relative opacity-100  max-h-96 ">
                                                      
                                                        <div className=' absolute left-0 top-0 flex flex-row-reverse ' >
                                                        <IconButton
                                                              size="large"
                                                              aria-label="account of current user"
                                                              aria-controls="menu-appbar"
                                                              aria-haspopup="true"
                                                              onClick={()=>handleClose()}
                                                              color="inherit"
                                                              
                                                            >
                                                              <CloseIcon className='text-yellow-500 absolute top-5 right-10 z-50' />
                                                        </IconButton>
  
                                                            <div  style={{color:"#9CA3A9"}}  className=' top_banner_phn w-80  z-40 opacity-100 bg-black h-auto max-h-screen pt-6 pl-4 overflow-scroll  '>
                                                                  <img className='ml-6 w-28' src={sitelogo} ></img>
                                                                  <ul className=' mr-6 pt-6' >
                                                                  <hr className='my-2 border-current'></hr>
                                                                      <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="/">HOME</a></li>
                                                                      <hr className='my-2 border-current'></hr>
                                                                       <li style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold",position:"relative"}} >SERVICES <label for="touch"><span className='w-4  bg-green-300 rounded-sm absolute right-8 top-px '> <ChevronRightIcon className="text-slate-700 relative right-1"/></span></label>
                                                                       
                                                                       <input type="checkbox" id="touch"/> 

                                                                          <ul class="top_slide">
                                                                             <hr className='my-2 border-current'></hr>
                                                                             <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="/WebD">WEB DEVELOPMENT</a></li>
                                                                             <hr className='my-2 border-current'></hr>
                                                                             <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="/UI">UI/UX DESIGNING</a></li>
                                                                             <hr className='my-2 border-current'></hr>
                                                                             <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="/TwoD">2D DESIGNING</a></li>
                                                                             <hr className='my-2 border-current'></hr>
                                                                             <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="/ThreeD">3D DESIGNING</a></li>
                                                                             <hr className='my-2 border-current'></hr>
                                                                             <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="/Animation">ANIMATION</a></li>
                                                                             <hr className='my-2 border-current'></hr>
                                                                             <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="#">GAME DEVELOPMENT</a></li>
                                                                             <hr className='my-2 border-current'></hr>
                                                                             <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="/App">APP DEVELOPMENT</a></li>
                                                                             <hr className='my-2 border-current'></hr>
                                                                             <li  style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} className='' ><a href="#">DIGITAL MARKETING</a></li>
                                                                          </ul>
                                                                       </li>
                                                                       <hr className='my-2 border-current'></hr>
                                                                       <li style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} ><a href="">ABOUT US</a></li>
                                                                       <hr className='my-2 border-current'></hr>
                                                                       <li style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}} ><a href="">BLOG</a></li> 
                                                                       <hr className='my-2 border-current'></hr>       
                                                                       <li style={{color:"#9CA3A9", fontSize:"15px", fontFamily:"Teko,sans-serif",fontWeight:"bold"}}  ><a href="">CONTACT US</a></li>
                                                                       <hr className='my-2 border-current'></hr>
                                                                    </ul>
                                                                      
                                                                        <p className=' text-sm font-extralight mb-2 mt-16'>Inept Studio-A Company Digital </p>
                                                                        <p className=' text-sm font-extralight  '>Solution</p>

                                                                        <p className=' text-sm font-extralight mt-6 underline'>Gauravgangola@gmail.com</p>
                                                                        <p className=' text-sm font-extralight mt-3'>9812345674</p>
                                                                        <p className='text-sm font-extralight mt-2'>9812345674</p>

                                                                        <div class="flex mt-9 mb-20  ">
                                                                            <a  href="#"> <img className='w-10'  src={fb}/></a>
                                                                            <a href="#"> <img className='w-10'  src={insta}/></a>
                                                                            <a href="#"> <img className='w-10'  src={twitter}/></a>
                                                                            <a href="#"> <img className='w-10'  src={whatsaap}/></a>
                                                                            <a href="#"> <img className='w-10'  src={linkdin}/></a>
                                                                        </div>

                                                                           
                                                                      
                                                            </div>
                                                        </div>
                                                        
                                                       
                                                       </Box>
                      </Modal>   
          	 

     
			</div>		
		</nav>





		<div className='flex justify-center   relative overflow-hidden'>
			    <h1 class=" text-3xl sm:text-5xl md:text-5xl mt-44 font-semibold text-white z-10 ">Animation</h1>
			  <div  className="top_leftanim  " >
				<img  src={RightwhiteCurve}/>
        
			  </div>
        
		</div>
    	<div class="top_leftanim2 ">
			  <img className='top_left_img' src={Rightimg}/>

        </div>
	</section>
    </>
  )
}

export default Top_banner