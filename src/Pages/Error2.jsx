import React from 'react';
import appNotFound from '../assets/App-Error.png'
import { Link } from 'react-router';
const Error2 = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
      <img src={appNotFound} alt="" />
      <h1 className='font-bold text-6xl'>Oops, app not found!</h1>
      <p className='text-sm text-gray-500 mt-10'>The app you are looking for is not available.</p>
    <div className='flex justify-center items-center mt-10'><Link to='/app'><div className='btn bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] text-white '>Go back</div></Link></div>
    </div>
  );
};

export default Error2;