import React, { useEffect, useState } from 'react'
import Product from './Product'
import './Products.css'

const Products = ({addTocart}) => {
    const [products,setProducts]= useState([]);

    useEffect(()=> {
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

  return (
    <div className='AppContainer'>
        {
            products.map(product=> <Product 
                  key={product.id} 
                  product={product}
                  addTocart={addTocart}>
            </Product>)
        }
    </div>
  )
}

export default Products