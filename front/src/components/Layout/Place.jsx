import React from 'react'
import { useParams} from 'react-router-dom';


const Place = () => {
  const { id } = useParams();
  return (
    <div>
      <h2> {id}지역 </h2>
    </div>
  )
}

export default Place