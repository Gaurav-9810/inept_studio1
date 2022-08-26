import React from 'react'
import './Newabout.css';
import img15 from '../../images/aboutus1.jpg';
import CheckIcon from '@mui/icons-material/Check';
// import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export default function Newabout() {
  return (
    <div className="About-section2 mt-20">

      <div className="About-container5">
        
        <div id="About-services5">
        <div className="About-box5 About-card4">
        <img src={img15}   alt="" />
          
        </div>
        
        <br />
        <div className="About-box5 About-card5">
        <h1 className='font-semibold text-4xl sm:text-5xl mb-6'>WE’RE THE BEST AGENCY IN DOWNTOWN.</h1>
        
         
         <h3>We are commited to providing our customers with
           exceptional services while offering our employees the best training.</h3>
           <h4 className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}><i>"In Inept studio we use the following design process.
             It has proven the best results for us and our clients."</i></h4>

           <ul className='text-lg lg:text-2xl sm:text-xl font-normal '  >
            <li><CheckIcon style = {{Margin : '20px' }}/> Project Planning</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> Content Creation/ Revision</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> Development & Designs</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> Testing and Launch</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> Continous Improvement</li>
            
           </ul>

          
        </div>
       
        </div>
      </div>
    </div>
  )
}
