import React from 'react'
import './Abou.css';
// import img11 from '../Images/4380.jpg';
import CheckIcon from '@mui/icons-material/Check';
import img11 from '../../images/6909.jpg';

export default function Abou() {
  return (

        
        <div id="hello-services">
          
        <div className="hello-box1  card23">
          <h1 className='font-semibold text-4xl sm:text-5xl mb-6'>BEST DESIGN AGENCY SOLUTIONS.</h1>
          
            
            
            <div className='quote'><i className='mb-4 ' style={{fontFamily:'"Open Sans", sans-serif',fontWeight:"400",color:'#565656'}}>"Inept Studio takes pride in dealing with every customer base and inclining to their respective needs. Every website or application design is catered to business goals, while standing out amongst the best. InfoTech specializes in Front-end, mobile application, web development, web hosting, technical support and so much more."</i></div>
            
            <ul className='text-lg lg:text-2xl sm:text-xl font-normal '>
            <li><CheckIcon style = {{Margin : '20px'}}/> Patience and Perseverance</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> Creative without being invasive</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> Watch your creation grow</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> On the forefront of technology</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> A remote team at your assistance</li>
            
            <li><CheckIcon style = {{Margin : '20px'}}/> Security, safety and confidentiality</li>
            </ul>
        </div>
        <br />
        
        <div className="hello-box2  card23 ">
           
            <img src={img11}  width="10"  alt="" />
            
           
        </div>
       
        </div>
  
  )
}
