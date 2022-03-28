import React from 'react'
import Nav from '../Navigation/Nav';
import SearchIcon from '@mui/icons-material/Search';

const Button = (props) => {

    /*const {location, date, people, btnClick } = props;*/

      const click = () => {

        const location = document.getElementById('naviInput').value;
        const dateIn = document.getElementById('datePickerText1').innerHTML;
        const dateOut = document.getElementById('datePickerText2').innerHTML;
        
      // console.log("지역 : " + location + "날짜" + date + "인원수" + people);

        console.log(location+'click');
        console.log(dateIn + dateOut);
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