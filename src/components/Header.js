import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function Header() {

  function openNav() {
    document.getElementById('nav-menu').classList.remove('-translate-x-full');
  }
  function closeNav() {
    document.getElementById('nav-menu').classList.add('-translate-x-full');
  }
  return (
    <header className='bg-white border-b-2 border-gray-200'>
      <div className='px-4 md:px-6 lg:px-8 mx-auto py-2 flex items-center justify-between'>
        <button id='menu-toggle' className='block md:hidden' onClick={openNav}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5H20.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M4 12H20.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M4 19H20.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
          </svg>
        </button>
        <Link to='/' className='text-gray-900 text-lg font-bold'>
          <img src={logo} alt="logo"/>
        </Link>
        <div id='nav-menu' className='fixed top-0 left-0 transition-all -translate-x-full md:translate-x-0 md:static md:flex md:items-center md:justify-center p-4 md:p-0 w-3/4 bg-white z-10 h-full md:h-fit md:w-fit'>
          <nav>
            <ul className='flex flex-col md:flex-row text-gray-700 gap-0 md:gap-4 md:justify-center md:items-center'>
              <li className='py-2 md:py-0'>
                <Link to='/collections/frontpage' className='block hover:text-gray-900 font-medium md:border-none md:p-0'>Collection Page</Link>
              </li>
              <li className='py-2 md:py-0'>
                <Link to='/cart' className='block hover:text-gray-900 font-medium md:border-none md:p-0'>Cart Page</Link>
              </li>
            </ul>
          </nav>
          <button onClick={closeNav} className='p-2 md:hidden absolute top-4 right-4 transition-all'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.375 14.375L5.625 5.625" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className='flex items-center'>
          <Link to='/cart' className='text-gray-900 hover:text-gray-700 md:ml-4'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.875 17.7083C7.22018 17.7083 7.5 17.4285 7.5 17.0833C7.5 16.7382 7.22018 16.4583 6.875 16.4583C6.52982 16.4583 6.25 16.7382 6.25 17.0833C6.25 17.4285 6.52982 17.7083 6.875 17.7083Z'
                fill='currentColor' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path
                d='M15.625 17.7083C15.9702 17.7083 16.25 17.4285 16.25 17.0833C16.25 16.7382 15.9702 16.4583 15.625 16.4583C15.2798 16.4583 15 16.7382 15 17.0833C15 17.4285 15.2798 17.7083 15.625 17.7083Z'
                fill='currentColor' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M1.875 3.125H4.375L6.25 14.5833H16.25' stroke='currentColor' strokeWidth='2' strokeLinecap='round'
                strokeLinejoin='round' />
              <path
                d='M6.25 11.25H15.9937C16.066 11.2501 16.1361 11.225 16.192 11.1793C16.2479 11.1335 16.2862 11.0697 16.3004 10.9988L17.4254 5.37383C17.4345 5.32847 17.4334 5.28166 17.4222 5.23678C17.4109 5.19191 17.3899 5.15008 17.3606 5.11431C17.3312 5.07855 17.2943 5.04974 17.2525 5.02997C17.2107 5.0102 17.165 4.99997 17.1187 5H5'
                stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;