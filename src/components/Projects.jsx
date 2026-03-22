import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Factory, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import ProjectCard from "../ProjectCard";

const projectGroups = [
  {
    title: "Semiconductor & Cleanroom",
    tagColorStart: "#0f52ba",
    tagColorEnd: "#4fc3f7",
    icon: <Layers3 size={18} />,
    summary: "Precision HVAC, cleanroom construction, and utility coordination.",
    projects: [
      { client: "Sony Electronics Singapore", scope: "ACMV and piping for cleanroom areas" },
      { client: "Murata Electronics Singapore", scope: "Dryer installation and rotor replacement" },
      { client: "Tokuyama Singapore", scope: "New cleanroom construction" },
    ],
  },
  {
    title: "Pharmaceutical & Life Sciences",
    tagColorStart: "#7c3aed",
    tagColorEnd: "#1d4ed8",
    icon: <ShieldCheck size={18} />,
    summary: "Lab fit-out, compliance-led M&E execution, and controlled-environment upgrades.",
    projects: [
      { client: "GSK Singapore", scope: "Lab fit-up and black utilities piping" },
      { client: "Amgen Singapore", scope: "QC lab works and ACMV systems" },
      { client: "BioMedical Sciences Institutes", scope: "Reinstatement and consultancy services" },
    ],
  },
  {
    title: "Industrial & Manufacturing",
    tagColorStart: "#f97316",
    tagColorEnd: "#f59e0b",
    icon: <Factory size={18} />,
    summary: "Reliable cooling, plant maintenance, and production support.",
    projects: [
      { client: "Shimano Singapore", scope: "AHU upgrades" },
      { client: "Skyworks Global", scope: "Chiller and cooling tower replacements" },
      { client: "Hamilton Aerospace", scope: "Comprehensive chiller maintenance" },
    ],
  },
  {
    title: "Commercial & Retail",
    tagColorStart: "#0f766e",
    tagColorEnd: "#34d399",
    icon: <Building2 size={18} />,
    summary: "Tenant fit-outs, M&E packages, and occupied-building coordination.",
    projects: [
      { client: "Big Box Pte Ltd", scope: "M&E works and fire protection" },
      { client: "Norinchukin Bank", scope: "Office fit-out M&E services" },
      { client: "SG @ Bedok", scope: "Miscellaneous ACMV works" },
    ],
  },
  {
    title: "Maintenance Contracts",
    tagColorStart: "#f59e0b",
    tagColorEnd: "#f97316",
    icon: <Sparkles size={18} />,
    summary: "Long-term maintenance, diagnostics, and preventive servicing.",
    projects: [
      { client: "IME SP2", scope: "HVAC and system maintenance" },
      { client: "Hamilton Aerospace", scope: "Chiller plant maintenance" },
      { client: "Multi-site buildings", scope: "Preventive maintenance contracts" },
    ],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(projectGroups[0].title);

  const activeGroup = useMemo(
    () => projectGroups.find((group) => group.title === activeTab) ?? projectGroups[0],
    [activeTab]
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

      <div className="mb-5 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
          Sectors & projects
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
          Selected work across regulated and occupied environments.
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Semiconductor, pharmaceutical, industrial, commercial, and maintenance scopes are grouped here for a fast overview.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {["Cleanroom", "Pharma", "Industrial", "Commercial"].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {projectGroups.map((group) => (
          <button
            key={group.title}
            onClick={() => setActiveTab(group.title)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeTab === group.title
                ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-white"
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      <motion.div
        key={activeGroup.title}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
              style={{
                backgroundImage: `linear-gradient(135deg, ${activeGroup.tagColorStart}, ${activeGroup.tagColorEnd})`,
              }}
            >
              {activeGroup.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {activeGroup.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {activeGroup.summary}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <ProjectCard
              title={activeGroup.title}
              tagColorStart={activeGroup.tagColorStart}
              tagColorEnd={activeGroup.tagColorEnd}
              projects={activeGroup.projects}
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
              Coverage
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>• Precise ACMV and utilities planning for sensitive environments</li>
              <li>• Strong coordination across design, procurement, and site execution</li>
              <li>• Safety, cleanliness, and compliance built into every stage</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
              Built for Singapore sites
            </p>
            <p className="mt-3 text-lg font-semibold leading-8">
              From feasibility to closeout, the workflow stays practical and accountable.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Cleanroom", "Pharma", "Industrial", "Commercial"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
