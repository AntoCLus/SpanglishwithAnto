import React from 'react';
import "./services.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../components/serviceForm'
import '../components/serviceItem'
import { useState, useCallback, useEffect } from 'react';
import { PopupWidget } from 'react-calendly';


const ServicesPage = () => {

  /*const calendarStyle = {
    border: 'solid 1px #777',
  };*/
  const [service, setService] = useState([]);
  const getAllServices = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8000");
      setService(response.data);
      console.log (response.data)
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  useEffect(() => {
    getAllServices();
  }, [getAllServices]);


  const createOrder = async (lessonType, lessonPrice) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonType: lessonType,
          lessonPrice: lessonPrice,
        }),
      });

      const orderData = await response.json();

      if (orderData.id) {
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const bookClass = async (lessonType, lessonPrice) => {
    try {
      const orderId = await createOrder(lessonType, lessonPrice);
      if (orderId) {
        alert('Redirecting to payment page...');
        window.location.href = `/payment?orderId=${orderId}`;
      } else {
      }
    } catch (error) {
   
    }
  };
 
  
  return (
    <div className="services-page-container">
    <div >
      <h2 className="title"> SERVICES</h2>
      <div className='card'>
      <p className="intro"></p>
      <p className="introp">
        Sign up and log in to your account to have:
      </p>
      <ul>
        <li>Access to your class material and bookings.</li>
        <li>Contact with the teacher to agree on a schedule.</li>
      </ul>
      <p> Have a look at the appointment schedule!.</p>
      </div>
      </div>
      <div className= "calendar">
      
    <div className="card">
      <div className="service-list">
        {service.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link
              to="/payment"
              className="sus"
              onClick={() => bookClass(item.title, item.price)}
            >
              Book Now
            </Link>
            <p>{item.price} usd</p>
          </div>
        ))}
      </div>
      <div style={{ width: '100%', height: '600px', border: '0' }}>
  <PopupWidget url="https://calendly.com/antolustraducciones"
  rootElement={document.getElementById("root")} />
</div>
      </div>
    </div>
  </div>
  )
}


export default ServicesPage;


/*         <button onclick={bookClass}>Book a Free Class</button>
TO IMPLEMENT LOGIC OF BUTTON AND STYLE 
*/

/* This is how I implemented it first before having the backend functional.
<div className="card">
        <h2>Book an English lesson today!!</h2>
        <Link to="/payment"  className='sus'onClick={() => bookClass('English', 16)}>Get a 1-1 lesson!</Link>
        <p>16 usd/h</p>
        <h2>Book a Spanish lesson today!!</h2>
        <Link to="/payment"  className='sus'onClick={() => bookClass('Spanish', 25)}>Get a 1-1 lesson!</Link>
        <p>25 usd/h</p>
        <h2>Get a 10% discount getting 10 English Lessons</h2>
        <Link to="/payment"  className='sus'onClick={() => bookClass('English x 10', 144)}>Get a bundle!</Link>
        <p>144 usd</p>
        <h2>Get a 10% discount getting 10 Spanish Lessons</h2>
        <Link to="/payment"  className='sus'onClick={() => bookClass('Spanish x 10', 225)}>Get a a bundle!</Link>
        <p>225 usd</p>
      </div>
      <div className="card">
        <h2>Book an English conversation course today!!</h2>
        <p className='p2'>Get a course today</p>
        <p className='p2'>Adults</p>
        <p>30 usd / 4 lessons</p>
        <Link to="/payment"  className='sus' onClick={() => bookClass('Spanish Course', 30)}>Get a group class bundle!</Link>
        <h2>Book a Spanish conversation course today!!</h2>
        <p className='p2'>Get a course today</p>
        <p className='p2'>Adults</p>
        <p>40 usd / 4 lessons</p>
        <Link to="/payment"  className='sus' onClick={() => bookClass('English', 40)}>Get a group class bundle!</Link>
        <h2>Get a free Meeting</h2>
        <p className='p2'>Talk to the teacher for a better approach</p>
        <Link to="/payment"  className='sus'>FREE CLASS</Link>
      
        <div className="card">

          </div> */