import React , { useContext, useState} from "react";
import './Accom.css'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

const Accom = (props) => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="accomAccom">
      <div className="borderTop"/>
      <div onClick={props.click} className="accoms">
        <div className="accomImages"> 
          <img className="accomImage" src="https://yaimg.yanolja.com/v5/2022/03/02/17/1280/621fa2ba34e367.82549922.jpg" />
        </div>
        <div className="accom__info">
          <div className="accom__info__top">
              <h3 className="accomName">{props.accommodationName}</h3>
              <div className="heartButton" onClick={handleToggle}>
                {isActive ? <FavoriteBorderSharpIcon /> : <FavoriteSharpIcon />}
              </div>
          </div>
          <div className="thinLine"/>
          <div className="accomDescription">{props.address}</div>
          <div className="accomPhoneNumber">☎ {props.phoneNumber}</div>
          <div className="borderBottom"/>
        </div>
      </div>
    </div>
  )
}

export default Accom