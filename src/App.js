import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home'
import Pomodoro from "./Pages/Pomodoro/Pomodoro";
import ComponentPreview from "./Pages/Component Preview/ComponentPreview"

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
                      <li>
                        <Link to ="/ComponentPreview">ComponentPreview</Link>
                      </li>

                  </ul>
              </nav>

              <Routes basename = "/your-repo">
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Pomodoro" element={<Pomodoro/>}/>
                  <Route path="/ComponentPreview" element={<ComponentPreview/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
