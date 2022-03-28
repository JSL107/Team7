import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LanguageIcon from '@mui/icons-material/Language';
import React, { useState } from 'react';
import image from '../Navigation/images/7stay.png';
import Calender from './Calender';
import GuestModal from './GuestModal';
import Button from '../Layout/Button'
import Guest from './Guest'
import Login from './Login'
import './Nav.css';

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [count,setCount] = useState("게스트 추가");
  
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  

  const totalGuest = (count)=> {
    {/* {totalGuest ? `게스트 ${totalGuest}명` : "게스트 추가"} */}
    setCount(count)
  };
  console.log(count);


  return (

    <div className='navicontainer'>
      <a href='/'>
        <img className="storeTitle"
          src={image} alt="Seven stay title" />
      </a>

      {/* 네비게이션 예약 부분*/}
      <div className='naviCenter'>
        <div className='naviContent'>
          <div className='naviLocation'>위치</div>
          <input id="naviInput" className="naviInput" placeholder='어디로 여행가세요?' />
        </div>

        <div className="naviLine" />

        <div className='naviContent' id="navi2" >   
        <Calender></Calender>
        </div>
        <div className="naviLine" />

        <div className='naviContent' id="label4">
          <Guest></Guest> 
         {/*<GuestModal open={modalOpen} close={closeModal}></GuestModal>
          <div className='naviGuest' onClick={openModal}>인원</div>
          <div className="naviAddGuest" onClick={openModal}>
            {count}
          </div>*/}
        </div>

        <div className='naviSearch'>
          <Button /*location={'제주'} date={image} people={image}*/ type="submit"></Button>
        </div>
      </div>

      {/* 네비게이션 로그인 부분*/}
      <div className='naviRight'>
        <div className='naviLang'>
          <LanguageIcon />
        </div>
        <Login></Login>
        
        <button type='button' className='naviRb'>
          <div className='deha'>
            <DehazeIcon />
          </div>
          <div className='account'>
            <AccountCircleIcon />
          </div>
        </button>
      </div>

    </div>

  )

}

export default Nav