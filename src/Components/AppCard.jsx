import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import starIcon from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const AppCard = ({app,}) => {
  const {image, title, companyName, downloads, ratingAvg, id} = app
  return (
    <>
    <Link to= {`/app/${id}`}>
      <div className="card bg-base-100 w-full shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='h-48 overflow-hidden'>
    <img className='w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title} - {companyName}</h2>

    <div className="card-actions justify-between">
      <button className="btn "><img className='w-5' src={downloadIcon} alt="" />{downloads}M</button>
      <button className="btn "><img className='w-5' src={starIcon} alt="" />{ratingAvg}</button>
    </div>
  </div>
</div>
    </Link>
    </>
    
    
  );
};

export default AppCard;