
import './App.css';
import React from 'react';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Projects from './routes/Projects';


import { Route, Routes } from 'react-router-dom';


function App() {
  return (
  <>
  <Routes>
  <Route path ='/' element={<Home/>}></Route>
  <Route path = '/project' element={<Projects/>}></Route>
  <Route path = '/about' element={<About/>}></Route>
  <Route path = '/contact' element={<Contact />}></Route>   
      </Routes>

    </>
  );
}

export default App;
