import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Context } from './Contexts/Context'
import Navbar from './Navbar'
import { Context1Provider } from './Contexts/Context'

function App() {


  return (
   <div>
       <Context1Provider >
          <Navbar></Navbar>
          <button>Count-</button>
       </Context1Provider>
   </div>
  )
}

export default App
