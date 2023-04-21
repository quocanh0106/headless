import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="pt-8 lg:px-8 lg:pt-18 lg:pb-20 mt-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-4.5 bg-black">
      <div className="px-4 lg:px-0 pb-4.5 lg:!py-0 w-full border-b border-b-grey-700 lg:border-0 order-2">
        <h5 className="text-base leading-8 font-semibold uppercase mb-0 flex justify-between items-center text-white">Customer Service</h5>
        <ul className="lg:!block mt-2 !list-none !list-outside">
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Returns &amp; Exchanges</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Shipping Information</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">FAQs</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Terms &amp; Conditions</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Promotional Terms &amp; Conditions</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Sizing Information</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Privacy Policy</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Contact Us</Link></li>
        </ul>
      </div>
      <div className="px-4 lg:px-0 pb-4.5 lg:!py-0 w-full lg:max-w-footer-1/5 border-b border-b-grey-700 lg:border-0 order-3">
        <h5 className="text-base leading-8 font-semibold uppercase mb-0 flex justify-between items-center text-white">About Everlast</h5>
        <ul className="lg:!block mt-2 !list-none !list-outside">
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Promotional Terms &amp; Conditions</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Sizing Information</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Privacy Policy</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Contact Us</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Returns &amp; Exchanges</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Shipping Information</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">FAQs</Link></li>
          <li className="mb-2.5 lg:last:mb-0 text-sm"><Link to="/" className="text-white no-underline hover:text-white focus:text-white hover:underline focus:underline ">Terms &amp; Conditions</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;