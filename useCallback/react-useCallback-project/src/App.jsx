
import { useState ,useCallback } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
 const [count ,setCount] = useState(0)

 const handleIncrement =useCallback(
   () => {
  setCount(count+1);
   },
   [count]
 );
 
  return (
  <div>
    <div>
    Count:{count}
    </div>
        <div>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <div>
          <ChildComponent 
            buttonName="Click Me" 
            handleIncrement={handleIncrement}
          />
        </div>
  </div>
    
  )
}

export default App
