import React, { useContext } from 'react'
import { Context } from './Contexts/Context'

const Lastnav = () => {
    const [a,setA]=useContext(Context);

  return (
    <div>
      <h4>Lastnav -{a}</h4>
    </div>
  )
}

export default Lastnav