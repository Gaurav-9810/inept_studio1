import React, { useRef, useEffect } from "react";
import vt from "vanilla-tilt";
import './Home_service.css';
import img1 from '../../images/web.webp'
import img2 from '../../images/app.webp'
import img3 from '../../images/graphics.webp'
import img4 from '../../images/game.webp'
import img5 from '../../images/online.webp'
import img6 from '../../images/app.webp';





function Home_Service() {
    const tiltRef = useRef();

  useEffect(() => {
    vt.init(tiltRef.current, {
     // glare: true
    });

    return () => {
      tiltRef.current.vanillaTilt.destroy();
    };
  }, []);

  const tiltRef2 = useRef();

  useEffect(() => {
    vt.init(tiltRef2.current, {
     // glare: true
    });

    return () => {
      tiltRef2.current.vanillaTilt.destroy();
    };
  }, []);

  const tiltRef3 = useRef();

  useEffect(() => {
    vt.init(tiltRef3.current, {
     // glare: true
    });

    return () => {
      tiltRef3.current.vanillaTilt.destroy();
    };
  }, []);

  const tiltRef4 = useRef();

  useEffect(() => {
    vt.init(tiltRef4.current, {
      //glare: true
    });

    return () => {
      tiltRef4.current.vanillaTilt.destroy();
    };
  }, []);

  const tiltRef5 = useRef();

  useEffect(() => {
    vt.init(tiltRef5.current, {
     // glare: true
    });

    return () => {
      tiltRef5.current.vanillaTilt.destroy();
    };
  }, []);

  const tiltRef6 = useRef();

  useEffect(() => {
    vt.init(tiltRef6.current, {
     // glare: true
    });

    return () => {
      tiltRef6.current.vanillaTilt.destroy();
    };
  }, []);

  return (
    <div> <div class="Service_containeroffline"> 
    <div class="Service_top-container">
        
        <div class="Service_bigtext">
            <h2>WE CREATE THE PERFECT  BRAND SOLUTIONS <span class="Service_fullstop Service_bigtext"  >.</span></h2>
            
            <div class="Service_smalltext">
                <p>Exceptional customer service with best employee training.</p>
            </div> 
       </div> 
            
       <div class="Service_container1">
       
        <div ref={tiltRef} id="Service_card1" class="Service_card" data-tilt>
        
            <img src={img1}/>
            <h2>WEB DEVELOPMENT</h2>
            <p> HTML, CSS , JS , REACT , NODE JS , MY SQL </p>
            <a href="/WebD" class="Service_btn">EXPLORE MORE</a>
        </div>
     </div> 

     <div class="Service_container2">
        <div ref={tiltRef2} id="Service_card2" class="Service_card" data-tilt>
            <img src={img2}/>
            <h2>APP DEVELOPMENT</h2>
            <p>FLUTTER , REACT NATIVE , SWIFT , PYTHON</p>
            <a href="/App" class="Service_btn">EXPLORE MORE</a>
        </div>
      </div>
   </div> 

     

    <div class="Service_list-container">
        <div class="Service_container">
            <div ref={tiltRef3} id="Service_card3" class="Service_card " data-tilt>
                <img src={img3}/>
                <h2>GRAPHICS (2-D / 3-D)</h2>
                <p> PHOTOSHOP , ILLUSTRATOR , BLENDER , MAYA </p>
                <a href="/ThreeD" class="Service_btn">EXPLORE MORE</a>
            </div>
        </div> 

        <div class="Service_container">
            <div ref={tiltRef4} id="Service_card4" class="Service_card" data-tilt>
                <img src={img4}/>
                <h2>GAME DEVELOPMENT</h2>
                <p>  UNREAL , UNITY , JS , REACT , NODE JS , MY SQL  </p>
                <a href="/Game" class="Service_btn">EXPLORE MORE</a>
            </div>
        </div> 

        <div class="Service_container">
            <div ref={tiltRef5} id="Service_card5" class="Service_card" data-tilt>
                <img src={img5}/>
                <h2>DIGITAL MARKETING</h2>
                <p> SEMURSH , UBERSUGGEST , GOOGLE ANALYTICS , SEO  </p>
                <a href="/Digital" class="Service_btn">EXPLORE MORE</a>
            </div>
        </div> 

        <div class="Service_container">
            <div ref={tiltRef6} id="Service_card6" class="Service_card" data-tilt>
                <img src={img6}/>
                <h2>ANIMATION</h2>
                <p> PHOTOSHOP , ILLUSTRATOR , BLENDER , MAYA  </p>
                <a href="/Animation" class="Service_btn">EXPLORE MORE</a>
            </div>
        </div> 
      
    </div>
</div></div>
  )
}

export default Home_Service