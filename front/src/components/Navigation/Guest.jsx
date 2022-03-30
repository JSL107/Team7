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
    // localStorage.clear();
  };

  const [count, setCount] = useState("게스트 추가");

  const countPeople = (peoples) => {
    localStorage.setItem('총사람수', peoples);
    setCount(count);
  }

  return (
    <div>
          <div className='naviGuest' onClick={openModal} >인원</div>
          <div id="guestCount" className="naviAddGuest" onClick={openModal}>
            {localStorage.getItem('총사람수') ?? "게스트 추가"}
          </div>
          <GuestContent open={modalOpen} close={closeModal} people={countPeople}></GuestContent>
    </div>
  )

}

export default Guest