import React, { useEffect, useState } from 'react'

const Quot = () => {
    const [quot,setQuot]=useState(null);

   
          useEffect(()=> {
                fetch('fakeData.json')
                .then(res=>res.json())
                .then(data=>setProducts(data))
          },[]);
    
          
    
  return (
    <div>Quot {quot?.content}</div>
  )
}

export default Quot

