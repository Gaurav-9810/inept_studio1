import React from 'react';
import image1 from '../../images/app_dev.jpg';



function TwoD_deignbeni() {
  return (
    <div className='mt-3 mx-4 md:flex  md:mx-10  pb-6 lg:mb-8 '>
      <div className=' md:w-1/2  xl:mx-auto    '>
          <h1 className='font-semibold text-4xl sm:text-5xl mb-6'>How Application help your business</h1>
        <ol className='text-lg lg:text-2xl sm:text-xl font-normal '>
          <li className='leading-10'>1- Provides more brand value for your customers.</li>
          <li className='leading-10'>2- Builds a stronger brand.</li>
          <li className='leading-10'>3- Connects you with your client base efficiently.</li>
          <li className='leading-10'>4- Improves customer loyalty.</li>
          <li className='leading-10'>5- Provides you with a competitive edge in your niche.</li>
          <li className='leading-10'>6- Helps in reaching higher customer engagement levels.</li>

        </ol>      
      </div>
      <div className='w-11/12 h-96    sm:my-auto md:w-1/2  flex justify-center  lg:flex  ' >
          <img className='h-96   lg:h-96 lg:w-9/12  ' src={image1}></img>
      </div>

    </div>
  )
}

export default TwoD_deignbeni