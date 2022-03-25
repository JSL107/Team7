import React, { useState } from 'react'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import image from '../Navigation/images/homelogo.png';
import DatePicker from 'react-datepicker';
import Calender from './Calender';

const Nav = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(props);
  return (
    <div className='navicontainer'>
      <a href='/'>
        <img className="storeTitle"
          //src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          src={image} alt="Seven stay title" />
      </a>

      {/* 네비게이션 예약 부분*/}
      <div className='naviCenter'>
        <div className='naviContent'>
          <div className='naviLocation'>위치</div>
          <input className="naviInput" placeholder='어디로 여행가세요?' />
        </div>

        <div className="naviLine" />

        <div className='naviContent'>
          <div className='naviCheckin'>체크인</div>
          <div className="naviDate"><Calender /></div>
        </div>


        <div className="naviLine" />

        <div className='naviContent'>
        <div className='naviCheckout'>체크아웃</div>
        <div className="naviDate"><Calender /></div>
        </div>

        <div className="naviLine" />

        <div className='naviContent' id="label4">
          <div className='naviGuest'>인원</div>
          <div className="naviAddGuest">게스트 추가</div>
        </div>

        <div className='naviSearch'>
          <SearchIcon />
        </div>
      </div>



      {/* 네비게이션 로그인 부분*/}
      <div className='naviRight'>
        <div className='naviLang'>
          <LanguageIcon />
        </div>
        <button type='button' className='naviRb'>
          <div className='deha'>
            <DehazeIcon />
          </div>
          <div className='account'>
            <AccountCircleIcon />
            {/* <img src='https://a0.muscache.com/defaults/user_pic-50x50.png'/> */}
          </div>
        </button>


      </div>






    </div>
  )
}

export default Nav