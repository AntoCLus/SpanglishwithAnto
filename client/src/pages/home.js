import React from 'react';

function Home  ()  {
  return (
    <div className="home">
      <div className="intro">
        <img src="../images/welcome.webp" alt="Welcome" />
        <p>You think you know but you may not. Book a lesson today to know what is what. :)</p>
      </div>

      <div className="about">
        <img src="path_to_your_about_image.jpg" alt="About Me" />
        <p>About Me Paragraph</p>
      </div>

      <div className="testimonials">
        <h2>Testimonials</h2>
        {/* Map through your testimonials data and display them */}
      </div>
    </div>
  );
}

export default Home;