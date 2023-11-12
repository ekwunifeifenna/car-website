import Image from 'next/image'
import React from 'react'
import  CustomButton  from './CustomButton'

const Hero = () => {
  return (
    <div className="hero">

      <div className='flex-1 pt-36 padding-x'></div>
      <h1 className='hero__title'>
      Find the car of your dreams
      </h1>

      <p className='hero__subtitle'>Steamline your car rental experience with our state of the art booking system </p>

      <CustomButton />
      
    </div>
  )
}

export default Hero