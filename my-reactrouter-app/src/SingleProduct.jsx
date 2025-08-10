import React from 'react'
import './SingleProduct.css'
import { Link } from 'react-router-dom';
const SingleProduct = ({product}) => {
    const{category}=product;
  return (
    <div className='snpdcss'>
        <h5>Category: {category}</h5>
         <Link to={`/product/${product.id}`}>
             <button  >Click</button>
         </Link>


    </div>
  )
}

export default SingleProduct