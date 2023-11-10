import React from 'react';
import "./services.css"

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <div className="card">
        <h2>Book a lesson today!!</h2>
        <a href='./' className='sus'>Get a 1-1 lesson!</a>
        <button onclick="bookClass()">Book a Class</button>
      </div>
      <div className="card">
        <h2>Book a course today!!</h2>
        <p className='p2'>Get a course today</p>
        <button onclick="bookCourse()">Book a Course</button>
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