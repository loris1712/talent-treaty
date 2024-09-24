'use client'

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "/images/quote-icon.svg", // Image for the quote icon
    message: "This service is incredible! It saved us a lot of time and money.",
    name: "John Doe",
    role: "CEO, MusicCorp"
  },
  {
    id: 2,
    quote: "/images/quote-icon.svg",
    message: "I couldn't have asked for a better contract service for my music business.",
    name: "Jane Smith",
    role: "Manager, Star Music"
  },
  {
    id: 3,
    quote: "/images/quote-icon.svg",
    message: "The contracts are easy to create and perfectly tailored to my needs.",
    name: "Michael Brown",
    role: "Producer, SoundLab"
  },
  {
    id: 4,
    quote: "/images/quote-icon.svg",
    message: "The entire process is seamless and professional. Highly recommended!",
    name: "Emily White",
    role: "Artist, IndieWave"
  },
];

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 2 ? 0 : prevSlide + 2
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 2 : prevSlide - 2
    );
  };

  return (

    <div className='bg-[#F4F7FA]'>

    <div className="relative w-full max-w-4xl mx-auto py-16 flex">
      {/* Left Arrow */}
      <button
        className=""
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#000"
          stroke="currentColor"
          className="w-6 h-6"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </button>

      {/* Testimonials */}
      <div className="flex space-x-8 overflow-hidden ml-6">
        {testimonials.slice(currentSlide, currentSlide + 2).map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col w-[45%] p-6 rounded-lg"
          >
            <img
              src={testimonial.quote}
              alt="Quote Icon"
              className="w-8 h-8 mb-4"
            />
            <p className="font-semibold mb-4 text-[18px] text-[#161C2D] leading-[18px]">"{testimonial.message}"</p>
            <div className="flex">
              <h3 className="text-[#332C5C] font-bold">{testimonial.name} &nbsp;</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className=""
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#000"
          stroke="currentColor"
          className="w-6 h-6"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      
      </button>
    </div>
    </div>
  );
};

export default TestimonialsSlider;
