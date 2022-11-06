
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Create from "./Components/Create";

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="Create" element={<Create/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
