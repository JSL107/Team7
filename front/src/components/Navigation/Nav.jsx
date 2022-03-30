import LanguageIcon from '@mui/icons-material/Language';
import React from 'react';
import image from '../Navigation/images/7stay.png';
import Calender from './Calender';
import Button from '../Layout/Button'
import Guest from './Guest'
import Login from './Login'
import './Nav.css';


const Nav = () => {
  
  //console.log(localStorage.getItem('체크인날짜'));
  //console.log(localStorage.getItem('체크아웃날짜'));
  return (

    <div className='navicontainer'>
      <a href='/'>
        <img className="storeTitle"
          src={image} alt="Seven stay title" />
      </a>

      {/* 네비게이션 예약 부분*/}
      <div className='naviCenter'>
        <div className='naviContent' id='navidnlcl'>
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
        </div>

        <div className='naviSearch'>
          {/*<a href="../Store/Result">*/}
          <a href="../Store/Reserve">
            <Button type="submit"></Button>
          </a>
        </div>

      </div>

      {/* 네비게이션 로그인 부분*/}
      <div className='naviRight'>
        <div className='naviLang'>
          <LanguageIcon />
        </div>
        <Login></Login>
      </div>

    </div>

  )

}

export default Nav