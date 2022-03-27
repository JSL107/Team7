import React from 'react'
import Nav from '../Navigation/Nav';
import SearchIcon from '@mui/icons-material/Search';

const Button = (props) => {

    const {location, date, people, btnClick } = props;

      const click = () => {
      // console.log("지역 : " + location + "날짜" + date + "인원수" + people);
      console.log(location+'click');
    }

    return (     
    <div>

        <SearchIcon onClick={click} type={props.type || 'button'}>      
        {props.children}
        </SearchIcon>

    </div>
  )
}

export default Button