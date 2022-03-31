import React, { useState, useEffect} from 'react';
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
    const [location, setLocation] = useState(localStorage.getItem("위치"));

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

        localStorage.clear();
    }

  return (

      <div>
        <List click={reserveHandler} />
      </div>

  )
}

export default Reserve