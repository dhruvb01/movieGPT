import React from 'react'
const Videotitle = ({title,overview}) => {
  
  return (
    <div className='w-[100%] aspect-video pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white hover:opacity-80 text-black p-4 px-12  rounded-lg'>▶Play</button>
        <button className=' mx-2 bg-gray-500 text-white p-4 px-12 bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default Videotitle