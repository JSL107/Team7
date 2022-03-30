import React, { useState } from 'react';

const ACCOM = [
    {
        city: localStorage.getItem("위치"),
        checkIn: localStorage.getItem("체크인날짜"), 
        checkOut: localStorage.getItem("체크아웃날짜"),
        people: localStorage.getItem("총사람수") ,
    },

];

const BASE_URL = 'http://localhost:8090/accommodation';

const List = () => {
    const [lists, setLists] = useState(ACCOM);
    
    const reserveHandler = async () => {
      await fetch(BASE_URL, 
        {
          method: 'POST',
          headers: {
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

    <div>
      <button onClick={reserveHandler}>예약하기</button>
    </div>

  )
}

export default List