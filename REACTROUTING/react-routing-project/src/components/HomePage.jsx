import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/About")
    }
  return (
    
    <div>
     Home Page
    <button onClick={handleClick}>Move to About Page</button>
    </div>
  )
}

export default HomePage