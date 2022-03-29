import React from 'react'
import './Reservation.css'

const Reservation = () => {
    return (
      <div>
    {/*<div className='rowContainer'>
        <div className='rowDesc'>
            <h1>Reservation</h1>
        </div>

        <div className='rowContent'>
  
          <a href="/Store/Result" className='placesBox'>
            <img className='placesRow' src="https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_960_720.jpg"/>
            <p className='placesText'>예약하기</p>
          </a>

        </div>
        
  
      </div>*/}
    
      <button className='reserveBtn'><a href="/Store/Result" >Reservation</a></button>
    </div>
    
    )
  }

export default Reservation