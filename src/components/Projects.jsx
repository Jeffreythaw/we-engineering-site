// src/components/Projects.jsx
import React, { useState } from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Semiconductor & Cleanroom");

  const projectGroups = [
    {
      title: "Semiconductor & Cleanroom",
      tagColorStart: "#0052D4",
      tagColorEnd: "#65C7F7",
      projects: [
        { client: "Sony Electronics Singapore", scope: "ACMV and piping for cleanroom areas" },
        { client: "Murata Electronics Singapore", scope: "Dryer installation and rotor replacement" },
        { client: "Tokuyama Singapore", scope: "New cleanroom construction" },
        { client: "A-STAR IME FSC", scope: "Fire safety certification and utilities works" },
      ],
    },
    {
      title: "Pharmaceutical & Life Sciences",
      tagColorStart: "#8e2de2",
      tagColorEnd: "#4a00e0",
      projects: [
        { client: "GSK Singapore", scope: "Lab fit-up and black utilities piping (SGD 8.6M)" },
        { client: "Amgen Singapore", scope: "QC lab works and ACMV systems" },
        { client: "BioMedical Sciences Institutes", scope: "Reinstatement and consultancy services" },
      ],
    },
    {
      title: "Industrial & Manufacturing",
      tagColorStart: "#FF512F",
      tagColorEnd: "#F09819",
      projects: [
        { client: "Shimano Singapore", scope: "AHU upgrades" },
        { client: "Skyworks Global", scope: "Chiller and cooling tower replacements" },
        { client: "Hamilton Aerospace", scope: "Comprehensive chiller maintenance" },
      ],
    },
    {
      title: "Commercial & Retail",
      tagColorStart: "#1D976C",
      tagColorEnd: "#93F9B9",
      projects: [
        { client: "Big Box Pte Ltd", scope: "M&E works, fire protection (SGD 44.9M)" },
        { client: "Norinchukin Bank", scope: "Office fit-out M&E services" },
        { client: "SG @ Bedok", scope: "Miscellaneous ACMV works" },
      ],
    },
    {
      title: "Maintenance Contracts",
      tagColorStart: "#f7971e",
      tagColorEnd: "#ffd200",
      projects: [
        { client: "IME SP2", scope: "HVAC & system maintenance (2023–2025)" },
        { client: "Hamilton Aerospace", scope: "Chiller plant maintenance" },
        { client: "Multi-site buildings", scope: "Preventive maintenance contracts" },
      ],
    },
  ];

  return (
    <section id="projects" className="section-spacing bg-white dark:bg-gray-800 rounded-xl shadow mt-12 p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Key Projects</h2>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {projectGroups.map((group) => (
          <button
            key={group.title}
            onClick={() => setActiveTab(group.title)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              activeTab === group.title
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      {/* Active Tab Projects */}
      {projectGroups
        .filter((group) => group.title === activeTab)
        .map((group, idx) => (
          <ProjectCard
            key={idx}
            title={group.title}
            tagColorStart={group.tagColorStart}
            tagColorEnd={group.tagColorEnd}
            projects={group.projects}
          />
        ))}
    </section>
  );
};

export default Projects;