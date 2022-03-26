import React, { useState } from 'react';
import CalenderModal from '../Layout/CalenderModal';
import './Calender.css'
import SendDateValue from  '../Layout/CalenderModal'



const Calender = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (

    <div className="calender">

      <div className="datePicker" id="in">
        <div className='naviCheckin' onClick={openModal}>체크인</div>
        <div className='datePickerText' onClick={openModal}> 날짜선택</div>
        <CalenderModal open={modalOpen} close={closeModal}/>
        <SendDateValue/>
      </div>

      <div className="naviLine" />

      <div className="datePicker" id="out">
        <div className='naviCheckout' onClick={openModal}>체크아웃</div>
        <div className='datePickerText' onClick={openModal}> 날짜선택</div>
        <div className="naviDate">
        <CalenderModal open={modalOpen} close={closeModal}/>      
        </div>
      </div>

    </div>

  )

}
export default Calender