
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Product from './Product'
import Footer from './Footer'

function App() {

  return (
    <>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </>
  )
}

export default App
