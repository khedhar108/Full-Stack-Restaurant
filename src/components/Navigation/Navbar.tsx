import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
// rfc - react functional component ---VScode extension
export default function Navbar() {
   const user = false
  return (
    <div className='h-16 flex items-center justify-between px-12 bg-gray-600 border-b-4 border-b-red-400 text-sky-200 md:text-4xl 
    '>
      {/* -------------midium devices navbar---Left Side Links--------- */}
      <div className='hidden text-lg text-blue-300 md:flex gap-4 flex-1'>
      <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
   
    {/* Logo */}
    <div className='uppercase font-bold text-center flex-1 text-red-500 '>
      <Link href="/">Pizatoo</Link>
    </div>
       {/* -------------------------------mobile navbar-------------------- */}
    {/* Mobile Menu */}
    <div className='md:hidden'>
      <Menu/>
    </div>

    {/* -----------midium devices userLogin and orders -----RightSide Links----- */}
    <div className='hidden md:flex gap-4 flex-1 justify-end text-lg'>
      <div className='md:absolute top-1 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-400 rounded-md px-2 '>
        <Image src="/phone.png" alt="" width={20} height={20} />
        <span>1234 9999</span>
      </div>
        {/* { !variable/state ?() :()} */}
        {!user ? (
        <Link href="/login"  >Login</Link>
      ) : (
        <Link href="/orders"  >Orders</Link>
      )}
      {/* <CartIcon/> */}
    </div>

  </div>
  )
}
