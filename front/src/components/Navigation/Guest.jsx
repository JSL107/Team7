import React, { useState } from 'react'
import GuestContent from './GuestContent'
import './GuestModal.css'


const Guest = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [count, setCount] = useState("게스트 추가");

  const countPeople = (peoples) => {
    setCount(peoples+ "명") 
  }

  console.log(count);
  return (
    <div>
          <div className='naviGuest' onClick={openModal}>인원</div>
          <div id="guestCount" className="naviAddGuest" onClick={openModal}>
            {count}
          </div>
          <GuestContent open={modalOpen} close={closeModal} people={countPeople}></GuestContent>
    </div>
  )

}

export default Guest