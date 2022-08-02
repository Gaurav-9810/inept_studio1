import React from 'react';
import { TestimonialsData } from './TestimonialsData';
import img1 from '../images/Pixlr.jpg';
import './TestimonialsTest.css' ;
import LaunchIcon from '@mui/icons-material/Launch';
import swasth from '../images/slider_img-1.png';
import urbanRider from '../images/UrbanRider-1.jpg';
import bhaavnagar from '../images/bhaavnagar.jpg';
import ClipStudio from '../images/ClipStudioPaint.png';
import Avatar from '@mui/material/Avatar';


function TestimonialsTest({item}) {
  
  return (
  
      //  <div className='slide work'>
      //           <img src={img1}/>
      //           <div className='layer'> 
      //           <h3>{item.heading}</h3> 
      //           <p> {item.about}</p>
      //           <a href = "#"> {item.icon} </a>
      //           </div>
      //       </div>

        <div className='outer_cont'>

           <div className='inner_cont'>
                <div className = 'about'>
                    <div className ='pic'>
                       <Avatar alt="Gaurav" src={item.image} sx={{ width: 55, height: 55 }}></Avatar>
                    </div>
                    <div className = 'name_and_designation'>
                        <div className='name'> {item.name} </div>
                        <div className='design'> {item.design} </div>
                    </div>
                </div>
                <div className = 'comment'>
                {item.comment}
                </div>

            </div> 

         </div>

     
  )

}

export default TestimonialsTest



