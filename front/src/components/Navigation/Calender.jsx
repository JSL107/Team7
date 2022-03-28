import React, { useState, useEffect } from 'react';
import CalenderModal from '../Layout/CalenderModal';
import './Calender.css'

const Calender = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dates] = useState("날짜 선택");

  let [date1, setDate1] = useState("날짜 선택");
  let [date2, setDate2] = useState("날짜 선택");

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [click, setClick] = useState(true);
  
  let setTransDate = (dates) => {
    
    // date1 > date2 => date2 => date1 => date2 = null   
    // 두번째에 누르는 값이(date2) 첫번째 누르는 값(date1)보다 더 과거를 찍게 되면 null(날짜 선택)을 출력한다.
    let dateNum1 = dates;
    let dateNum2 = dates;
    if (click === true && dateNum1) {
      setClick(false);
      dateNum2 = dateNum1;
      date1 = dateNum1.toLocaleDateString();
      setDate1(date1);

    } 
    else if (click === false) {
      setClick(true);
      date2 = dates.toLocaleDateString();
      setDate2(date2)

    }else {
      setDate1("날짜 선택");
    }
  };


  return (

    <div className="calender">

      <div className="datePicker" id="in">
        <div className='naviCheckin' onClick={openModal}>체크인</div>
        <CalenderModal open={modalOpen} close={closeModal} dates={dates} dateData={setTransDate} />
        <div type="text" className='datePickerText' onClick={openModal}> {date1}</div>
      </div>

      <div className="naviLine" />

      <div className="datePicker" id="out">
        <div className='naviCheckout' onClick={openModal}>체크아웃</div>
        <CalenderModal open={modalOpen} close={closeModal} dates={dates} dateData={setTransDate} />
        <div className='datePickerText' onClick={openModal}> {date2}</div>
        <div className="naviDate">
        </div>
      </div>

    </div>

  )

}

export default Calender
