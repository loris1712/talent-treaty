// src/components/Clients.js
const Clients = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h1 className="text-4xl font-extrabold mb-4 text-[#332C5C] text-center">Our Clients</h1>
      
      <div className="container mx-auto flex justify-center items-center">
        <div>
          <img
            src="/images/clients1.svg"  // Replace with your actual image path
            alt="Client 1"
            className="w-[400px] h-auto shadow-lg rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;


