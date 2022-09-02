import React from "react"
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Publications from './Publications/Publications';

function App() {
  return (    
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/publications' element={<Publications />} />          
        <Route exact path='/portfolio' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
