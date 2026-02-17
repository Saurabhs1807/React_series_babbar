import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA';

const ThemeContext=createContext();
//step1: create context
// const UserContext=createContext();
//step2:wrap all the child inside a provider
//step3:pass value
//step4:consumer k andar jaake consume karlo
function App() {
  const [theme ,setTheme]=useState('light');
  // const [user ,setUser]=useState({name:"saurabh"});
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
<div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
      <ChildA />
      </div>
    </ThemeContext.Provider>
     {/* <UserContext.Provider value={user}>
          <ChildA />
     </UserContext.Provider> */}
    </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}