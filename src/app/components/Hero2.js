'use client'
import { useEffect, useState } from 'react';

const Hero2 = () => {
  return (
    <div>
      {/* Hero Section 2 */}
      <section className="flex flex-col-reverse md:flex-row bg-[#F4F7FA] md:mt-0 items-center" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
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
          <p className="text-[12px] text-[#473BF0] uppercase tracking-wide font-bold mb-4">Easily create agreements</p>
          <h1 className="text-4xl font-extrabold mb-4 text-[#473BF0]">
            Say goodbye to
            <span className="block">legal bills</span>
          </h1>            
          <p className="text-[14px] mb-6 text-[#1C0E0D] leading-6">
            TalentTreaty leverages AI and industry best practices to automate professional agreements, helping you save on costly legal fees. Our mission is to offer a more sustainable, artist-focused solution, empowering you with tailored contracts that protect your interests while keeping more money in your pocket.          </p>
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

