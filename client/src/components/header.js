import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>SpanglishWithAnto</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/free-resources">Free Resources</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;