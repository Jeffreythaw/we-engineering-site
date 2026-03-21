import React from "react";
import SEO from "../components/SEO";

const maintenanceItems = [
  {
    title: "Clean filters monthly",
    image: "/FilterClean.png",
    summary: "Blocked filters reduce airflow and make the system work harder.",
    warning: "Dust buildup, weak airflow, or musty smells",
    practice: "Vacuum reusable filters every two weeks or replace them every 30 to 90 days.",
  },
  {
    title: "Service coils and fans",
    image: "/coilcleaning.png",
    summary: "Dust on coils slows heat transfer and increases energy use.",
    warning: "Lower cooling capacity, noisy fans, or higher power use",
    practice: "Clean coils with the correct cleaner and check fan blades, bearings, and belts.",
  },
  {
    title: "Inspect ductwork",
    image: "/ductworkinspection.png",
    summary: "Leaks and blockages reduce supply air quality and waste energy.",
    warning: "Uneven cooling or rising utility bills",
    practice: "Seal leaks with mastic or foil tape and clear any obstruction in the duct route.",
  },
  {
    title: "Test electrical parts yearly",
    image: "/electricaltesting.png",
    summary: "Electrical wear can lead to sudden shutdowns and expensive downtime.",
    warning: "Frequent trips, burnt smell, or intermittent starts",
    practice: "Check capacitors, contactors, and control boards during annual servicing.",
  },
  {
    title: "Run diagnostics regularly",
    image: "/systemdiagnostics.png",
    summary: "Performance checks help spot problems before they become failures.",
    warning: "Fluctuating temperatures or weak airflow",
    practice: "Review pressure, airflow, and operating trends before each major season change.",
  },
];

const MaintenanceTips = () => (
  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <SEO
      title="Preventive maintenance"
      description="Practical maintenance guidance for HVAC and ACMV systems that helps improve reliability and reduce downtime."
      path="/services/maintenance-tips"
      image="https://we-engineering.net/banner.png"
    />
    <section className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
          Preventive maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          Keep HVAC and ACMV systems dependable
        </h1>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          Small routine checks protect cooling performance, extend equipment life, and reduce downtime.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        {maintenanceItems.map((item, index) => (
          <MaintenanceCard key={item.title} {...item} index={index} />
        ))}
      </div>
    </section>
  </div>
);

const MaintenanceCard = ({ title, image, summary, warning, practice, index }) => (
  <div className="grid gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div className={`overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
      <img src={image} alt={title} className="block aspect-[4/3] w-full object-contain" />
    </div>

    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
        Maintenance step
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {summary}
      </p>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Watch for
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
          {warning}
        </p>
      </div>

      <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm leading-7 text-slate-700 dark:bg-emerald-500/10 dark:text-slate-100">
        <p className="font-semibold text-emerald-700 dark:text-emerald-300">Best practice</p>
        <p className="mt-2">{practice}</p>
      </div>
    </div>
  </div>
);

export default MaintenanceTips;
