import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/home.js';
import FreeResources from './pages/freeResources/freeresourcesmain.js';
import About from './pages/about';
import Contact from './pages/contactUs';
import FAQ from './pages/faq';
import Services from './pages/services';
import Testimonials from './pages/testimonials';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/free-resources" component={FreeResources} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/services" component={Services} />
          <Route path="/testimonials" component={Testimonials} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
