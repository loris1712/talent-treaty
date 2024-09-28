// src/pages/index.js
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import TestimonialsSlider from './components/TestimonialsSlider';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
