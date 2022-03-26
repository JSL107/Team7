import React from 'react'
import { useParams} from 'react-router-dom';
import LandingPage from './LandingPage';
import './Place.css';

const Place = () => {
  const { id } = useParams();

  return (
    <div className='placeContainer'>
      <h2> {id}지역 </h2>
      <LandingPage/>
    </div>
  )
}

export default Place