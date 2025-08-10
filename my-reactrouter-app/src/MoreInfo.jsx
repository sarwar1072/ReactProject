import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MoreInfo = () => {
    const moreInfo=useLoaderData();
    const{category}=moreInfo;
  return (
    <div>
        <h5>Category: {category}</h5>
    </div>
  )
}

export default MoreInfo