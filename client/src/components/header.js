import React from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css'

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">SPANGLISH WITH ANTO</h1>
      <nav>
        <ul>
          <li><Link to="/home" className="nav-link">Home</Link></li>
          <li><Link to="/free-resources" className="nav-link">Free Resources</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/faq" className="nav-link">FAQ</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          
        </ul>
      </nav>
    
    </div>
  );
}

export default Header;