import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleProduct from './SingleProduct';
import './Product.css'
const Product = () => {
  const productss=useLoaderData();
  console.log(productss);
  return (
     <div className='productCss'>
         {
             productss.map(product => <SingleProduct
                key={product.id}  
                product={product}  >
            </SingleProduct>)
         }
     </div> 
    )
}

export default Product