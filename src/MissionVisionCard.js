import React from 'react';
import './MissionVisionCard.css';

const MissionVisionCard = ({ icon, title, description }) => {
  return (
    <div className="mission-card">
      <img src={icon} alt={title} className="mission-icon" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MissionVisionCard;