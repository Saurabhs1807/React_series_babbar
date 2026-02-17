import React from 'react'
import { useState ,useEffect } from 'react';
const ResizeComponent = () => {
  const [windowWidth,setWindowWidth]=useState(window.innerWidth);
  
  useEffect(() => {
  const handleResize=()=>setWindowWidth(window.innerWidth)
  console.log("Event listener Added");
  window.addEventListener('resize',handleResize)
  
    return () => {
    console.log("Event listener Removed");
    window.removeEventListener('resize',handleResize)
    
    }
  }, []);
  //it will run on first render
  
  return (
    <div>
      <h1>Window width:{windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent