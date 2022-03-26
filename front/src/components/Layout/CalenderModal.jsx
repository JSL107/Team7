import React, { useEffect, useState } from 'react';
import DatePicker,{ registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CalenderModal.css';
import ko from 'date-fns/locale/ko';
registerLocale("ko", ko);

const CalenderModal = (props) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    let lastDate = endDate
    let newDate = new Date();

    useEffect(() => {
        // endDate(dates);
        lastDate = endDate;
        newDate = startDate;
    }, [endDate, startDate])

    // console.log(newDate);
    // console.log(lastDate);
    
    const { open, close } = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (

                <section className='section-datepicker'>
                    <header><p className='title'>달력</p></header>

                    <main>

                        <DatePicker
                            selectsRange={true}
                            locale={ko}
                            minDate={new Date()}
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="M월 d일"
                            onChange={(date) => { 
                                setDateRange(date);
                            }}
                            monthsShown={2}
                            isClearable={true}
                            inline
                            />
                            
                    </main>


                    <footer>
                        <button className="close" onClick={close}>
                            close
                        </button>
                    </footer>


                </section>


            ) : null}
            
        </div>
    

    )
    
}

export default CalenderModal