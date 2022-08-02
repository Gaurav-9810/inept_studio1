import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "../../../node_modules/swiper/swiper-bundle.css";
//inept_studio\node_modules\swiper\swiper-bundle.cssswiper/swiper-bundle.css
import "./Testimonials.css" ;
import {TestimonialsData} from "./TestimonialsData";
import TestimonialsTest from './TestimonialsTest.js';



SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

function Testimonials() {
  const [x,setx] = useState(window.innerWidth > 1100 ? 2 :1);
  const[wsize,setwsize] = useState();
  const slides=[];

 
  useEffect(() => {
    
   
      TestimonialsData.map((item,idx)=>{
        slides.push(
              <SwiperSlide key={`slide_Tes-${idx}`} style={{ listStyle: "none" ,lineHeight:"" }}>
                  <TestimonialsTest  item={item}/>
                    {/* <div className="slide"></div> */}
              </SwiperSlide>
            );
      });
      // if(window.innerWidth > 1100){
      //   console.log("in if")
      //   setx(2)


      // }
      // else setx(1)
      window.addEventListener("resize", handleResize)



    // handleResize();
    
  } )
  
  //  const handleResize = () => {
  //   setwsize(window.screen.width);
  //   if(wsize < 700){
  //     setx(1);
  //   }
  //   console.log(window.screen.width);
  //  }

  const handleResize = () => {
    if (window.innerWidth < 1100) {
      console.log("in inner width")
      setx(1);
   }
    else{
      console.log("in else")
      setx(2);
    }
  }


  return (
    <> 
    {window.addEventListener('resize',handleResize)
    }
     {console.log(window.innerWidth)}
         
    <div className="mx-10 my-5 testimonials mt-16 ">
        
        <div className="heading"> 
        
        <center className = "client_head  "> Client Testimonials </center>
        <center className = "what_head text-violet-700"> What they are saying </center>
        
        </div>
         
        <div className="slider_Tes"> 
        <Swiper
            id="swiper_Tes"
            virtual
            slidesPerView={x}
            // slidesPerColumn={2}
            // slidesPerColumnFill="row"
            spaceBetween={30}
            // slidesPerGroup={2}
            autoplay
            loop
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
    </div>
    </>
  );
    
}

export default Testimonials