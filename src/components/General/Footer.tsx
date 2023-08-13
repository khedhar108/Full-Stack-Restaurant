"use Client"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' h-12 md:h-24 lg:p-20 xl:p-40 bg-slate-500 text-red-400 flex items-center justify-between p-4'>
      <Link href ="/">PIZATOO</Link>
      <p className='uppercase'>All rights are reserved </p>
    </div>
  )
}

export default Footer