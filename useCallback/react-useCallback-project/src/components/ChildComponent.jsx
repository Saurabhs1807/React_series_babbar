import React from 'react'

const ChildComponent = React.memo(
    (props) => {
    console.log("Child component go re-rendered again ");
    
  return (
    <div>
        <button onClick={props.handleIncrement}>
           {props.buttonName}
        </button>
    </div>
  )
}
);

export default ChildComponent


//React.mem0 ->wrap ->component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga
//if you are sending a function , then react.memo wont be able to save you from re-rendering