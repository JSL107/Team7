import React , { useContext, useState} from "react";

const Accom = (props) => {
  return (
    <div>
        <h3>{props.accommodationName}</h3>
        <div className="description">{props.address}</div>
        <div className="price">☎{props.phoneNumber}</div>
    </div>
  )
}

export default Accom