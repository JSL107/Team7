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


  const [counterPeople, setCounterPeople] = useState(0);
  const [counterChild, setCounterChild] = useState(0);
  const [counterBaby, setCounterBaby] = useState(0);
  const [counterAnimal, setCounterAnimal] = useState(0);

  const totalGuest = counterPeople + counterChild + counterBaby + counterAnimal;
  //console.log({counterPeople});
  console.log(totalGuest);

  return (
    <div>
          <div className='naviGuest' onClick={openModal}>인원</div>
          <div className="naviAddGuest" onClick={openModal}>
            {totalGuest ? `게스트 ${totalGuest}명` : "게스트 추가"}
          </div>
          <GuestContent open={modalOpen} close={closeModal}></GuestContent>
    </div>
  )

}

export default Guest