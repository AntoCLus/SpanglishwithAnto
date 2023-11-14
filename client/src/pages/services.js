import React from 'react';
import "./services.css"

const ServicesPage = () => {

  
  return (
  
    <div className="services-page-container"> 
    < div className="card"> 
    <h2> SERVICES</h2>
    <p> Sign up and log in to your account to have access to your class material and bookings.</p>
    <p> Contact the teacher to agree on a schedule.</p>

    </div>
      <div className="card">
        <h2>Book an English lesson today!!</h2>
        <a href='./' className='sus'>Get a 1-1 lesson!</a>
        <p>16 usd/h</p>
        <button onclick="bookClass()">Book a Class</button>
        <h2>Book a Spanish lesson today!!</h2>
        <a href='./' className='sus'>Get a 1-1 lesson!</a>
        <p>25 usd/h</p>
        <button onclick="bookClass()">Book a Class</button>
      </div>
      <div className="card">
        <h2>Book an English conversation course today!!</h2>
        <p className='p2'>Get a course today</p>
        <p className='p2'>Adults</p>
        <p>30 usd / 4 lessons</p>
        <button onclick="bookCourse()">Book a Course </button>

        <h2>Book a Spanish conversation course today!!</h2>
        <p className='p2'>Get a course today</p>
        <p className='p2'>Adults</p>
        <p>40 usd / 4 lessons</p>
        <button onclick="bookCourse()">Book a Course </button>
      </div>
      <div className="card">
        <h2>Get a free Meeting</h2>
        <p className='p2'>Talk to the teacher for a better approach</p>
        <button onclick="bookFreeClass()">Book a Free Class</button>
      </div>
    </div>
  );
}

export default ServicesPage;