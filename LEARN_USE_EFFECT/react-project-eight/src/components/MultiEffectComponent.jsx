import React from 'react'
import { useState,useEffect } from 'react'
const MultiEffectComponent = () => {
  const [count , setCount]=useState(0)
  const [seconds ,setSeconds] = useState(0)
  useEffect(() => {
  console.log('Count Changed',count);
  },[count]);

  useEffect(() => {
    const intervalId=setInterval(() => {
      setSeconds(prevSeconds=>prevSeconds+1);
    },1000);
  // it will run when count will change
    return () => {
   clearInterval(intervalId);
    }
  }, []);
  //it will run only on first render
  
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <h2>Seconds:{seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent