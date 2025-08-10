import { useState } from 'react';
import './App.css'
import Products from './Products'
import Placement from './Placement';

function App() {
  const [cart,setCart]=useState([]);
  const addTocart=(placement)=>{
      console.log("clicked",placement);
      const newPlacement=[...cart,placement];
      setCart(newPlacement);
  }

  return (
    <div >
        <Products addTocart={addTocart}></Products>
        <Placement cart={cart}></Placement>
    </div>
  )
}

export default App
