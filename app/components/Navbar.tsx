import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useRef } from "react";

const Navbar = () => {

  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
        <a href='#top'>
          <Image
            src={assets.logo}
            alt='logo'
            className='w-30 cursor-pointer '
          />
        </a>

        

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li>
            <a className='font-Ovo' href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#about'>
              Journey
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#skills'>
              Skills
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#builds'>
              Builds
            </a>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='' className='w-6' />
          </button>
          <a
            href='#contact'
            className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-400 rounded-full ml-4 font-Ovo'>
            Connect{" "}
            <Image
              src={assets.arrow_icon}
              alt='contact'
              className='w-3 cursor-pointer'
            />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.burger_black} alt='' className='w-8' />
          </button>
        </div>
        {/* Mobile Screen */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-8 py-22 px-8 fixed -right-0 top-0 bottom-0 w-62 z-50 h-screen bg-rose-50 transistion-transform duration-500' onClick={closeMenu}>
        <div className="absolute right-7 top-7 ">
                <Image src={assets.close_black} alt='close' className="w-5 cursor-pointer" />
            </div>
          <li>
            <a className='font-Ovo' href='#top' onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#about' onClick={closeMenu}>
              Journey
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#skills' onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#builds' onClick={closeMenu}>
              Builds
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
