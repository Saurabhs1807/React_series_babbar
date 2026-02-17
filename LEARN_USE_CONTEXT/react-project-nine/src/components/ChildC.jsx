import React, { useContext } from 'react'
import { ThemeContext, } from '../App';

const ChildC = () => {
    const {theme , setTheme} = useContext(ThemeContext);

    function toggleTheme(){
        {theme==='light'?setTheme('dark'):setTheme('light')}
    
    }
  return (
    <div>
<button onClick={toggleTheme}> Click Me</button>
    </div>
  )
}

export default ChildC