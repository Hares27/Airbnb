import React from "react";
import "./style.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import Searchpage from "./Searchpage.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


export default function App() {
  return (
    <div>
      <Router>
      <Header/>

     <Routes>
     <Route path="/" element={<Home/>} />
     </Routes>

     <Routes>
       <Route path="/search" element={Searchpage}/>
     </Routes>
         <Footer/>
      </Router>
     
    </div>
  );
}
