import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import SkeletonLoader from '../Components/SkeletonLoader';

const Apps = () => {
  const {apps,loading} = useApps();
   const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term
    ? apps.filter(a =>
        a.title.toLocaleLowerCase().includes(term)
      )
    : apps

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col justify-center items-center ' ><h1 className='text-5xl font-bold mb-5'>Our All Applications</h1><p className='text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p></div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          All Products{' '}
          <span className='text-sm text-gray-500'>
            ({searchedApps.length}) Products Found.
          </span>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Products'
          />
        </label>
      </div>
      {loading ? (
        <SkeletonLoader count={20} />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10  px-4'>
          {searchedApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;