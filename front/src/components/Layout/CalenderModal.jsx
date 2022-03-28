import React, { useState } from 'react';
import DatePicker,{ registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CalenderModal.css';
import ko from 'date-fns/locale/ko';
registerLocale("ko", ko);


const CalenderModal = (props) => {
    
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const selectedDate = (dates) => {
        props.dateData(dates);
    }


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
                                selectedDate(date);                                            
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
