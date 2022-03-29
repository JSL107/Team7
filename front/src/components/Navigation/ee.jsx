import React , { useState, useEffect } from "react";
import './GuestModal.css'

const GuestContent = (props) => {
    const { open, close } = props;

    const [number, setNumber] = useState(0);
    const [counterPeople, setCounterPeople] = useState(0);
    const [counterChild, setCounterChild] = useState(0);
    const [counterBaby, setCounterBaby] = useState(0);
    const [counterAnimal, setCounterAnimal] = useState(0);
  
    const categories = [
       {key: "id1", id: "adult", name: "성인"},
       {key: "id2", id: "child", name: "어린이"},
       {key: "id3", id: "baby", name: "유아"},
    ];
    console.log(categories[0]); 


    const [count, setCount] = useState({
      adult: 0,
      child: 0, 
      baby: 0,
    })

    const countGuest = (e)=> {
      //console.log(e);
      e.preventDefault();
      const { name, id } = e.currentTarget.dataset;
      let countNumber = count[id];
      //console.log(countNumber);

      name === "minus" && countNumber > 0 && countNumber--;
      name === "plus" && countNumber++;;

      setCount({
        ...count,
        [id]: countNumber,
        ...((id === "child" || id === "baby") &&
        countNumber &&
          name === "plus" &&
          !count["adult"] && { adult: 1 }),
      });
    };
  
    
  /*useEffect(() => {
    const { adult, children, baby } = count;
    takeGuestNumberAction(adult, children, baby);
  }, [count]);

   useEffect(() => {
    adults === 0 &&
      children === 0 &&
      baby === 0 &&
      setCount({ adults: 0, children: 0, baby: 0 });
  }, [adults, children, baby]); */
  
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
    }
  
    const totalGuest = counterPeople + counterChild + counterBaby + counterAnimal;
    console.log(totalGuest);
  
    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {props.open ? (
          <section className='section-guest'>
            <div className='header-guest'>
              {totalGuest ? `게스트 ${totalGuest}명` : "게스트 추가"}
            </div>
          
            {categories.map((category, idx) => (
            <main>
              <div className='modalCount'>
                <p className='modalAdult'>{category.name}</p>
                <div className='modalCountNumber'>
                  <button id='decrease' name="minus" onClick={decreaseNumber}>
                     - 
                  </button>
                  <p id='numberPeople'>{counterPeople}</p>
                  <button id='increase' name="plus" onClick={increaseNumber} >
                     + 
                  </button>
                </div>
              </div>

            </main>
            ))}
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

export default GuestContent