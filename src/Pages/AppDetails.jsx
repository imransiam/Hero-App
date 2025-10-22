import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import downloadIcon from '../assets/icon-downloads.png'
import starIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'
import { updateList } from '../utils/localStorage';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';
import SkeletonLoader from '../Components/SkeletonLoader';


const AppDetails = () => {
    const { id } = useParams()
  const { apps, loading } = useApps()
const [isInstalled, setIsInstalled] = useState(false)
const handleInstall = () => {
  updateList(detailedApp)
  setIsInstalled(true)
}
  const detailedApp = apps.find(p => p.id === Number(id))
  useEffect(() => {
    if (detailedApp) {
      const installedApps = JSON.parse(localStorage.getItem('install') || '[]')
      const appInstalled = installedApps.some(app => app.id === detailedApp.id)
      setIsInstalled(appInstalled)
    }
  }, [detailedApp])

  if (loading) return <SkeletonLoader count={1} />

  const { title, image, companyName,  downloads, size,reviews,ratingAvg} = detailedApp || {}
  return (
   <>
    <div className="card card-side bg-base-100 shadow-sm max-w-7xl mx-auto">
  <figure>
    <img className='w-95 h-95 object-cover p-5'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{title}</h2>
    <p className='border-b-2 border-gray-300  '>Developed by :<span className='text-violet-600 font-semibold'>{companyName}</span></p>
    <div className='grid grid-cols-3 gap-2 max-w-xl'>
      <p><img src={downloadIcon} alt="" /> <span className='font-semibold text-sm'>Downloads</span> <br /> <span className='font-bold text-2xl'>{downloads}M</span></p>
      <p><img src={starIcon} alt="" /> <span className='font-semibold text-sm'>Average Ratings</span> <br /> <span className='font-bold text-2xl'>{ratingAvg}</span></p>
      <p><img src={reviewIcon} alt="" /> <span className='font-semibold text-sm'>Total Reviews</span> <br /> <span className='font-bold text-2xl'>{reviews}</span></p>
    </div>
    <div className="card-actions justify-start mt-3">
      <button onClick={() => handleInstall()} className={`btn text-white text-lg bg-green-400 border-none font-bold ${isInstalled ? 'bg-gray-400' : 'bg-green-400'}`} disabled={isInstalled}>{isInstalled ? 'Installed' : `Install Now (${size} MB)`}</button>
    </div>
    
  </div>
</div>
<div className='max-w-7xl mx-auto bg-white p-5 m-5'>
  <h1 className='font-bold '>Ratings</h1>
  <div>
    <BarChart
    layout="vertical"
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={detailedApp.ratings}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="count" />
  <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
  </div>
</div>
   </>
  );
};

export default AppDetails;