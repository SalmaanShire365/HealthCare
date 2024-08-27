"use client";
import React from 'react';
import { ReactTyped} from 'react-typed';
import GetStartedButton from './buttons/GetStartedButton'
const HeroSection = () => {
  return (
  <section id='home'>
  <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2'>Alpha Quality Health Care</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Help us help you.</h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Health Care</p>
        <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={[
              "for you",
              "for loved ones",
              "for all",]}
            typeSpeed={120}
            backSpeed={140}
            loop
        ></ReactTyped>
      </div>
      <div> 
      <p className='md:text-2xl text-xl font-bold text-gray-500'>Emergency assistance for Disability Waiver recipients providing on-call counseling and immediate home response.</p>
      <GetStartedButton />
    </div>
    </div>
  </div>
  </section>
  );
};

export default HeroSection;