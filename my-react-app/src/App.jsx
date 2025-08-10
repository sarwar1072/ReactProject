import { useEffect,useState } from 'react'
import './App.css'
import AllUserData from './AllUserData';

function App() {
   
   const [allData,setAllData]=useState([]);
   useEffect(() => {
          fetch('FakeData.json')
                .then(res => res.json())
                .then(data=> setAllData(data))
     },[])
  
  return (
    <div className='UserContainer'>    
      <h5>length: {allData.length}</h5>
     {
      allData.map(singleData=> 
               <AllUserData singleData={singleData}></AllUserData>)
     }

    </div>
  )
}

export default App
