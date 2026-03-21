import React from "react";
import SEO from "../components/SEO";

const basics = [
  {
    title: "Split Unit Air Conditioner",
    image: "/splitunit.png",
    summary:
      "A simple indoor-outdoor setup for single rooms and small offices.",
    points: [
      "Quiet operation and straightforward control",
      "Good for independent room-by-room cooling",
      "Common in homes and small commercial spaces",
    ],
  },
  {
    title: "VRV / VRF System",
    image: "/vrvsystem.png",
    summary:
      "A flexible refrigerant system that serves multiple indoor units from one outdoor network.",
    points: [
      "Useful when different zones need different set points",
      "Efficient for larger homes and commercial floors",
      "Supports compact mechanical layouts",
    ],
  },
  {
    title: "Chilled Water System",
    image: "/chilledwater.png",
    summary:
      "A central plant solution that distributes chilled water to AHUs and FCUs.",
    points: [
      "Best suited for large buildings and campuses",
      "Scales well for hospital, hotel, and industrial use",
      "Works well with building management systems",
    ],
  },
  {
    title: "Heat Load Basics",
    image: "/heatload.png",
    summary:
      "Heat load is the cooling demand a room or building must overcome to stay comfortable.",
    points: [
      "Depends on area, ceiling height, windows, occupants, and equipment",
      "Correct sizing avoids under-cooling and wasted energy",
      "The starting point for any reliable aircon design",
    ],
  },
];

const BasicKnowledge = () => (
  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <SEO
      title="Air conditioning basics"
      description="Learn the main air conditioning system types, how they fit different sites, and why heat load matters."
      path="/services/basic-knowledge"
      image="https://we-engineering.net/banner.png"
    />
    <section className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
          HVAC fundamentals
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          Air conditioning basics
        </h1>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          A practical overview of common system types and the sizing ideas behind them.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          "Know the main system types",
          "Understand where each one fits",
          "Use heat load to size properly",
          "Avoid common design mistakes",
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6">
        {basics.map((item, index) => (
          <BasicCard key={item.title} {...item} index={index} />
        ))}
      </div>
    </section>
  </div>
);

const BasicCard = ({ title, image, summary, points, index }) => (
  <div className="grid gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div className={`overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
      <img src={image} alt={title} className="block aspect-[4/3] w-full object-contain" />
    </div>

    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
        System overview
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {summary}
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default BasicKnowledge;
