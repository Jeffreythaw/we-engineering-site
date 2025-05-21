import React from 'react';

const MissionVisionCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
      <img src={icon} alt={title} className="w-8 h-8 mt-1" />
      <div>
        <h4 className="font-semibold text-base text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default MissionVisionCard;