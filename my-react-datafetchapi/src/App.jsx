import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quot from './Quot'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
       <Quot></Quot>
   </div>
  )
}

export default App
