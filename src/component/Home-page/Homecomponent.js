import React,{useState} from 'react';

import img1 from '../../images/a.webp'
import img2 from '../../images/b.webp'
import img3 from '../../images/c.jpg'
import './Homecomponent.css';

// import img4 from '../../images/game.webp'


function Homecomponent() {
     

  return (
  
    <div class="containerx">
    <div class="leftcontainerx">
        <div class="imagesx">
        <img class="img2x" src={img2}/>
        <img class="img1x" src={img1}/>
       
            {/* <div class="img2">  <img src="images/image B.webp"/></div>
            <div class="img1"> <img src="images/image A.webp"/></div> */}
        </div>
    </div>
    <div class="rightcontainerx">
        <h1>LETS PLAN FOR YOUR SMALL BUSINESS <span class="fullstopx">.</span></h1>
            <p>DIGITALIZE YOUR COMPANY AT A VERY SMALL PRICE.</p><br/>
            <h2> Design process that has proven to be effective for our clients:</h2>

            <div class="listx">
                <div class="listitemsx">
                    <ul>
                        <li>Project Planning</li>
                        <li>Content Creation/Content Revision</li>
                        <li>Development & Design</li>
                        <li>Testing and Launch</li>
                        <li>Continuous Improvement</li>
                    </ul>
                    <a href="/AboutUs" class="btnx">DISCOVER MORE</a>
                </div>

                <div class="rightdownx">
                    <span class="small-linex"></span>
                    <div class="ax">
                        <div class="circlex">
                            <div class="datex">SINCE<br/>&nbsp;2018</div>
                            
                        </div>
                        <img class="img3x" src={img3}/>
                        {/* <div class="img3"><img src="images/image2.jpg"/></div> */}
                    </div>
                    
                   
                </div>
                    
    </div>
</div>
</div>

  )
}

export default Homecomponent