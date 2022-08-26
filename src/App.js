import React from "react";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Contact from "./components/pages/contanct/Contact";
import Login from "./components/pages/login/Login";
import Sign from "./components/pages/signup/Sign";
function App() {
  return (

     <BrowserRouter>
     <Routes>
      <Route element={<Home />}path='/'/>
      <Route element={<AboutUs/>} path='/AboutUs'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Sign/>} path='/signup'/>
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
