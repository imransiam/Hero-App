
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='w-screen mx-auto  py-4 md:py-8 lg:py-12 flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;