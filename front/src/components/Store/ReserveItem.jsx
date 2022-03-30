import React from 'react'

const ReserveItem = (props) => {
    const price = `$${props.price.toFixed(2)}`

  return (
    <div>ReserveItem
        <li className="cart-item">
      <h2>{props.name}</h2>
      <div>
        <span>{price}</span>
        <span>x {props.amount}</span>
      </div>
      <div>
        <button onClick={props.onRemoveInCart}>x</button>
      </div>
    </li>
    </div>
  )
}

export default ReserveItem