
import React from 'react';
import { NavLink, Link } from 'react-router';
import logo from '../assets/logo.png';
import gitIcon from '../assets/github-6980894_1280.png';
const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'text-violet-700' : 'text-black') } >Home</NavLink>
            </li>
            <li>
              <NavLink to='/app' className={({ isActive }) => (isActive ? 'text-violet-700' : 'text-black') } >Apps</NavLink>
            </li>
            <li>
              <NavLink to='/installation' className={({ isActive }) => (isActive ? 'text-violet-700' : 'text-black') } >Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className='flex'>
          <img className='w-9 mr-1' src={logo} alt="" />
          <Link to='/' className='text-2xl font-bold text-violet-700'>
          HERO.IO
        </Link>
        </div>
      </div>
      <div className='navbar-center '>
        <ul className='menu menu-horizontal px-1 hidden lg:flex'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-violet-700' : 'text-black') } >Home</NavLink>
          </li>
          <li>
            <NavLink to='/app' className={({ isActive }) => (isActive ? 'text-violet-700' : 'text-black')}>Apps</NavLink>
          </li>
          <li>
            <NavLink to='/installation' className={({ isActive }) => (isActive ? 'text-violet-700' : 'text-black')}>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-end '>
        
        <NavLink to='https://github.com/imransiam' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
          <img className='w-6 ' src={gitIcon} alt="" />
          Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;