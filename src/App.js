import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Contents/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home/>
        </Route>
      </div>
    </Router>
  )
}
export default App;
