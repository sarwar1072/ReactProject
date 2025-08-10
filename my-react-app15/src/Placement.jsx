import React from 'react'
import SingleCart from './SingleCart';

const Placement = ({cart}) => {
    console.log(cart);
  return (
    <div>
        {
            cart.map(singleCart=> <SingleCart
             key={singleCart.id}
             singleCart={singleCart}>

            </SingleCart>)
        }
    </div>
  )
}

export default Placement