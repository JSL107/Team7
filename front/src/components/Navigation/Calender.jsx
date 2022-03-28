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

  let [one, two] = useState(true);

  let setTransDate = (dates) => {
    
    // date1 > date2 => date2 => date1 => date2 = null
    
    if(one===true){
      one = false;
      two(one);
      date1 = dates.toLocaleDateString();
      setDate1(date1)
      
    }else {
      one = true;
      two(one);
      date2 = dates.toLocaleDateString();
      setDate2(date2)
  }     
  };

  
  return (

    <div className="calender">

      <div className="datePicker" id="in">
        <div className='naviCheckin' onClick={openModal}>체크인</div>
        <CalenderModal open={modalOpen} close={closeModal} dates={dates} dateData={setTransDate}/>
        <div type="text" className='datePickerText' onClick={openModal}> {date1}</div>
      </div>

      <div className="naviLine" />

      <div className="datePicker" id="out">
        <div className='naviCheckout' onClick={openModal}>체크아웃</div>
        <CalenderModal open={modalOpen} close={closeModal} dates={dates} dateData={setTransDate}/>
        <div className='datePickerText' onClick={openModal}> {date2}</div>
        <div className="naviDate">
        </div>
      </div>

    </div>

  )

}

export default Calender
