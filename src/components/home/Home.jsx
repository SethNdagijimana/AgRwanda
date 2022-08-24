import React from 'react';
import Content from '../navbar/Content';
import Navbar from '../navbar/Navbar';
import "./home.css";

function Home() {
  return (
    <div className="content">
       <Navbar />
       <Content />
    </div>
  )
}

export default Home