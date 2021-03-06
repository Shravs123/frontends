import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

import Login from "./components/Login"

import {
    Routes,
    Route
  } from "react-router-dom"

const App = () =>{
    return(
    <div>    
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signup" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  
    </div>
    )
}

export default App;
