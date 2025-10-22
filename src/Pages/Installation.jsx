import React from 'react';
import { useState } from 'react';

import { loadInstall, uninstall } from '../utils/localStorage'
import starIcon from '../assets/icon-ratings.png'
import downloadIcon from '../assets/icon-downloads.png'


const Installation = () => {
  const [installed, setInstalled] = useState(() => loadInstall())
  const [sortOrder, setSortOrder] = useState('none')
 console.log(loadInstall);
 
  if (!installed.length) return <p>No Data Available</p>

  const sortedItem = (() => {
    if (sortOrder === 'download-asc') {
      return [...installed].sort((a, b) => parseFloat(a.downloads) - parseFloat(b.downloads))
    } else if (sortOrder === 'download-desc') {
      return [...installed].sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads))
    } else {
      return installed
    }
  })()

  const handleUninstall = id => {
    // remove from localstorage
    uninstall(id)
    // for ui instant update
    setInstalled(prev => prev.filter(p => p.id !== id))
  }

  
  return (
     <div className='space-y-6'>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          Installed Apps {}
          <span className='text-sm text-gray-500'>
            ({sortedItem.length}) App Found.
          </span>
        </h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by Downloads</option>
            <option value='download-asc'>Low-&gt;High</option>
            <option value='download-desc'>High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className='space-y-3'>
        {sortedItem.map(p => (
          <div key={p.id} className='card card-side bg-base-100 shadow border'>
            <figure>
              <img
                className='w-40 h-28 object-cover'
                src={p.image}
                alt={p.title}
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>{p.title}</h3>
              <div className='flex gap-4'>

              <div className='flex gap-2'><img className='w-5' src={downloadIcon} alt="" /><p>{p.downloads}</p></div>
              <div className='flex gap-2'><img className='w-5' src={starIcon} alt="" /><p>{p.ratingAvg}</p></div>
              </div>
            </div>
            
            <div className='pr-4 flex items-center gap-3'>
              <div className='font-semibold'></div>
              <button
                onClick={() => handleUninstall(p.id)}
                className='btn btn-outline bg-green-500 text-white border-none'
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Installation;