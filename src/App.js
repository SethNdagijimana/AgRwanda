import React from "react";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (

     <BrowserRouter>
     <Routes>
      <Route element={<Home />}path='/'/>
      <Route element={<AboutUs/>} path='/AboutUs'/>
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
