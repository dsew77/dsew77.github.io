import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home'
import Pomodoro from "./Pages/Pomodoro/Pomodoro";
import ComponentPreview from "./Pages/Component Preview/ComponentPreview";
import InvoiceHistory from "./Pages/Invoice History/InvoiceHistory";
import GoodRead from "./Pages/Book/GoodRead";

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
                      <li>
                          <Link to = "/Invoice History">Invoice History</Link>
                      </li>
                      <li>
                          <Link to = "/ReadingData">Books Explore</Link>
                      </li>

                  </ul>
              </nav>
              <div id = 'ContainerMain'>
                 <Routes basename = "/your-repo">
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Pomodoro" element={<Pomodoro/>}/>
                    <Route path="/ComponentPreview" element={<ComponentPreview/>}/>
                    <Route path ="/Invoice History" element = {<InvoiceHistory/>}/>
                     <Route path="/ReadingData" element = {<GoodRead/>}/>
                 </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;
