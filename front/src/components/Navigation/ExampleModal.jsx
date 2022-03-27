import React, { useState } from 'react'
import './GuestModal.css'

import ExampleContent from './ExampleContent'

const ExampleModal = (props) => {
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
    <div className={props.open ? 'openModal modal' : 'modal'}>
      {props.open ? (
        <div>
          <div className='naviGuest' onClick={openModal}>인원</div>
          <div className="naviAddGuest" onClick={openModal}>
            {totalGuest ? `게스트 ${totalGuest}명` : "게스트 추가"}
          </div>
          <ExampleContent></ExampleContent>
        </div>
      ) : null}
    </div>
  )

}

export default ExampleModal