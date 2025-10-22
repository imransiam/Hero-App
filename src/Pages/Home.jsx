import React from 'react';
import playstore from '../assets/images.jpeg';
import appstore from '../assets/images (1).jpeg';
import hero from '../assets/hero.png';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import { Link } from 'react-router';
import SkeletonLoader from '../Components/SkeletonLoader';



const Home = () => {
const { apps, loading } = useApps();
const filteredApps = apps.slice(0, 8);
  
  return (
    <div className='overflow-x-hidden '>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-9xl '><span className=''>We Build </span><br /> </h1>
        <h1 className='font-bold text-9xl'><span className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>Productive</span> Apps</h1>
        <p className='text-gray-600 mt-7'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>
      <div className='flex justify-center gap-3 mt-5'>
        <div className='flex items-center gap-2 font-bold bg-white py-2 px-3  rounded-xl' ><img className='w-6' src={playstore} alt="" /><p>Google Play</p></div>
        <div className='flex items-center gap-2 font-bold bg-white py-2 px-3 rounded-xl'><img className='w-6' src={appstore} alt="" /><p>App Store</p></div>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <img className='max-w-full h-auto' src={hero} alt="" />
      </div>
      <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  py-20  '>
        <h1 className=' text-center text-3xl font-bold pb-7'>Trusted by Millions, Built for You</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 pb-10 text-center max-w-6xl mx-auto'>
          <p>Total Downloads <br /><span className='text-6xl font-bold'>29.6M</span><br />21% more than last month</p>
          <p>Total Reviews <br /><span className='text-6xl font-bold'>906K</span><br />46% more than last month</p>
          <p>Active Apps <br /><span className='text-6xl font-bold'>132+</span><br />31 more Will Launch</p>
        </div>
      </div>
      <div className='flex  flex-col justify-center items-center mt-10'><h1 className='font-bold text-4xl mb-3'>Trending Apps</h1><p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p></div>
     <div className=''>
       {
        loading ? (<SkeletonLoader count={8}></SkeletonLoader>) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 max-w-7xl mx-auto px-4'>
       {
        filteredApps.map(app => (<AppCard key={app.id} app={app}></AppCard>))
       }
      </div>
        )
       }
      <div className='flex justify-center items-center mt-10'><Link to='/app'><div className='btn bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] text-white '>Show All Apps</div></Link></div>
     </div>
   
    </div>
  );
};

export default Home;