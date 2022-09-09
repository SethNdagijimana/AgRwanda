import React from "react";
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Contact from "./components/pages/contanct/Contact";
import Login from "./components/pages/login/Login";
import Sign from "./components/pages/signup/Sign";
import RecPassword from "./components/pages/recPassword/RecPassword"  
import DSeller from "./components/Dash/DSeller";
function App() {
  return (

     <BrowserRouter>
     <Routes>
      <Route element={<Home />}path='/'/>
      <Route element={<AboutUs/>} path='/AboutUs'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Sign/>} path='/signup'/>
      <Route element={<RecPassword/>} path='/recoverPassword'/>
      <Route element={<DSeller/>} path='/DashSeller'/>
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
