import React from 'react';
import image1 from '../../images/web_dev.jpg';



function TwoD_deignbeni() {
  return (
    <div className='mt-3 mx-4 md:flex  md:mx-10   lg:mb-4 xl:mb-20'>
      <div className=' md:w-1/2  xl:mx-auto'>
          <h1 className='font-semibold text-4xl sm:text-5xl mb-6'>How Website Help Your Business</h1>
        <ol className='text-lg '>
          <li className='leading-10'> 1 - Your website can attract new customers through google.</li>
          <li className='leading-10'>2 - A website makes you look professional.</li>
          <li className='leading-10'>3 - You can clearly showcase your products and services.</li>
          <li className='leading-10'>4 - You can display your reviews and testimonials prominently on your website.</li>
          <li className='leading-10'>5 - A website encourages customers to contact you.</li>
          <li className='leading-10'>6 - Websites help in reaching Higher Customer Engagement Level.</li>

        </ol>      
      </div>
      <div className='w-11/12 h-96    sm:my-auto md:w-1/2  flex justify-center  lg:flex  ' >
          <img className='h-96   lg:h-96  ' src={image1}></img>
      </div>

    </div>
  )
}

export default TwoD_deignbeni