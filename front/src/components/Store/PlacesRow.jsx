import React, { useContext } from 'react';
import './PlacesRow.css'

const PlacesRow = (props) => {
    //const placeContext = useContext(PlaceContext);

  return (
    <div className='rowContainer'>
        <div className='rowDesc'>
            <h1>Recommand Places to stay</h1>
        </div>
        
        <div className='rowContent'>
            <div className='styleText'>
                <div className='placeName'><h1>{props.name}name</h1></div>
                <div className='placeDesc'>{props.description}desc</div>
            </div>
            <a href="../Layout/Place">
                <img className='placesRow' src="https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_960_720.jpg"/>
            </a>

            <a href="../Layout/Place">
                <img className='placesRow' src="https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_960_720.jpg"/>
            </a>
            
            {/*<img className='placesRow' src="https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_960_720.jpg"/>*/}
          

        </div>

    </div>
  )
}

export default PlacesRow