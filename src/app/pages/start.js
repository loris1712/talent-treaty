// src/pages/another-page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AnotherPage = () => {
  return (
    <div>
      <Navbar />
      <section className="py-20 text-center">
        <h1 className="text-4xl">Another Page</h1>
        <p>This is another page of the Talent Treaty site.</p>
      </section>
      <Footer />
    </div>
  );
};

export default AnotherPage;
