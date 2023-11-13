import React from 'react';
import './pages.css'

function Home  ()  {
  return (
    <div className="home">
      <div className="intro">
        <h2> Welcome </h2>
        <p>You think you know but you may not. Book a lesson today to know what is what. :)</p>
       
      </div>

      <div className="about">
        <h2>About Me </h2>         
      </div>
    <div>
    <p className="about-content"> With over a decade of dedicated experience, I proudly embrace the role of an English and Spanish teacher, weaving linguistic threads to foster meaningful connections and empower my students. My journey in education spans more than ten years, where I have honed the art of teaching through personalized one-on-one lessons and dynamic group classes. Passionate about the beauty of language, I create an engaging and supportive learning environment that not only imparts grammar rules and vocabulary but also instills a deep appreciation for the richness of both English and Spanish. Each lesson becomes a journey of exploration, where language becomes a bridge connecting diverse cultures and opening doors to new opportunities. In my classroom, I strive to inspire a love for learning and linguistic curiosity, fostering a space where every student can confidently express themselves and navigate the vast tapestry of communication.</p>
    </div >
    
    <div className='pictures'>
  <div className='picture1'>
    <p>1-1 lessons</p>
  </div>
  <div className='picture2'>
    <p>Group classes</p>
  </div>
</div>

      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="services-page-container">
      <div className="card">
        <h2>Alice</h2>
        <p>"The service provided exceeded my expectations. The team is dedicated, knowledgeable, and truly cares about their clients."</p>
  
      </div>
      <div className="card">
        <h2>Angie</h2>
        <p>"I've been a customer for years, and the quality of service has always been exceptional. Highly recommended!"</p>
      </div>
      <div className="card">
        <h2>Angelo</h2>
        <p>"Professionalism at its best. The team goes above and beyond to ensure customer satisfaction. A pleasure to work with!"</p>
        
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home;