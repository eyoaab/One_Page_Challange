import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/navbar.jsx';
import './app.css';
import Leftside from './Leftside/Leftside.jsx';
import Center from './Center/center.jsx';
import Right from './Rightside/Right.jsx';
import HomeTwo from './Homepage2/homepage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="Appcontainer">
        <div className="left">
          <Leftside />
        </div>
        <div className="center">
          <Routes>
            <Route exact path="/" element={<Center />} />
            <Route path="/homeTwo" element={<HomeTwo />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
        
        <div className="right">
          <Right />
        </div>
      </div>
    </Router>
  );
}

export default App;
