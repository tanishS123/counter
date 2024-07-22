import { useState } from 'react'
import './App.css'

function App() {
  const [counting, setCounting] = useState(0)
   
  
  const addvalue=()=>{
    setCounting(counting+1);   
  }
  const reset=()=>{
     setCounting(0);   
  }
  const decreasevalue=()=>{
    if(counting > 0){
    setCounting(counting-1);}
    counting;
  }
  return (
    <>
      <h1>First react project -- Counter </h1>
      <h2>Counter Value : {counting}</h2>
      <button onClick={addvalue}> Increase value</button>
      <button onClick={decreasevalue}> Decrease value</button>
      <button  onClick={reset}> Reset button</button>
    </>
  )
}

export default App
