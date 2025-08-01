import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
        <a href="#top">
            <Image src={assets.logo} alt="logo" className='w-30 cursor-pointer ' />
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">Journey</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#builds">Builds</a></li>
        </ul>

        <div>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-400 rounded-full ml-4'>Connect <Image src={assets.arrow_icon} alt="contact" className='w-3 cursor-pointer' /></a>
        </div>
    </nav>

    </>
  )
}

export default Navbar