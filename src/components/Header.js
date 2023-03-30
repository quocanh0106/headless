import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex gap-8 justify-center mb-20 p-4 bg-[#1A1E4A] font-semibold text-white capitalize items-center'>
      <ul className='flex gap-8 justify-center'>
        <li><Link to="/cart">Cart Page</Link></li>
        <li><Link to="/collections/frontpage">Collection Page</Link></li>
      </ul>
    </div>
  );
}

export default Header;