import React from 'react';
import image1 from '../../images/ui_des.jpg';



function TwoD_deignbeni() {
  return (
    <div className='mt-3 mx-4 md:flex   md:mx-10   lg:mb-8 xl:mb-20'>
      <div className=' md:w-1/2  xl:mx-auto    '>
          <h1 className='font-semibold text-4xl sm:text-5xl mb-6'>How UI/UX help your business</h1>
        <ol className='text-lg lg:text-2xl sm:text-xl font-normal '>
          <li className='leading-10'>1- Provides consistency across websites and applications.</li>
          <li className='leading-10'>2- Attracts and engages users with excellent UI/UX designs.</li>
          <li className='leading-10'>3- If your app or website has better UI/UX, then you will experience better traffic.</li>
          <li className='leading-10'>4- If the user is satisfied with their experience, they will use the services you have to offer.</li>
          <li className='leading-10'>5- A UX/UI designer gathers insightful data and converts it into specific, measurable goals that boost customer retention.</li>

        </ol>      
      </div>
      <div className='w-11/12 h-auto   mx-auto md:my-auto sm:w-3/5 md:1/2   md:pl-7 lg:flex lg:items-center lg:justify-end ' >
          <img className='h-80  h-60 m-auto lg:h-96 ' src={image1}></img>
      </div>

    </div>
  )
}

export default TwoD_deignbeni