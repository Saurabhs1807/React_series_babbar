import { useEffect, useState } from 'react'

import './App.css'
import TimerComponent from './components/TimerComponent'
import LoggerComponent from './components/LoggerComponent'

function App() {
// const [count, setcount]=useState(0);
// const [total, setTotal]=useState(1);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dependency list
  //variation 1:
  //thats runs on every render
  // useEffect(() => {
  //  alert("i will run on every render")
  // })
  
  //Variation 2:
  //thats run on only first render
  // useEffect(() => {
  // alert("I will run on only first render")
  // }, [])

  //variation 3:
  // that runs on fist time when render and when count  is updated
  // useEffect(() => {
  // alert("that runs every time when count is updated")
  // }, [count])

  // variation 4:
  // multiple dependies
//   useEffect(() => {
//  alert("I will run every time whwn count/total is update")
//   }, [count,total])
  
  // useEffect(() => {
  //   alert("Count is updated")
  
  //   return () => {
  //     alert("Count is unmounted")
  //   }
  // }, [count])
  
// function handleClick(){
//   setcount(count+1);
// }
//  function handleClickTotal(){
//   setTotal(total+1);
//  }
  return (
   <div>
    <LoggerComponent />
    {/* <TimerComponent /> */}
    {/* <button onClick={handleClick}>
     Update count
    </button>
    <br />
    Count is:{count}
    <br />
    <button onClick={handleClickTotal}>
      Update Total
    </button>
    <br />
    Total is:{total} */}
   </div>
  )
}

export default App
