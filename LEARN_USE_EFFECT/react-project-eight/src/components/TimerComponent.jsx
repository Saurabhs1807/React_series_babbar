import React from 'react'
import { useState,useEffect } from 'react'

const TimerComponent = () => {
  const [seconds, setSeconds]=useState(0);
  
  useEffect(() => {
    const intervalId=setInterval(() =>{
    console.log("Timer Started");
    setSeconds(prevSecond=>prevSecond+1)
    },1000)
    
    return () => {
     clearInterval(intervalId)
    }
  }, []);
  //it will run on first render
  
  return (
    <div>
       <h1> Seconds:{seconds}</h1>
    </div>
  )
}

export default TimerComponent