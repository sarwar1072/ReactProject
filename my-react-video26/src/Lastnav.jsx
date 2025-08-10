import React, { useContext } from 'react'
import { Context } from './Contexts/Context'

const Lastnav = () => {
    const [a,setA]=useContext(Context);

  return (
    <div>Lastnav -{a}</div>
  )
}

export default Lastnav