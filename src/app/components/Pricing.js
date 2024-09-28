// src/components/Pricing.js
const Pricing = () => {
  return (
    <section className="py-20 bg-gray-100">
      {/* Titolo sezione */}
      <p className="text-[12px] text-[#473BF0] uppercase tracking-wide font-bold mb-4 text-center">
        Price & Plans
      </p>
      <h1 className="text-4xl font-extrabold mb-4 text-[#473BF0] text-center">
        Pricing & Plans
      </h1>

      {/* Container per i 3 piani di abbonamento */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
      {/* Piano 1 - Visibile */}
        <div className="bg-white rounded-lg p-8 shadow-lg md:w-1/3">
          <h2 className="text-2xl font-bold text-left text-[#473BF0] mb-4">Founders Club          </h2>
          <div className="text-left mb-4 flex">
            <span className="text-4xl font-extrabold text-[#473BF0]">$0.00</span>
            <div className="text-[12px] text-[#473BF0] ml-2">
              <p>USD / mo</p>
              <p>Billed yearly ($0)</p>
            </div>
          </div>
          <p className="text-left text-[#332C5C] font-semibold mb-4 text-[#473BF0]">Free</p>
          
          {/* Lista features */}
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg> 
              Unlimited Contracts
            </li>
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg>
              Trusted by Industry Professionals
            </li>
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg>
              Created by Entertainment Attorny
            </li>
          </ul>

          {/* Bottone Get Started */}
          <button className="bg-[#473BF0] text-white w-full py-2 rounded-lg hover:bg-opacity-80 transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>

        {/* Piano 2 - Sfocato */}
        <div className="bg-[#473BF0] rounded-lg p-8 shadow-lg md:w-1/3 opacity-50 filter blur-md">
          <h2 className="text-2xl font-bold text-center text-[#fff] mb-4">Pro Plan</h2>
          <div className="text-center mb-4">
            <span className="text-4xl font-extrabold">$19.99</span>
            <div className="text-[12px] text-gray-500">per month</div>
          </div>
          <p className="text-center text-[#332C5C] font-semibold mb-4">Best Value</p>

          {/* Lista features */}
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg> 
              Unlimited Contracts
            </li>
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg>
              Trusted by Industry Professionals
            </li>
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg>
              Created by Entertainment Attorny
            </li>
          </ul>

          {/* Bottone Get Started */}
          <button className="bg-[#473BF0] text-white w-full py-2 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Piano 3 - Sfocato */}
        <div className="bg-white rounded-lg p-8 shadow-lg md:w-1/3 opacity-50 filter blur-md">
          <h2 className="text-2xl font-bold text-center text-[#473BF0] mb-4">Premium Plan</h2>
          <div className="text-center mb-4">
            <span className="text-4xl font-extrabold">$29.99</span>
            <div className="text-[12px] text-gray-500">per month</div>
          </div>
          <p className="text-center text-[#332C5C] font-semibold mb-4">All Features</p>

          {/* Lista features */}
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg> 
              Unlimited Contracts
            </li>
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg>
              Trusted by Industry Professionals
            </li>
            <li className="flex items-center text-[#473BF0]">
              <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#473BF0" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 0l3.25 3.25a.75.75 0 0 1-1.07 1.06L11 6.81 7.28 10.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l0 0z"/>
              </svg>
              Created by Entertainment Attorny
            </li>
          </ul>

          {/* Bottone Get Started */}
          <button className="bg-[#473BF0] text-white w-full py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
