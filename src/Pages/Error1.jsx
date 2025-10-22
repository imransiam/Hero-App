import React from 'react';
import pageNotFound from '../assets/error-404.png';
import { Link } from 'react-router';
const Error1 = () => {
  return (
    <div className='w-1280px mx-auto flex flex-col justify-center items-center h-screen'>
      <img  className='  h-auto  object-cover'  src={pageNotFound} alt="" />
      <h1 className='font-bold text-6xl'>Oops, page not found!</h1>
      <p className='text-sm text-gray-500 mt-10'>The page you are looking for is not available.</p>
       <Link to='/'> <div className='btn bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] text-white mt-10 '>Go Back
      
     </div></Link>
    </div>
  );
};

export default Error1;