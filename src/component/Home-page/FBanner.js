import React from 'react';
import '../Two_D_animation/FBanner.css';

function FBanner() {
  return (
<div className="banner w-11/12 bg-violet-600 py-9 mx-auto rounded-md z-10 relative top-7 ">
      <div class="card text-center sm:flex sm:justify-evenly">
          <div className=" text-white banner-text text-lg font-bold mb-3 md:text-2xl  lg:text-4xl font">
              LET'S GET YOUR PROJECT <br/> STARTED !
          </div>

              {/* <button class="bnbtn">GET MY FREE PROPOSAL</button> */}
              {/* <div class="button-container-2">
    
                  <button type="button" name="Hover">MASK2</button>
             </div> */}
             <a href="/ContactUs"><button class="explore md:mt-4">GET Start<span class="icon-right"></span><span class="icon-right after"></span></button></a>
      </div>
  </div>
  )
}

export default FBanner