import React from 'react'
import './AllUserData.css'
const AllUserData = ({singleData}) => {

         const{name,phone,website}=singleData;

  return (
    <div className='singleuserdata'>
        <h5>Name: {name}</h5>
        <h5>Phone: {phone}</h5>
        <h5>Website: {website}</h5>
    </div>
   
  )
}

export default AllUserData