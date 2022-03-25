import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = (props) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate] = useState(null);

//   const btn = () =>  {
//     let money = hairprice*10000;
//     alert(startDate.toLocaleString()+"에 " + {header}.header +"과정을 예약하셨습니다." + "\n금액은" + money.toLocaleString('en-AU') + "원 입니다.");

//   }

console.log(props);
  return (
    <DatePicker
    minDate={new Date()}
    selected={startDate}
    dateFormat="M월 d일"
    onChange={(date) => {
        setStartDate(date);
    }}
    disabledKeyboardNavigation
    placeholderText="날짜 선택"
    // excludeDates={[props(new Date(), 1), props(new Date(), 5)]}
    />
  )

}
export default Calender