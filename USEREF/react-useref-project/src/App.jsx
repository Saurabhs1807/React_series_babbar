
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
//  const [count, setCount]= useState(0)
//  let val =useRef(0);
//  let btnref=useRef();

//  function handleIncrement(){
//   val.current=val.current+1;
//   console.log("value of val : " ,val.current);
  
//   setCount(count+1);
//  }

//  function handleChangeColor(){
//   btnref.current.style.backgroundColor ="red"
//  }

//  useEffect(() => {
//  console.log('Mai firse render hogya hu');
 
//  })
const [time , setTime]=useState(0)
 let timeref=useRef(null);

function handleStart(){
 timeref.current=setInterval(()=> {
  setTime(time=>time+1)} ,1000)
}

function handleStop(){
  clearInterval(timeref.current);
}

function handleReset(){
  handleStop();
  setTime(0);
   
}
  return (
   <div>
    <h1>StopWatch:{time} sec</h1>
    <button onClick={handleStart}>Start</button>
    <br /><br />

    <button onClick={handleStop}>Stop</button>
    <br /><br />

    <button onClick={handleReset}>Reset</button>
     {/* <button  ref={btnref} onClick={handleIncrement}>
     Increment</button>
     <div>

      <br />
      <br />

      <button onClick={handleChangeColor}>
        Change color of first button
        </button>
        <br />

      Count : {count}
     </div> */}
   </div>
  )
}

export default App
