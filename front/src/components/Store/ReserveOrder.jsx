import React, { useRef } from "react";
import Input from './Input'

const ReserveOrder = (props) => {
  const nameInputRef = useRef();
  const addrInputRef = useRef();
  
    const chargeHandler = event => {
      event.preventDefault();

      const enteredName = nameInputRef.current.value;
      const enteredAddress = addrInputRef.current.value;
      
      props.onOrder({
        userName: enteredName,
        address: enteredAddress,

      });
    }

  return (
    <div>ReserveOrder
      <Input  ref={nameInputRef} label="name" input={{ id: "name", type: "text" }} />
      <Input ref={addrInputRef} label="address" input={{ id: "address", type: "text" }} />
        <button type="submit" onClick={chargeHandler}>Charge</button>
    </div>
  )
}

export default ReserveOrder