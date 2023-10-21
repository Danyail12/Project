import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/about';
import Contact from './Components/contact';
import Login from './Components/Login';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
