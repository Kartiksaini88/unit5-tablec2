import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AddStudent } from '../components/AddStudent'
import { ShowStudents } from '../components/ShowStudents'

function App() {
  const [count, setCount] = useState(true)

  return (
    <div className="App">
        <button className='btn' onClick={()=>{
        setCount(!count)
      }}>{count?"ADD NEW STUDENT DATA":"GO TO THE STUDENT DATA"}</button>
      {count ? <ShowStudents/>:<AddStudent/>}
  
    
    </div>
  )
}

export default App
