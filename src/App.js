import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Contents/Home';
import About from './Contents/About';
import Education from './contents/Education';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/education">
          <Education />
        </Route>

      </div>
    </Router>
  )
}
export default App;
