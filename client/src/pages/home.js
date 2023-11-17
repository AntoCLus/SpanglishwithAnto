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
    <p className="about-content"> With over a decade of dedicated experience, 
    I proudly embrace the role of an English and Spanish teacher, 
    creating meaningful connections and empowering my students from zero to hero.
     My journey in education spans more than ten years,
    where I have honed the art of teaching through personalized one-on-one
     lessons and dynamic group classes. 
     Passionate about the beauty of language, 
     I create an engaging and supportive learning environment 
     that not only imparts grammar rules and vocabulary but also 
     instills a deep appreciation for the richness of both English and Spanish.
    Each lesson becomes a journey of exploration, where language becomes
    a bridge connecting diverse cultures and opening doors to new 
    opportunities. 
    Conversational classes turn into deep life debates and the journey of preparing an
    exam finalizes in the goals achieved. Whether you wish to start from zero,
    recap what you have learned. Prepared for an exam or simply begin a new 
    learning journey this is your space.
    I specialize in teaching children ages 8-16.
    Given that I am a developer you can't miss to take part on the IT English Courses.
    Believe that you can and you will. Nos vemos en clase!!
      
      </p>
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
        <p className='quotation'>"</p>
        <p>"AntoTeacher has been my teacher for over 3 years. I can't be but happier of the progress I made throughout the path we walked together. 
          I was a student who could barely say a complete sentence and now I am 
          part of the Secondary English Embassador team."</p>
  
      </div>
      <div className="card">
        <h2>Angie</h2>
        <p className='quotation'>"</p>
        <p> Hola usuarios Para mi la experiencia con Antonella está siendo magnífica , Pienso que es una profesora entregada a su vocación también es una mujer muy paciente y se hace entender . La recomiendo 100% para que sea tu tutora seguro te educaras con ella de la mejor manera , de una manera práctica y didáctica , también cuenta con plataformas especiales para tu aprendizaje aparte de mantenerse en contacto contigo por medio de un slack en el cual tendrás de su disposición las 24 horas para responder cualquier duda ?? Todo lo que necesitas para aprender lo que encuentras en un solo lugar gramática , vocabulario , comprensión lectora etc ...</p>
      </div>
      <div className="card">
      
        <h2>Dean</h2>
        <p className='quotation'>"</p>
        <p>"Spanish is a challenging language, but Anto works in a way that classes are enjoyable, fun and rather than focusing on an extra homework stress for an agitated work-and-study person, we do plenty of practice in the class. "</p>
        
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home;