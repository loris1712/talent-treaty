// src/components/Footer.js
const Footer = () => {
  return (
    <footer>
      {/* Top section of the footer */}
      <div className="bg-[#473BF0] text-white pt-16 pb-4 pl-16 pr-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <p className="text-[12px] text-[#828D91]">MENU</p>
            <div className="flex mt-4">
              <a href="#" className="text-[18px]">Home</a>
              <span className="text-[#828D91] ml-2 mr-2">/</span>
              <a href="#" className="text-[18px]">About Us</a>
              <span className="text-[#828D91] ml-2 mr-2">/</span>
              <a href="#" className="text-[18px]">Services</a>
            </div>
            <div className="flex">
              <a href="#" className="text-[18px]">Blog</a>
              <span className="text-[#828D91] ml-2 mr-2">/</span>
              <a href="#" className="text-[18px]">Contact Us</a>
            </div>

            <div className="flex mt-12">
              <a href="#" className="text-[12px]">Blog</a>
              &nbsp;&nbsp;&nbsp;
              <a href="#" className="text-[12px]">Contacts</a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            
          </div>
          
          {/* Column 3 */}
          <div>
            <ul className="w-[fit-content] md:ml-auto">
              <li className="w-[fit-content] text-[12px]"><a href="#">Whatsapp</a></li>
              <li className="w-[fit-content] text-[12px]"><a href="#">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section of the footer */}
      <div className="bg-[#080039] text-white py-4">
        <div className="container mx-auto md:flex md:pl-0 pl-16 justify-between items-center">
          <p className="text-[12px] text-[#cccccc]">&copy; 2024 — Copyright</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-[12px] text-[#cccccc]">Privacy</a></li>
          </ul>
          <p className="text-[12px] text-[#cccccc]">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;