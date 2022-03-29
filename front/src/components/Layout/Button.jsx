import React , { useContext, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

import OrderContext from './OrderContext'
import OrderItem from './OrderItem'


const BASE_URL = 'http://localhost:8090/api/v1/orders';

const Button = () => {

    /*const {location, date, people, btnClick } = props;*/

    const click = () => {
      const location = document.getElementById('naviInput').value;
      const dateIn = document.getElementById('datePickerText1').innerHTML;
      const dateOut = document.getElementById('datePickerText2').innerHTML;
      const guestCount = document.getElementById('guestCount').innerHTML;
        
      // console.log("지역 : " + location + "날짜" + date + "인원수" + people);
      console.log("위치 " + location +' click');
      console.log("체크인 " + dateIn + " 체크아웃 " + dateOut);
      console.log("총 인원 " + guestCount);
    }


    //-------------------연습-----------------------
    const orderContext = useContext(OrderContext);

    const orderItems = (
      <>
      {orderContext.items.map((order) => (
        <OrderItem
          key={order.userName}
          id={order.userName}
          address={order.address}
          accomodation={order.accomodation}
        />
      ))}
      </>
    );
    //------------------------------------

    return (     
    <div>

        <SearchIcon onClick={click} type={'button'}></SearchIcon>

    </div>
  )
}

export default Button