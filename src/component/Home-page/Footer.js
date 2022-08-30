import React, { useState } from 'react';
// import './Footer.css';
import '../Two_D_animation/NEwFooter.css'
import fb from '../../images/facebook-icon.png';
import insta from '../../images/instagram-icon.png';
import linkdin from '../../images/linkedin-icon.png';
import whatsaap from '../../images/whatsapp-icon.png'
import twitter from '../../images/twitter-icon.png';
// import back from '../images/back.jpg';
import logo from '../../images/logo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';



function Footer() {
  const[email,setEmail] =useState('');
  return (
      <>
      

<div className=' footer h-auto    text-gray-400 py-5 px-4 text-lg leading-7 pt-14 '>
  <div class="row  sm:flex md:mx-4 my-4 mb-11 ">
      <div className="col sm:mx-2 sm:w-3/12 md:w-4/12">
           <img class=" w-16 mb-4 md:w-1/4 md:ml-8 " src={logo}/>
           <p className='text-sm md:text-base lg:text-2xl mb-4'> Welcome to Inept Studio <br/> Explore your bussiness <br/>with us</p>
            <div class="social-icons flex ">
              <a  href="#"> <img className='w-10'  src={fb}/></a>
              <a href="#"> <img className='w-10'  src={insta}/></a>
              <a href="#"> <img className='w-10'  src={twitter}/></a>
              <a href="#"> <img className='w-10'  src={whatsaap}/></a>
              <a href="#"> <img className='w-10'  src={linkdin}/></a>
            </div>
      </div>
      <div class="col sm:mx-2 sm:w-3/12 md:w-2/12">
          <h2 className='text-white font-semibold text-lg md:text-xl mt-3 mb-4  md:text-xl lg:text-3xl' >EXPLORE</h2>
          <div class="nav-links">
              <ul className='text-sm md:leading-7 md:text-base lg:text-lg'>
                  <li className=' my-2'><a href="#">Support</a></li>
                  <li className=' my-2'><a href="#">Private Policy</a></li>
                  <li className=' my-2'><a href="#">Terms of Use</a></li>
                  <li className=' my-2'><a href="#">Help</a></li>
              </ul>
              
          </div>
         
      </div>
      <div class="col sm:mx-2 sm:w-3/12 md:w-4/12 "> 
          <h2 className='text-white font-semibold text-lg mt-3 md:text-xl lg:text-3xl mb-4'>CONTACT</h2>
          <p className='text-sm my-2 md:leading-7 md:text-base lg:text-lg'> <LocationOnIcon/>Street No-113/10 Sant Nagar Burari <br></br>New Delhi-110084 </p>
          <p className='text-sm my-2 md:leading-7 md:text-base lg:text-lg'><LocalPhoneIcon/>8800475391 9650088922</p>
          <p className='text-sm my-2 md:leading-7 md:text-base lg:text-lg' ><EmailIcon/>ineptstudio@gmail.com</p>
      </div>
      <div class=" z-50 col mb-4 sm:mx-2 sm:w-3/12 md:w-2/12">
          <h2 className='text-white mb-4 font-semibold text-lg mt-3 md:leading-7 md:text-xl lg:text-3xl'>NEWSLETTER</h2>
              <form>
                      <input className=' bg-transparent border-color: inherit; outline-none  text-sm md:text-base lg:text-lg w-11/12 border-b-2 ' type="email" name="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
              </form>
      </div>
  </div>
  <hr />
  <p class="copyright text-sm text-center">Made with love by INEPT Studio</p>
</div>  
</>  
  )
}

export default Footer