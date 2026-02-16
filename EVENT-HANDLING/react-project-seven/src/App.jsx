import { useState } from 'react'

import './App.css'

function App() {
  function handleClick(){
    alert("Iam Clicked");
  }

  function handleMouseOver(){
    alert("Para ke upar maouse lekar aaye ho");
  }

  function handleInputChange(e){
    console.log("value till now:",e.target.value);
    
   
  }

  function handleSubmit(e){
     e.preventDefault();
    // i am writing my custom behavior down
    alert("form submit kar du kya")
  }

  return (
    <div>
      <button onClick={()=>alert("yaha pr immidiet invoke nhi krna hai arrow function ka use krna jo isme use hua hai abhi")}>Click me</button>


      {/* <form onSubmit={handleSubmit}>
       <input type="text" onChange={handleInputChange} />
       <button type='submit'>Submit</button>
      </form> */}


      {/* <p onMouseOver={handleMouseOver}>
        I am s Software Engineer
      </p>
      <button onClick={handleClick}>
      Click me
      </button> */}
    </div>
  )
}

export default App
