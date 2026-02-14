import UserCard from "./components/userCard"
import "./App.css";
import Saurabh from "./assets/saurabh.jpg"
import Sachin from "./assets/sachin.jpg"
import Rohit from "./assets/rohit.jpg"




function App() {
  

  return (
   <div className="container">
    <UserCard name="saurabh" desc="Coder" image={Saurabh} style={{"border-radius":"10px"}} />
    <UserCard name="sachin" desc="developer" image={Sachin} style={{"border-radius":"10px"}} />
    <UserCard name="rohit" desc="cricketer" image={Rohit} style={{"border-radius":"10px"}}/>
   </div>
  )
}

export default App
