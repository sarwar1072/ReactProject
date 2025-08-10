import React from 'react'

const SingleCart = ({singleCart}) => {
    const{name,age,email}=singleCart;
  return (
    <div>
        {name}
  </div>
  )
}

export default SingleCart