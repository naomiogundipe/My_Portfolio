import React from 'react'
import Primarybtn from '../Buttons/Primarybtn'

const TextBox = () => {
  return (
    <>
      <div className='flex flex-col md:ms-12 gap-3 text-2xl w-full md:max-w-max items-center   md:items-start '>
        <p className='text-center md:text-start text-xl'> <span className='text-4xl'>Hi, I'm <span className='font-semibold text-5xl'>Naomi Ogundipe</span></span></p>
        <h1 className='text-center md:text-start text-lg'>"NTDEV - Building Problem-Solving Web Experiences with JavaScript"</h1>
        <p className='lg:text-sm text-gray-600 italic text-xs text-center md:text-start'>MOTTO: "Solving Problems, one Line of Code at a Time"</p>
        <Primarybtn text={'connect'}/>
      </div>
    </>
  )
}

export default TextBox
