'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';

const StartPage = () => {

  const boxes = [
    { title: 'Produce Agreement', description: 'Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar.', link: '/agreement' },
    { title: 'Mechanical License', description: 'Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. ' },
    { title: 'Royalty Split', description: 'Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. ' },
    { title: 'Publishing Contract', description: 'Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. ' },
    { title: 'Mechanical License', description: 'Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. ' },
    { title: 'Royalty Split', description: 'Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. Bod bigt Kent Jonasson. Mövis paravis al. Bionarade astronar. ' },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#F4F7FA] py-10 px-4">
        <div className="container mx-auto" style={{marginTop: '10rem'}}>

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
                <p className={`mb-4 text-[12px] ${
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

