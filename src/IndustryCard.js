import React from 'react';
import './IndustryCard.css';

const IndustryCard = ({ name }) => {
  return (
    <div className="industry-card">
      {name}
    </div>
  );
};

export default IndustryCard;