'use client'
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row bg-white mt-0 items-center" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
        {/* Left Side - Text and Button */}
        <div className="flex justify-center md:w-1/2 px-4 md:px-0">
          <div className="md:w-1/2 flex justify-start">
            <img src="/images/homeElement.svg" alt="Element" className="object-cover h-[50%] w-auto" style={{position: 'absolute',  top: '0'}} />
            <img src="/images/dots.svg" alt="Dots" className="object-cover h-[20%] w-auto" style={{position: 'absolute', top: '60%', width: '13%', height: '14%'}}/>
          </div>
          <div>
          <h1 className="text-4xl font-extrabold mb-4 text-[#332C5C]">
              Create
              <span className="block">Music Contracts</span>
              <span className='text-[#473BF0]'>Instantly</span>
            </h1>            
            <p className="text-[14px] mb-6 text-[#1C0E0D] leading-6">Created by lawyers to help you save money on contracts. We specialize in the music industry offering cost effective contracts.</p>
            <button className="flex items-center bg-[#473BF0] text-white px-4 py-4 rounded-[8px] transition duration-300 ease-in-out hover:bg-opacity-80">
              <span className="text-[14px]">Get started for free</span>
              <svg className="ml-2 w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0l-4-4m4 4l-4 4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-end">
          <img src="/images/Screenshots.svg" alt="Description" className="object-cover h-full w-auto" />
        </div>
      </section>
    </div>
  );
};

export default Hero;