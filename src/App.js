import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home'
import Pomodoro from "./Pomodoro";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (

      <Router>
          <div>
              <nav>
                  <ul className="Top-Bar">
                      <li>
                         <Link to="/" id ="Home_Btn">Home</Link>
                      </li>
                      <li>
                        <Link to ="/Pomodoro">Pomodoro</Link>
                      </li>
                  </ul>
              </nav>

              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Pomodoro" element={<Pomodoro/>}/>

              </Routes>
          </div>
      </Router>
  );
}

export default App;
