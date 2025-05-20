// ServiceCard.js
import React from 'react';
import './ServiceCard.css';

function ServiceCard({ icon, title, description, tagColor }) {
  return (
    <div className="service-item">
      <img src={icon} alt={title} className="service-icon" />
      <div className="service-content">
        <h3
          className="service-title gradient-title"
          style={{
            backgroundImage: `linear-gradient(to right, ${tagColor}, #00c6ff)`,
          }}
        >
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;