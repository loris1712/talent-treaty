'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className={`fixed top-0 w-full transition duration-300 z-50 ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="/images/logo.svg" alt="Logo" className="h-8" />
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="#000"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>


        <div className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} items-center absolute md:relative top-16 right-0 bg-white md:bg-transparent md:top-0 md:right-0 w-full md:w-auto`}>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <Link href="/" className="block py-2 md:py-0 text-[#332C5C] hover:text-[#473BF0] text-[14px]">
              Home
            </Link>
            <Link href="/about" className="block py-2 md:py-0 text-[#332C5C] hover:text-[#473BF0] text-[14px]">
              About
            </Link>
            <Link href="/services" className="block py-2 md:py-0 text-[#332C5C] hover:text-[#473BF0] text-[14px]">
              Services
            </Link>
            <Link href="/blog" className="block py-2 md:py-0 text-[#332C5C] hover:text-[#473BF0] text-[14px]">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 md:py-0 text-[#332C5C] hover:text-[#473BF0] text-[14px]">
              Contact Us
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <Link href="/login">
              <button className="bg-white text-[#473BF0] py-2 px-4 hover:bg-[#f0f0f0] transition duration-300 ease-in-out text-[14px]">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-[#473BF0] text-white py-2 px-4 rounded-[12px] text-[14px]">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;