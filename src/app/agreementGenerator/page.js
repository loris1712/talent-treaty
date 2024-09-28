'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AgreementForm from '../components/AgreementForm';
import React from 'react';

const StartPage = () => {

  return (
    <div>
      <Navbar />
      <div className="bg-[#F4F7FA] py-10 px-4">
        <div className="container mx-auto mb-8" style={{marginTop: '10rem'}}>
          <AgreementForm />
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default StartPage;
