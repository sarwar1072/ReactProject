import React, { useContext } from 'react'
import Lastnav from './Lastnav'
import { Context } from './Contexts/Context'

const Innernav = () => {

  const[a,setA]= useContext(Context);

  return (
    <div>
       <Lastnav></Lastnav>
       <h4>Inner Navbar-{a}</h4>
    </div>
  )
}

export default Innernav