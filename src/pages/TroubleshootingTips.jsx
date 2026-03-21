import React from "react";
import SEO from "../components/SEO";

const issues = [
  {
    title: "Water leaking",
    image: "/waterleaking.png",
    summary:
      "Usually caused by drainage blockage, icing, or poor installation.",
    causes: [
      "Blocked drain line",
      "Frozen evaporator coil",
      "Poor unit slope or installation",
    ],
    action:
      "Clean the drain line, check airflow, and call service if refrigerant issues are suspected.",
  },
  {
    title: "No cooling",
    image: "/nocooling.png",
    summary:
      "The unit runs, but the space stays warm or cools very slowly.",
    causes: [
      "Dirty filters or condenser coil",
      "Low refrigerant",
      "Thermostat or compressor fault",
    ],
    action:
      "Check filters and outdoor airflow first, then schedule a technician if the problem persists.",
  },
  {
    title: "No power",
    image: "/nopower.png",
    summary:
      "The system does not start or respond to the controls.",
    causes: [
      "Tripped breaker",
      "Faulty isolator switch",
      "Battery or control fault",
    ],
    action:
      "Reset the breaker, check the isolator, and inspect the remote or control board.",
  },
  {
    title: "Strange noises",
    image: "/strangenoises.png",
    summary:
      "Rattling, buzzing, or grinding usually points to a mechanical issue.",
    causes: [
      "Loose panels or screws",
      "Debris in the fan path",
      "Worn bearings or belts",
    ],
    action:
      "Turn the system off, check for loose parts, and get the motor or fan assembly inspected.",
  },
  {
    title: "Foul odors",
    image: "/foulodors.png",
    summary:
      "Bad smells often come from moisture, mold, or dirty filters.",
    causes: [
      "Mold in coils or drain pan",
      "Clogged filters",
      "Stagnant water in the system",
    ],
    action:
      "Replace filters, clean the coils, and run fan-only mode to dry the system.",
  },
  {
    title: "Uneven cooling",
    image: "/unevencooling.png",
    summary:
      "Some parts of the room are colder than others.",
    causes: [
      "Blocked vents",
      "Poor insulation",
      "Wrong system sizing or duct leakage",
    ],
    action:
      "Check the airflow path, review the heat load, and inspect ducts for leakage.",
  },
  {
    title: "High energy bills",
    image: "/highenergy.png",
    summary:
      "Often a sign that the system is working harder than it should.",
    causes: [
      "Dirty filters or coils",
      "Low refrigerant",
      "Old equipment or long runtime",
    ],
    action:
      "Clean the system, verify the set point, and plan for efficiency upgrades if the unit is aging.",
  },
];

const TroubleshootingTips = () => (
  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <SEO
      title="Common aircon issues"
      description="Use the symptom, common causes, and practical next step to narrow down common air conditioning problems."
      path="/services/common-issues"
      image="https://we-engineering.net/banner.png"
    />
    <section className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
          Troubleshooting
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          Common aircon issues
        </h1>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          Use the symptom to narrow down the cause, then decide whether it is a quick fix or a service call.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        {issues.map((issue, index) => (
          <IssueCard key={issue.title} {...issue} index={index} />
        ))}
      </div>
    </section>
  </div>
);

const IssueCard = ({ title, image, summary, causes, action, index }) => (
  <div className="grid gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div className={`overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
      <img src={image} alt={title} className="block aspect-[4/3] w-full object-contain" />
    </div>

    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
        Symptom
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {summary}
      </p>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Common causes
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
          {causes.map((cause) => (
            <li key={cause} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>{cause}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-2xl bg-sky-50 p-4 text-sm leading-7 text-slate-700 dark:bg-sky-500/10 dark:text-slate-100">
        <p className="font-semibold text-sky-700 dark:text-sky-300">What to do</p>
        <p className="mt-2">{action}</p>
      </div>
    </div>
  </div>
);

export default TroubleshootingTips;
