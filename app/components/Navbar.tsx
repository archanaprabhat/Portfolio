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

  const navItems = [
    { href: '#top', label: 'Home' },
    { href: '#about', label: 'Journey' },
    { href: '#skills', label: 'Skills' },
    { href: '#builds', label: 'Builds' }
  ];

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

        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-center gap-2 lg:gap-4 rounded-full px-8 py-3 backdrop-blur-xl bg-white/20 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-300'>
          {navItems.map((item,) => (
            <li key={item.href} className="relative group">
              <a 
                className='font-Ovo px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/40 hover:text-pink-400 hover:scale-105 hover:shadow-md relative overflow-hidden'
                href={item.href}
              >
                {item.label}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                
                {/* Hover glow effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-all duration-300"></span>
            </a>
          </li>
          ))}
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
