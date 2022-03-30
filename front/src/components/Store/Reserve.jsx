import React, { useEffect, useState } from 'react';
import ReserveResult from './ReserveResult';

const ACCOM = [
    {
        id: "dum1",
        city: "서귀포",
        checkIn: "1110111", 
        checkOut: "12311",
        people: "2명" ,
    },

];

const BASE_URL = 'http://localhost:8090/orders/post';
// /order/post
console.log(localStorage.getItem("체크인날짜"));
console.log(localStorage.getItem("체크아웃날짜"));

const List = () => {
    const [lists, setLists] = useState(ACCOM);
    

    useEffect(() => {
        const fetchAccoms = async () => {
        const response = await fetch(BASE_URL);

        const responseData =  await response.json();

        const listsData = [];
        for (const key in responseData) {
            listsData.push({
            id: key,
            city: responseData[key].city,
            checkIn: responseData[key].checkIn,
            checkOut: responseData[key].checkOut,
            people: responseData[key].people,
            });
        }

        setLists(listsData);
        }

        fetchAccoms().catch(error => {
        })
    }, []);

    const accomsList = lists.map((list) => (
        <ReserveResult
          key={list.id}
          id={list.id}
          city={list.city}
          checkIn={list.checkIn}
          checkOut={list.checkOut}
          people={list.people}
        />
      ));

  return (

    <div>
      {localStorage.getItem("체크인")}
      {accomsList}
    </div>

  )
}

export default List