import React from 'react';
import axios from 'axios';
import './footer.css'
import ServicesPage from '../pages/services';
import { Link } from 'react-router-dom';

function Footer() {
  const handleButtonClick = () => {
    axios.get('http://localhost:8000/contact')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>

        <div className="row">
          <ul>
          <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
          </ul>
        </div>

        <div className="row">
          SYS Copyright © 2023 Sell Your Stuff - All rights reserved 
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
//  <button onClick={handleButtonClick}>Click Me</button>