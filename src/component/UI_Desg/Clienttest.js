import React from 'react';
import {clientsData} from './Clientsdata.js';
import img1 from '../../images/Pixlr.jpg';
import  '../Two_D_animation/Clienttest.css' ;
import LaunchIcon from '@mui/icons-material/Launch';
import swasth from '../../images/slider_img-1.png';
import urbanRider from '../../images/UrbanRider-1.jpg';
import bhaavnagar from '../../images/bhaavnagar.jpg';
import ClipStudio from '../../images/ClipStudioPaint.png';


function Clienttest({item}) {
  
  return (
  
      //  <div className='slide work'>
      //           <img src={img1}/>
      //           <div className='layer'> 
      //           <h3>{item.heading}</h3> 
      //           <p> {item.about}</p>
      //           <a href = "#"> {item.icon} </a>
      //           </div>
      //       </div>
  
      <div className='c1 '>
        <div className=' work'>
            <img src={item.url} /> 
            <div className='layer'>
            <h5>{item.heading}</h5> 
            {/* <p> {item.about}</p> */}
             <a href = {item.address} target="_blank"> <LaunchIcon className = 'icon' style = {{fontSize : '35px',margin : '5px'}}/> </a>
            </div>   
         </div>

      </div>
     
  )

}

export default Clienttest



