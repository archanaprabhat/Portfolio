import Image from "next/image";

import { assets, infoList } from "@/assets/assets";

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Intro.js</h4>
      <h2 className='text-center text-5xl font-Ovo'>About</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 '>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
            src={assets.user_image}
            alt='user'
            className='w-full rounded-3xl '
          />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I’m a frontend developer with 2 years of experience, previously
            working on backend systems at Vymo. While I’ve explored both ends of
            the stack, building user-focused interfaces is where I thrive the
            most.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon, iconDark, title, description}, index) => (
                <li key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer">
                    <Image src={icon} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
