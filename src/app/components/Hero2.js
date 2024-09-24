'use client'
import { useEffect, useState } from 'react';

const Hero2 = () => {
  return (
    <div>
      {/* Hero Section 2 */}
      <section className="flex flex-col md:flex-row bg-[#F4F7FA] mt-16 md:mt-0 items-center" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img 
            src="/images/imghero2.svg" // Replace with your image path
            alt="Hero 2 Image"
            className="object-cover h-auto w-[90%]"
          />
        </div>

        {/* Right Side - Text and Button */}
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-4 text-[#332C5C]">
            Say goodbye to
            <span className="block">legal bills</span>
          </h1>            
          <p className="text-[14px] mb-6 text-[#1C0E0D] leading-6">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.          </p>
          <a href="/start">
            <button className="flex items-center bg-[#473BF0] text-white px-4 py-4 w-[fit-content] rounded-[8px] transition duration-300 ease-in-out hover:bg-opacity-80">
              <span className="text-[14px]">Get started for free</span>
              <svg className="ml-2 w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0l-4-4m4 4l-4 4" />
              </svg>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero2;

