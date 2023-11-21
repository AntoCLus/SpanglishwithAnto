import React from 'react';
import axios from 'axios';
import './footer.css'
import { Link } from 'react-router-dom';
import { Button } from "@react-email/button";
import { TfiEmail } from "react-icons/tfi"
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  /*const handleButtonClick = () => {
    axios.get('http://localhost:8000/contact')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }*/
  const Email = () => {
    const emailAddress = 'antolustraducciones@gmail.com';

    const handleButtonClick = () => {
      window.location.href = `mailto:${emailAddress}`;
  }
  return (
    <Button
        onClick={handleButtonClick}
        style={{ color: 'blue', padding: '30px 30px', fontSize: '20px'}}
      >
      <TfiEmail />
      </Button>
    );
  }

  const Whats = () =>{
    const whatsApp = '+5493435436627'
    const handleButtonClick = () => {
      window.location.href = `whatsapp://send?phone=${whatsApp}`;
  }
  return (
    <Button
        onClick={handleButtonClick}
        style={{ color: 'green', padding: '30px 30px', fontSize: '20px'}}
      >
      <FaWhatsapp />
      </Button>
    );
  }

  return(
    <footer>
      <div className="footer">
        <div className="row">
          <ul>
          <li><Email /></li>
          <li> <Whats/> </li>
          <li><Link to="/contact">Contact </Link></li>
          <li><Link to="/services"> Services</Link></li>
          </ul>
        </div>
        

        <div className="row">
        <p> SpanglishWithAnto ©2023 by SpanglishWithAnto.</p>
        </div>
      </div>
    
    </footer>
  );
}


export default Footer;
//  <button onClick={handleButtonClick}>Click Me</button>