import React from 'react'
import Hero from './Components/Hero';

function App() {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src="https://i.pinimg.com/1200x/0e/9a/8a/0e9a8a987492dbc3bfe06d25c861f5fc.jpg" alt="" />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Gateways</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sed odit quasi veniam, tenetur cum illo ab delectus corrupti eaque maxime perferendis!</p>
          <button>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default App;