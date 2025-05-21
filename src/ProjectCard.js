import React from 'react';

function ProjectCard({ icon, title, tagColorStart, tagColorEnd, projects }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 animate-fade-in">
      {/* Optional icon */}
      {icon && (
        <img src={icon} alt={title} className="w-10 h-10 mb-3" />
      )}

      {/* Gradient header */}
      <h4
        className="text-lg font-bold text-white px-4 py-2 rounded-md mb-4 shadow"
        style={{
          backgroundImage: `linear-gradient(to right, ${tagColorStart}, ${tagColorEnd})`,
        }}
      >
        {title}
      </h4>

      {/* Project list */}
      <ul className="space-y-2 text-sm text-gray-700 pl-4 list-disc">
        {projects.map((item, idx) => (
          <li key={idx}>
            <span className="font-semibold text-primary">{item.client}</span>: {item.scope}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;