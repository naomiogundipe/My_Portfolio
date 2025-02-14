import React from 'react'
import Image from './Image'

const ImageHolder = ({theme}) => {
  return (
    <>
      <div className={`lg:h-full lg:w-1/2 flex items-center justify-center  max-w-max py-5 lg:py-0    `}>
      <Image theme={theme}/>
      </div>
    </>
  )
}

export default ImageHolder
