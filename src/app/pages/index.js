// src/pages/index.js
import Navbar from '../components/Navbar';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
