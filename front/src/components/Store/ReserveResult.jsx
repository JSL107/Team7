import React from "react";

const ReserveResult = (props) => {
  return (
    <div>
        <h3>{props.city}</h3>
        <div className="description">{props.checkIn} - {props.checkOut}</div>
        <div className="price">{props.people}</div>
          위 조건에 맞는 숙소 List
        <div>
        findByCity해서 {props.city}의 숙소list
        </div>
    </div>
  )
}

export default ReserveResult