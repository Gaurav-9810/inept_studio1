import React from 'react';
import image1 from '../../images/slider_img-1.png';



function TwoD_deignbeni() {
  return (
    <div className='mt-3 mx-4 sm:flex  sm:mx-10  pb-6 lg:mb-8 xl:mb-20'>
      <div className=' sm:w-1/2  xl:mx-auto    '>
          <h1 className='font-semibold text-4xl sm:text-5xl mb-6'>How Game development Help Your Business</h1>
        <ol className='text-lg lg:text-2xl sm:text-xl font-normal '>
          <li className='leading-10'> 1 - You can put as much time into the business as you'd like.</li>
          <li className='leading-10'>2 -It's not necessary to have a physical storefront or office space to get your business started. </li>
          <li className='leading-10'>3 - Starting a game development business can be really rewarding work.</li>
          <li className='leading-10'>4 - The average time it takes to build your product is quick - typically around 7 months.</li>
          <li className='leading-10'>5 - Game Development Businesses have the ability to choose the clients they work with. </li>
          <li className='leading-10'>6 -Your business is one that encourages and inspires others, which in itself, can be very fulfilling.</li>

        </ol>      
      </div>
      <div className='w-11/12 h-72    sm:my-auto sm:w-1/2  sm:pl-7  lg:flex lg:justify-end ' >
          <img className='sm:h-72 h-60 m-auto lg:h-96 ' src={image1}></img>
      </div>

    </div>
  )
}

export default TwoD_deignbeni