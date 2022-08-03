import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "../../../node_modules/swiper/swiper-bundle.css";

import '../Two_D_animation/Clients.css';
import {clientsData} from './Clientsdata.js';
import Clienttest from './Clienttest.js';


SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

function Clients() {
  const [x,setx] = useState(window.innerWidth>=1200?4:window.innerWidth>=900?3:window.innerWidth>=550?2:1);
  const[wsize,setwsize] = useState();
  const slides=[];




  useEffect(() => {
    
   
      clientsData.map((item,idx)=>{
        slides.push(
              <SwiperSlide key={`slide-${idx}`} style={{ listStyle: "none" ,lineHeight:"" }}>
                  <Clienttest  item={item}/>
                    {/* <div className="slide"></div> */}
              </SwiperSlide>
            );
      });
      window.addEventListener("resize", handleResize)

    // handleResize();
    
    console.log(x)
    
  })
  
  //  const handleResize = () => {
  //   setwsize(window.screen.width);
  //   if(wsize < 700){
  //     setx(1);
  //   }
  //   console.log(window.screen.width);
  //  }

  const handleResize = () => {

    if (window.innerWidth < 550) {
        setx(1);
    }
    
    else if(window.innerWidth >= 550 && window.innerWidth<900){
        setx(2);
    } 

    else if (window.innerWidth >= 900 && window.innerWidth < 1200){
        setx(3);
    }

    else{
      setx(4);
    }

  }


  return (
    <> 
    {window.addEventListener('resize',handleResize)
    }
     {console.log(window.innerWidth)}
    
    <div className="mx-10 my-5 slider">
      
        <center > WORK <span className="text-violet-700">SHOWCASE</span> </center>

        <Swiper

            id="swiper"
            virtual
            slidesPerView={x}
            // slidesPerColumn={2}
            // slidesPerColumnFill="row"
            spaceBetween={30}
            // slidesPerGroup={2}
            autoplay
            // loop
            onReachEnd={() => {
              // console.log("reach end");
              // const tmp = slides.unshift();
              // slides.push(tmp);
            }}
            // navigation
            // pagination
          >
            {slides}

      </Swiper>
      
    </div>

    </>
  );
    
}

export default Clients


