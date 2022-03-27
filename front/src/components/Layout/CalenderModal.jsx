import React, { useState } from 'react';
import DatePicker,{ registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CalenderModal.css';
import ko from 'date-fns/locale/ko';
registerLocale("ko", ko);


const CalenderModal = (props) => {
    
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const selectedDate1 = (dates1) => {
        props.dateData(dates1);
    }
    const selectedDate2 = (dates2) => {
        props.dateData(dates2);
    }

    let [one, two] = useState(true);


    return (
        <div className={props.open ? 'openModal modal' : 'modal'}>
            {props.open ? (

                <section className='section-datepicker'>
                    <header><p className='title'>달력</p></header>

                    <main>

                        {/* 2개로 나눠서 값을 받고 [0]번 배열이 [1]번 배열보다 작을 시 값을 초기화 하기*/}

                        <DatePicker
                            selectsRange={true}
                            locale={ko}
                            minDate={new Date()}
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="M월 d일"
                            onSelect ={(date)=>{  

                                if(one===true){
                                    one = false;
                                    two(one);
                                    console.log("date1 :"+ date);
                                    return selectedDate1(date);
                                }else {
                                    one = true;
                                    two(one);
                                    console.log("date2 :"+date);
                                    return selectedDate2(date);
                                }                                             
                            }}
                            onChange={(date) => { 
                                setDateRange(date);
                            }}
                            disabledKeyboardNavigation
                            monthsShown={2}
                            isClearable={true}
                            inline
                            />
                    </main>

                    <footer>
                        <button className="close" onClick={props.close}>
                            close
                        </button>
                    </footer>


                </section>


            ) : null}
            
        </div>

)
    
}

export default CalenderModal
