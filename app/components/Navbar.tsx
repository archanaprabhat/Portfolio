import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
        <a href="#top">
            <Image src={assets.logo} alt="logo" className='w-20 h-20 cursor-pointer mb-14' />
        </a>

        <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div>
            <a href="#contact">Contact <Image src={assets.arrow_icon} alt="contact" className='w-3 cursor-pointer' /></a>
        </div>
    </nav>

    </>
  )
}

export default Navbar