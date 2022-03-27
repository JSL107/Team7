import React, { useState, useEffect } from 'react';
import CalenderModal from '../Layout/CalenderModal';
import './Calender.css'

const Calender = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dates, setDate] = useState("날짜 선택");

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  let setTransDate = (dates) => {
    // console.log(dates);
    setDate(dates.toLocaleDateString());
  };


  console.log(dates);
  // useEffect(() => {
  //   firstDate = setDate;
  
  //   return () => {
  //     lastDate = setDate;
  //   }
  // }, [setDate])
  // console.log(setTransDate);

  return (

    <div className="calender">

      <div className="datePicker" id="in">
        <div className='naviCheckin' onClick={openModal}>체크인</div>
        <CalenderModal open={modalOpen} close={closeModal} dates={dates} dateData={setTransDate}/>
        <div type="text" className='datePickerText' onClick={openModal}> {setDate}</div>
      </div>

      <div className="naviLine" />

      <div className="datePicker" id="out">
        <div className='naviCheckout' onClick={openModal}>체크아웃</div>
        <CalenderModal open={modalOpen} close={closeModal} dates={dates} dateData={setTransDate}/>
        <div className='datePickerText' onClick={openModal}> 날짜선택</div>
        <div className="naviDate">
        </div>
      </div>

    </div>

  )

}

export default Calender
