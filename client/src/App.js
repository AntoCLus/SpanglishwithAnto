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


const App = () => {
  const [service, setService] = useState([]);

  const getAllServices = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8000");
      setService(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllServices();
  }, [getAllServices]);

  return (
    <BrowserRouter className="serviceForm">
       <NavBar />
        <Header />
        <Routes>
          <Route path="/form" element ={<AddService getAllServices={getAllServices}/>}/>
          <Route path="/" element={<List service={service} getAllServices={getAllServices} />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/free-resources" element={<FreeResources/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/services" element={<Services/>} /> 
          
          
          </Routes>

          <Footer />
   
    </BrowserRouter>
  );
}

export default App;
