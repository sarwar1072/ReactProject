import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Context } from './Contexts/Context'
import Navbar from './Navbar'


function App() {
 const [a,setA]=useState("Hellow World");
  return (
   <div>
       <Context.Provider value={[a,setA]}>
          <Navbar></Navbar>
          <button>Count-</button>
       </Context.Provider>
   </div>
  )
}

export default App
