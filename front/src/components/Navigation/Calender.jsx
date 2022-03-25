import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = (props) => {
  
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // const [startDate, setStartDate] = useState(null);

  //   const btn = () =>  {
  //     let money = hairprice*10000;
  //     alert(startDate.toLocaleString()+"에 " + {header}.header +"과정을 예약하셨습니다." + "\n금액은" + money.toLocaleString('en-AU') + "원 입니다.");

  //   }
  return (
  
    /**
     * 1. 시작일수는 현재보다 과거일수 없다.
     * 2. 예약 종료 일은 현재와 예약 시작 일 보다 과거일수 없다.
     * 3. startDate와 EndDate를 분리한다.
     */
    <div>

      <DatePicker
        showWeekNumbers={true}
        selectsRange={true}
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        dateFormat="M월 d일"
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
        placeholderText="날짜 선택"
      />


    </div>



  )

}
export default Calender