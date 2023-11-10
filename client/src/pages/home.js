import React from 'react';
import './pages.css'

function Home  ()  {
  return (
    <div className="home">
      <div className="intro">
        <h2> Welcome </h2>
        <p>You think you know but you may not. Book a lesson today to know what is what. :)</p>
        <image src="./images/about.jpg"/>
      </div>

      <div className="about">
        <img src="./images/room.jpg" alt="About Me" />
        <h2>About Me </h2>
        <p> With over a decade of dedicated experience, I proudly embrace the role of an English and Spanish teacher, weaving linguistic threads to foster meaningful connections and empower my students. My journey in education spans more than ten years, where I have honed the art of teaching through personalized one-on-one lessons and dynamic group classes. Passionate about the beauty of language, I create an engaging and supportive learning environment that not only imparts grammar rules and vocabulary but also instills a deep appreciation for the richness of both English and Spanish. Each lesson becomes a journey of exploration, where language becomes a bridge connecting diverse cultures and opening doors to new opportunities. In my classroom, I strive to inspire a love for learning and linguistic curiosity, fostering a space where every student can confidently express themselves and navigate the vast tapestry of communication.</p>
        <img src='./images/background2.jpg' alt='Background Image'/> 
      </div>

      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="services-page-container">
      <div className="card">
        <h2>Alice</h2>
  
      </div>
      <div className="card">
        <h2>Angie</h2>
      
      </div>
      <div className="card">
        <h2>Angelo</h2>
        
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home;