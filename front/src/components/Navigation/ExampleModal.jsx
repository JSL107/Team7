import React, { useState } from 'react'
import './GuestModal.css'

const ExampleModal = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const { open, close } = props;

  // const [number, setNumber] = useState(0);
  const [counterPeople, setCounterPeople] = useState(0);
  const [counterChild, setCounterChild] = useState(0);
  const [counterBaby, setCounterBaby] = useState(0);
  const [counterAnimal, setCounterAnimal] = useState(0);

  // const categories = [
  //   {key: "id1", id: "adult", name: "성인"},
  //   {key: "id2", id: "child", name: "어린이"},
  //   {key: "id3", id: "baby", name: "유아"},
  //   {key: "id4", id: "animal", name: "반려동물"}
  // ];

  //  const [number, setNumber] = useState({
  //    adult: 0, child: 0, baby: 0, animal: 0
  //  })

  // const increaseNumber = () => {
  //   setNumber(number+1);
  // }
  
  // const decreaseNumber = () => {
  //   if(number === 0){
  //     return;  
  //   }
  //   setNumber(number-1);
  // }

  const decreaseNumber = () => { 
    if (counterPeople === 0) 
    {return;} 
    setCounterPeople(counterPeople-1);
  }

  const increaseNumber =()=>{
    setCounterPeople(counterPeople+1);
    // console.log({counterPeople});
  }


  const totalGuest = counterPeople + counterChild + counterBaby + counterAnimal;
  //console.log({counterPeople});
  console.log(totalGuest);

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <div open={modalOpen} close={closeModal}>
          <div className='naviGuest' onClick={openModal}>인원</div>
          <div className="naviAddGuest" onClick={openModal}>
            {totalGuest ? `게스트 ${totalGuest}명` : "게스트 추가"}
          </div>

          <main>
            {/* <div className='modalCount'>
              <p className='modalAdult'>성인</p>
              <div className='modalCountNumber'>
                <button id='decrease' onClick={decreaseNumber} disabled={number.value === 1}>-</button>
                <p id='number'>{number}</p>
                <button id='increase' onClick={increaseNumber}>+</button>
              </div>
            </div> */}
            
               {/* {categories.map((category) => (

            <div className='modalCount'>
              <span className='modalAdult'>{category.name}</span>
              <div className='modalCountNumber'>
                <button id='decrease' onClick={decreaseNumber }>
                   - 
                </button>
                <p id='numberPeople'>{number}</p>
                <button id='increase' onClick={increaseNumber} >
                   + 
                </button>
              </div>
            </div>

              ))} */}

          
          {/*나중에 이 부분 중복되는거 묶어서 정리하기 */}
            <div className='modalCount'>
              <p className='modalAdult'>성인</p>
              <div className='modalCountNumber'>
                <button id='decrease' onClick={ () => { if (counterPeople === 0) {return;} setCounterPeople(counterPeople-1);} }>
                   - 
                </button>
                <p id='numberPeople'>{counterPeople}</p>
                <button id='increase' onClick={increaseNumber} >
                   + 
                </button>
              </div>
            </div>

            <div className='modalCount'>
              <p className='modalAdult'>어린이</p>
              <div className='modalCountNumber'>
                <button id='decrease' onClick={ ()=>{ if (counterChild === 0) {return;} setCounterChild(counterChild-1);} } type="submit"> - </button>
                <p id='numberChild'>{counterChild}</p>
                <button id='increase' onClick={ ()=>{setCounterChild(counterChild+1);}} > + </button>
              </div>
            </div>

            
            <div className='modalCount'>
              <p className='modalAdult'>유아</p>
              <div className='modalCountNumber'>
                <button id='decrease' onClick={ ()=>{ if (counterBaby === 0) {return;} setCounterBaby(counterBaby-1);} } > - </button>
                <p id='numberBaby'>{counterBaby}</p>
                <button id='increase' onClick={ ()=>{setCounterBaby(counterBaby+1);}} > + </button>
              </div>
            </div>


            <div className='modalCount'>
              <p className='modalAdult'>반려동물</p>
              <div className='modalCountNumber'>
                <button id='decrease' onClick={ ()=>{ if (counterAnimal === 0) {return;} setCounterAnimal(counterAnimal-1);} } > - </button>
                <p id='numberAnimal'>{counterAnimal}</p>
                <button id='increase' onClick={ ()=>{setCounterAnimal(counterAnimal+1);}} > + </button>
              </div>
            </div>

          </main>

          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>

        </div>
      ) : null}
    </div>

  )

}

export default ExampleModal