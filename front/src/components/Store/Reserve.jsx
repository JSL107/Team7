import React, { useState, useEffect} from 'react';
import Accom from './Accom';
import List from './List';

const ACCOM = [
    {
        city: localStorage.getItem("위치"),
        checkIn: localStorage.getItem("체크인날짜"), 
        checkOut: localStorage.getItem("체크아웃날짜"),
        people: localStorage.getItem("총사람수") ,
    },

];

const BASE_URL = 'http://localhost:8090/accommodation';

const Reserve = () => {
    const [lists, setLists] = useState(ACCOM);
    
    const reserveHandler = async () => {
      await fetch(BASE_URL, 
        {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },

          body: JSON.stringify({
            city: localStorage.getItem("위치"), 
            checkIn: localStorage.getItem("체크인날짜"),
            checkOut: localStorage.getItem("체크아웃날짜"),
            people: localStorage.getItem("총사람수"),
          })

        });
        setLists();
    }
    console.log(lists);

  return (
    <>
      <div>
        <input type="text" placeholder="search" value={localStorage.getItem("위치")} />
        <button className="ReserveBtn" onClick={reserveHandler}>예약하기</button>
      </div>
      <div className="accomsList">
        <List />
      </div>
    </>
  )
}

export default Reserve