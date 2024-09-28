// src/components/Footer.js
const Footer = () => {
  return (
    <footer>
      {/* Top section of the footer */}
      <div className="bg-[#473BF0] text-white py-8 px-8">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">

          {/* Logo */}
          <div className="mb-6 md:mb-0 flex">
            <a href="/" className="text-white text-2xl font-bold ml-auto mr-auto md:ml-0 md:mr-0">
            <svg width="150px" height="48" viewBox="0 0 291 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_103_2656)">
<path d="M30.903 8.76855H3C1.34315 8.76855 0 10.1117 0 11.7686V39.7686C0 41.4254 1.34314 42.7686 3 42.7686H30.903C32.5599 42.7686 33.903 41.4254 33.903 39.7686V11.7686C33.903 10.1117 32.5599 8.76855 30.903 8.76855Z" fill="white"></path>
<path d="M27.0211 23.8779H15.1551C15.0413 23.7896 14.9607 23.6549 14.9607 23.5017V14.9279C14.9607 14.6585 14.7378 14.4355 14.458 14.4355H11.8543C11.5792 14.4355 11.3516 14.6538 11.3516 14.9279V23.497C11.3516 23.7664 11.1287 23.9893 10.8489 23.9893H6.97891C6.70384 23.9893 6.4762 24.2076 6.4762 24.4817V26.3627C6.4762 26.6321 6.6991 26.855 6.97891 26.855H18.8449C18.9587 26.9433 19.0393 27.0779 19.0393 27.2312V35.8004C19.0393 36.0698 19.2622 36.2927 19.542 36.2927H22.1457C22.4208 36.2927 22.6484 36.0744 22.6484 35.8004V27.2312C22.6484 26.9618 22.8713 26.7389 23.1511 26.7389H27.0211C27.2962 26.7389 27.5238 26.5206 27.5238 26.2466V24.3655C27.5238 24.0962 27.3009 23.8732 27.0211 23.8732V23.8779Z" fill="#473bf0"></path>
</g>
<path d="M290.678 17.9124L278.078 47.5404H271.454L276.062 37.3163L267.89 17.9124H274.766L279.41 30.4764L284.018 17.9124H290.678Z" fill="white"></path>
<path d="M266.729 32.7804V38.0004H263.597C261.365 38.0004 259.625 37.4604 258.377 36.3804C257.129 35.2764 256.505 33.4884 256.505 31.0164V23.0244H254.057V17.9124H256.505V13.0164H262.661V17.9124H266.693V23.0244H262.661V31.0884C262.661 31.6884 262.805 32.1204 263.093 32.3844C263.381 32.6484 263.861 32.7804 264.533 32.7804H266.729Z" fill="white"></path>
<path d="M229.875 27.9204C229.875 25.8564 230.259 24.0444 231.027 22.4844C231.819 20.9244 232.887 19.7244 234.231 18.8844C235.575 18.0444 237.075 17.6244 238.731 17.6244C240.147 17.6244 241.383 17.9124 242.439 18.4883C243.519 19.0644 244.347 19.8204 244.923 20.7564V17.9124H251.079V38.0004H244.923V35.1564C244.323 36.0924 243.483 36.8484 242.403 37.4244C241.347 38.0004 240.111 38.2883 238.695 38.2883C237.063 38.2883 235.575 37.8684 234.231 37.0284C232.887 36.1644 231.819 34.9524 231.027 33.3924C230.259 31.8084 229.875 29.9844 229.875 27.9204ZM244.923 27.9564C244.923 26.4204 244.491 25.2084 243.627 24.3204C242.787 23.4324 241.755 22.9884 240.531 22.9884C239.307 22.9884 238.263 23.4324 237.399 24.3204C236.559 25.1844 236.139 26.3844 236.139 27.9204C236.139 29.4564 236.559 30.6803 237.399 31.5924C238.263 32.4804 239.307 32.9244 240.531 32.9244C241.755 32.9244 242.787 32.4804 243.627 31.5924C244.491 30.7043 244.923 29.4924 244.923 27.9564Z" fill="white"></path>
<path d="M227.852 27.6324C227.852 28.2084 227.816 28.8084 227.744 29.4324H213.812C213.908 30.6804 214.304 31.6404 215 32.3124C215.72 32.9604 216.596 33.2844 217.628 33.2844C219.164 33.2844 220.232 32.6364 220.832 31.3404H227.384C227.048 32.6604 226.436 33.8484 225.548 34.9044C224.684 35.9604 223.592 36.7884 222.272 37.3884C220.952 37.9884 219.476 38.2883 217.844 38.2883C215.876 38.2883 214.124 37.8684 212.588 37.0284C211.052 36.1884 209.852 34.9884 208.988 33.4284C208.124 31.8684 207.692 30.0444 207.692 27.9564C207.692 25.8684 208.112 24.0444 208.952 22.4844C209.816 20.9244 211.016 19.7244 212.552 18.8844C214.088 18.0444 215.852 17.6244 217.844 17.6244C219.788 17.6244 221.516 18.0324 223.028 18.8484C224.54 19.6644 225.716 20.8284 226.556 22.3404C227.42 23.8524 227.852 25.6164 227.852 27.6324ZM221.552 26.0124C221.552 24.9564 221.192 24.1164 220.472 23.4924C219.752 22.8684 218.852 22.5564 217.772 22.5564C216.74 22.5564 215.864 22.8564 215.144 23.4564C214.448 24.0564 214.016 24.9084 213.848 26.0124H221.552Z" fill="white"></path>
<path d="M199.673 21.2604C200.393 20.1564 201.293 19.2924 202.373 18.6684C203.453 18.0204 204.653 17.6964 205.973 17.6964V24.2124H204.281C202.745 24.2124 201.593 24.5484 200.825 25.2204C200.057 25.8684 199.673 27.0204 199.673 28.6764V38.0004H193.517V17.9124H199.673V21.2604Z" fill="white"></path>
<path d="M190.428 12.7284V17.6604H183.732V38.0004H177.576V17.6604H170.88V12.7284H190.428Z" fill="white"></path>
<path d="M161.19 32.7804V38.0004H158.058C155.826 38.0004 154.086 37.4604 152.838 36.3804C151.59 35.2764 150.966 33.4884 150.966 31.0164V23.0244H148.518V17.9124H150.966V13.0164H157.122V17.9124H161.154V23.0244H157.122V31.0884C157.122 31.6884 157.266 32.1204 157.554 32.3844C157.842 32.6484 158.322 32.7804 158.994 32.7804H161.19Z" fill="white"></path>
<path d="M137.976 17.6964C140.328 17.6964 142.2 18.4644 143.592 20.0004C145.008 21.5124 145.716 23.6004 145.716 26.2644V38.0004H139.596V27.0924C139.596 25.7484 139.248 24.7044 138.552 23.9604C137.856 23.2164 136.92 22.8443 135.744 22.8443C134.568 22.8443 133.632 23.2164 132.936 23.9604C132.24 24.7044 131.892 25.7484 131.892 27.0924V38.0004H125.736V17.9124H131.892V20.5764C132.516 19.6884 133.356 18.9924 134.412 18.4883C135.468 17.9604 136.656 17.6964 137.976 17.6964Z" fill="white"></path>
<path d="M122.488 27.6324C122.488 28.2084 122.452 28.8084 122.38 29.4324H108.448C108.544 30.6804 108.94 31.6404 109.636 32.3124C110.356 32.9604 111.232 33.2844 112.264 33.2844C113.8 33.2844 114.868 32.6364 115.468 31.3404H122.02C121.684 32.6604 121.072 33.8484 120.184 34.9044C119.32 35.9604 118.228 36.7884 116.908 37.3884C115.588 37.9884 114.112 38.2883 112.48 38.2883C110.512 38.2883 108.76 37.8684 107.224 37.0284C105.688 36.1884 104.488 34.9884 103.624 33.4284C102.76 31.8684 102.328 30.0444 102.328 27.9564C102.328 25.8684 102.748 24.0444 103.588 22.4844C104.452 20.9244 105.652 19.7244 107.188 18.8844C108.724 18.0444 110.488 17.6244 112.48 17.6244C114.424 17.6244 116.152 18.0324 117.664 18.8484C119.176 19.6644 120.352 20.8284 121.192 22.3404C122.056 23.8524 122.488 25.6164 122.488 27.6324ZM116.188 26.0124C116.188 24.9564 115.828 24.1164 115.108 23.4924C114.388 22.8684 113.488 22.5564 112.408 22.5564C111.376 22.5564 110.5 22.8564 109.78 23.4564C109.084 24.0564 108.652 24.9084 108.484 26.0124H116.188Z" fill="white"></path>
<path d="M99.0911 11.3604V38.0004H92.9351V11.3604H99.0911Z" fill="white"></path>
<path d="M67.2775 27.9204C67.2775 25.8564 67.6615 24.0444 68.4295 22.4844C69.2215 20.9244 70.2895 19.7244 71.6335 18.8844C72.9775 18.0444 74.4775 17.6244 76.1335 17.6244C77.5495 17.6244 78.7855 17.9124 79.8415 18.4883C80.9215 19.0644 81.7495 19.8204 82.3255 20.7564V17.9124H88.4815V38.0004H82.3255V35.1564C81.7255 36.0924 80.8855 36.8484 79.8055 37.4244C78.7495 38.0004 77.5135 38.2883 76.0975 38.2883C74.4655 38.2883 72.9775 37.8684 71.6335 37.0284C70.2895 36.1644 69.2215 34.9524 68.4295 33.3924C67.6615 31.8084 67.2775 29.9844 67.2775 27.9204ZM82.3255 27.9564C82.3255 26.4204 81.8935 25.2084 81.0295 24.3204C80.1895 23.4324 79.1575 22.9884 77.9335 22.9884C76.7095 22.9884 75.6655 23.4324 74.8015 24.3204C73.9615 25.1844 73.5415 26.3844 73.5415 27.9204C73.5415 29.4564 73.9615 30.6803 74.8015 31.5924C75.6655 32.4804 76.7095 32.9244 77.9335 32.9244C79.1575 32.9244 80.1895 32.4804 81.0295 31.5924C81.8935 30.7043 82.3255 29.4924 82.3255 27.9564Z" fill="white"></path>
<path d="M65.412 12.7284V17.6604H58.716V38.0004H52.56V17.6604H45.864V12.7284H65.412Z" fill="white"></path>
<defs>
<clipPath id="clip0_103_2656">
<rect width="252" height="42" fill="white" transform="translate(0 0.768555)"></rect>
</clipPath>
</defs>
</svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex m-auto md:m-auto md:ml-12 md:mt-0 md:space-x-8 mb-6 md:mb-0 md:text-left text-center">
            <a href="#" className="text-white text-[14px] mb-4 md:mb-0 md:mx-0 mx-4 font-semibold">Home</a>
            <a href="#" className="text-white text-[14px] mb-4 md:mb-0 md:mx-0 mx-4 font-semibold">Agreements</a>
            <a href="#" className="text-white text-[14px] md:mx-0 mx-4 font-semibold">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="#" className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff" width="24px" height="24px"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></a>
            <a href="#" className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff" width="24px" height="24px"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
            <a href="#" className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" width="24px" height="24px"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
