import About from "../src/components/About"
import Home from "../src/components/Home"
import Navbar from "../src/components/Navbar"
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  return (
    <>
 <Router>
    <Navbar/>
      <Routes>
        <Route   path='/about'  element ={<About/>} />
        
       
        <Route    path='/' element ={<Home/>} />
        
      </Routes>

    </Router>
    </>
   
  );
}

export default App;
