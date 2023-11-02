import React from 'react';
import "./services.css"

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <div className="card">
        <h2>Get More Visibility for Your Ads</h2>
        <a href='./' className='sus'>Upgrade your subscription for $10 per month to make your ads more visible.</a>
      </div>
      <div className="card">
        <h2>Our Mission</h2>
        <p className='p2'>The page specializes in facilitating the buying and selling of items through personal contacts. Users can publish ads to showcase items they want to sell or find items to purchase from others.</p>
      </div>
      <div className="card">
        <h2>Our Rules</h2>
        <p className='p2'>As part of our community, we encourage politeness and respectful interactions between users. Treat others the way you'd like to be treated and ensure a positive experience for everyone.</p>
      </div>
    </div>
  );
}

export default ServicesPage;