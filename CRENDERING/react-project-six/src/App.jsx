import { useState } from 'react'

import './App.css'
import LogOutBtn from './Components/LogOutBtn'
import LoginBtn from './Components/LoginBtn'

function App() {
  const [isLoggedIn , setLoggedIn] = useState(true);


  if(!isLoggedIn){
     return(
      <LoginBtn />
     )
  }


return(
  <div>
    <h1>Welcome to My web development Course</h1>
    {isLoggedIn && <LogOutBtn /> }
  </div>
)



// return(
// //   <div>
// //   {isLoggedIn?<LogOutBtn />:<LoginBtn />}
// // </div>
// )



// if(isLoggedIn){
//   return (
//   <LogOutBtn />
//   )
// }
// else{
//   return(
//    <LoginBtn />
//   )
// }
}

export default App
