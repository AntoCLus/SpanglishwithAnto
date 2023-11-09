import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/home.js';
import FreeResources from './pages/freeResources/freeresourcesmain.js';

import ContactForm from './pages/contactUs';
import FAQ from './pages/faq';
import Services from './pages/services';

import NavBar from "./components/navBar.js"

const App = () => {
  return (
    <Router>
      <div>
       
        <NavBar />
        <Header />
        <Routes>
          
          <Route path="/" exact component={<Home/>} />
          <Route path="/free-resources" component={<FreeResources/>} />
          <Route path="/contact" component={<ContactForm/>} />
          <Route path="/faq" component={<FAQ/>} />
          <Route path="/services" component={<Services/>} /> 
          
          
          </Routes>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
