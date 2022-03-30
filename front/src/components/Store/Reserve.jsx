import React, { useEffect, useState } from 'react';
import Accom from './Accom';

const ACCOM = [
    {
        id: "dum1",
        city: "jeju",
        accommodationName: "효리네민박", 
        address: "제주시 어쩌구 저쩌구",
        phoneNumber: "000-000-0000" ,
    }

];

const BASE_URL = 'http://localhost:8090/accommodation/get';

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
            accommodationName: responseData[key].accommodationName,
            address: responseData[key].address,
            phoneNumber: responseData[key].phoneNumber,
            });
        }

        setLists(listsData);
        }

        fetchAccoms().catch(error => {
        })
    }, []);

    const accomsList = lists.map((list) => (
        <Accom
          key={list.id}
          id={list.id}
          city={list.city}
          accommodationName={list.accommodationName}
          address={list.address}
          phoneNumber={list.phoneNumber}
        />
      ));

  return (

    <div>
        {accomsList}
    </div>

  )
}

export default List