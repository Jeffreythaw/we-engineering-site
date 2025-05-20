import React from 'react';
import './LeadershipCard.css';

const LeadershipCard = ({ photo, name, title, bio1, bio2 }) => {
  return (
    <div className="leadership-card">
      <img src={photo} alt={name} className="leader-img" />
      <div className="leader-info">
        <h3>
          <span className="leader-name">{name}</span>, <span className="designation">{title}</span>
        </h3>
        <p>{bio1}</p>
        <p>{bio2}</p>
      </div>
    </div>
  );
};

export default LeadershipCard;