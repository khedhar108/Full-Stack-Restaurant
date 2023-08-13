import Image from 'next/image'
import React from 'react'
import CountDown from '../ClientSide/CountDown'

export default function Offer() {
  return (
    
    <div className='bg-black h-screen text-white flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/* TextContainer */}
      <div className='flex-1 flex flex-col items-center justify-center text-center gap-8 flex-wrap p-6'>
      <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1> 
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown/>
        <button className="bg-red-500 text-white rounded-md py-3 px-6 hover:bg-green-300 hover:text-black">Order Now</button>
      </div>
      {/* ImageContainer  image-fill/parent-relative  and big parrent-flex*/}
      <div className='relative flex-1 w-full'>
        <Image src="/offerProduct.png" alt="" fill className='object-contain'/>
      </div>
    </div>
  )
}
