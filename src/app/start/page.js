'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';

const StartPage = () => {

  const boxes = [
    { title: 'Producer Agreement', description: 'Set the stage for success with a comprehensive agreement that outlines the producer\’s creative contributions, payment terms, royalties, and credit. Whether you\'re making a hit or a masterpiece, this agreement ensures the right terms are in place to protect your work and get you paid.', link: '/agreement' },
    { title: 'Artist Management Agreement', description: 'Every great artist needs a savvy manager. This agreement locks in the details of your partnership, including commissions, roles, and expectations, so both parties can focus on building the artist\'s career without misunderstandings. It\’s the ultimate backstage pass to a thriving artist-manager relationship.' },
    { title: 'Work-for-Hire Session Musician Agreement', description: 'Session players are the unsung heroes of countless hits. This agreement makes sure they’re paid properly, credited fairly, and clear on their role in the session. Whether you\'re laying down a riff or keeping time, this contract ensures everyone plays in harmony—on and off the track.' },
    { title: 'Songwriter Agreement', description: 'For when the muse strikes and magic happens—this agreement covers ownership, royalties, and rights, protecting the heart of every great song. Whether you\'re collaborating or working solo, this keeps the creative wheels turning while ensuring you get your fair share.' },
    { title: 'Songwriter Split sheet Agreement', description: 'Creativity is a group effort, but the business side doesn\'t have to be complicated. This agreement ensures that every co-writer\’s contribution is recognized and fairly rewarded, so you can focus on writing the next big hit without worrying about who gets what.' },
    { title: 'Remix Agreement', description: 'Turn a great track into something entirely new while keeping the business side smooth. This agreement covers the remixing terms, including payment, rights, and credit, ensuring both the original artist and remixer are protected while the beats stay fresh and legal.' },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#F4F7FA] py-10 px-4">
        <div className="container mx-auto" style={{marginTop: '8rem'}}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boxes.map((box, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg shadow-lg ${
                  index === 0 ? 'bg-white' : 'bg-gray-200'
                }`}
              >
                <h2 className={`text-2xl font-bold mb-4 ${
                  index === 0 ? 'text-[#161C2D]' : 'text-gray-400'
                }`}>{box.title}</h2>
                <p className={`mb-4 text-[14px] ${
                  index === 0 ? 'text-[#161C2D]' : 'text-gray-400'
                }`}>{box.description}</p>
                <a href={box.link}>
                <button 
                  className={`flex items-center px-4 py-4 w-full rounded-[8px] transition duration-300 ease-in-out ${
                    index === 0 
                    ? 'bg-[#473BF0] text-white hover:bg-opacity-80' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`} 
                  disabled={index !== 0}
                >
                  <span className="text-[14px] mr-auto">Start</span>
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </button>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartPage;

