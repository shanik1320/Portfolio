import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  )
}
export default App;
