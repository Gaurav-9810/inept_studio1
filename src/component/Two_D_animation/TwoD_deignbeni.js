import React from 'react';
import image1 from '../../images/slider_img-1.png';



function TwoD_deignbeni() {
  return (
    <div className='mt-3 mx-4 sm:flex  sm:mx-10  pb-6 lg:mb-8 xl:mb-20'>
      <div className=' sm:w-1/2  xl:mx-auto    '>
          <h1 className='font-semibold text-4xl sm:text-5xl mb-6'>How 2D Design help your bussiness</h1>
        <ol className='text-lg lg:text-2xl sm:text-xl font-normal '>
          <li className='leading-10'> 1 - 2D design helps in creating a powerful impression of your brand on social media.</li>
          <li className='leading-10'>2 - It builds a unique identity for your Brand. Company logos, website logos are all important to make your brand stand out from the rest.</li>
          <li className='leading-10'>3 - It indicates professionalism.</li>
          <li className='leading-10'>4 - 2D design builds the credibility of your brand.</li>
          <li className='leading-10'>5 - It helps in the communication of the ideas of your brand efficiently.</li>

        </ol>      
      </div>
      <div className='w-11/12 h-72    sm:my-auto sm:w-1/2  sm:pl-7  lg:flex lg:justify-end ' >
          <img className='sm:h-72 h-60 m-auto lg:h-96 ' src={image1}></img>
      </div>

    </div>
  )
}

export default TwoD_deignbeni