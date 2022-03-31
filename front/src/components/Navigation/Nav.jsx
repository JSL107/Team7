import LanguageIcon from '@mui/icons-material/Language';
import React, {useState} from 'react';
import image from '../Navigation/images/7stay.png';
import Calender from './Calender';
import Button from '../Layout/Button'
import Guest from './Guest'
import Login from './Login'
import './Nav.css';

const Nav = () => {

  const [location, setLocation]=useState();

  const [letter, setLetter] = useState(localStorage.getItem("위치"));
  
  const locationData = () => {
    let text = document.getElementById('naviInput').value;
    setLocation(localStorage.setItem("위치", text));
    setLetter(text);
  }

  localStorage.setItem("총사람수",0);
  
  return (

    <div className='navicontainer'>
      <div className="naviEmpty"/>
      <a href='/'>
        <img className="storeTitle"
          src={image} alt="Seven stay title" />
      </a>

      {/* 네비게이션 예약 부분*/}
      <div className='naviCenter'>
        <div className='naviContent' id='navidnlcl'>
          <div className='naviLocation'>위치</div>
          <input id="naviInput" className="naviInput" placeholder='어디로 여행가세요?' onKeyUp={locationData} defaultValue={letter}></input>
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
            <Button type="submit" onClick={locationData}></Button>
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