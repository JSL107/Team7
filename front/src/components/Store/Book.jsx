import React, { useContext, useState} from "react";
import CartContext from "./CartContext";
import './Book.css'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import heart from './images/heart1.png'
import heart2 from './images/heart2.png'

const Book = (props) => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  /*const cartContext = useContext(CartContext);

  const addItemToCartHandler = amount => {
    // console.log(amount);
    cartContext.addItem({
      id: props.id,
      location: props.location,
      checkin: props.checkin,
      checkout: props.checkout,
      guest: props.guest
    })
  } */

  return (
    
  <div className="bookBook">
    <div className="borderTop"/>
    <li className="book">
      <div className="resultImages"> 
        <img className="resultImage" src="https://yaimg.yanolja.com/v5/2022/03/02/17/1280/621fa2ba34e367.82549922.jpg"/>
      </div>
      <div className="book__info">
        <div className="book__info__top">
          <h3>{props.name}</h3>
          <div className="heartButton" onClick={handleToggle}>
            {isActive ? <FavoriteBorderSharpIcon /> : <FavoriteSharpIcon />}
          </div>
        </div>
        <div className="thinLine"/>
        <div className="description">{props.location} - {props.address}</div>
        <div className="price">￦{props.price} <span className="pricebac">/ 박</span></div>
      </div>

      {/*
          <li className="book">
      <div className="book__info">
        <h3>{props.name} - <span className="author">{props.author}</span></h3>
        <div className="description">{props.description}</div>
        <div className="price">${props.price}</div>
      </div>
    </li>
      */}

    </li>
    

  </div>

  );
};

export default Book;
