import React from 'react';
import './ProjectCard.css';

function ProjectCard({ icon, title, tagColorStart, tagColorEnd, projects }) {
  return (
    <div className="project-card">
      {icon && <img src={icon} alt={title} className="project-icon" />}
      <div className="project-content">
        <div className="project-header">
          <h4
            className="project-title"
            style={{
              backgroundImage: `linear-gradient(to right, ${tagColorStart}, ${tagColorEnd})`,
            }}
          >
            {title}
          </h4>
        </div>
        <ul className="project-list">
          {projects.map((item, idx) => (
            <li key={idx}>
              <strong>{item.client}:</strong> {item.scope}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;