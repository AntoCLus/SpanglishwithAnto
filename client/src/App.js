import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/home.js';
import FreeResources from './pages/freeResources/freeresourcesmain.js';
import ContactForm from './pages/contactUs';
import FAQ from './pages/faq';
import Services from './pages/services';
import NavBar from "./components/navBar.js"
import "./pages/signup"
import SignUp from './pages/signup';
import Login from './pages/login.js'
import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import AddService from './components/serviceForm.js';
import List from './components/list.js';
import Payment from './pages/payment'


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

 

  const handleLogout = () => {
    console.log("Logging out...");
    setLoggedIn(false)
  }

  return (
    <BrowserRouter className="serviceForm">
       <NavBar onLogout={handleLogout} />
        <Header />
        <Routes>
          <Route path="/form" element ={<AddService/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/free-resources" element={<FreeResources/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/services" element={<Services/>} /> 
          <Route path="/" element={<List />} />
          <Route path="/payment" element={<Payment />} />
          
          </Routes>
          <Footer />
        
   
    </BrowserRouter>
  );
}

export default App;
