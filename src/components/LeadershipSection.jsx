import React from "react";
import LeadershipCard from "../LeadershipCard";

const leaders = [
  {
    photo: "/Eric.png",
    name: "Eric Auiyong",
    title: "Managing Director",
    bio1:
      "With over three decades of experience in HVAC, M&E, and cleanroom project management, Mr. Eric Auiyong has led high-compliance projects for semiconductor, pharmaceutical, research, and data center facilities.",
    bio2:
      "Formerly Project Director at Takasago Singapore Pte Ltd, he brings technical depth, hands-on leadership, and a clear commitment to client value.",
  },
  {
    photo: "/weiren.png",
    name: "Walter Wu Weiren",
    title: "Operations Director",
    bio1:
      "Walter Wu Weiren leads operational execution across M&E projects, keeping schedules, safety, and regulatory compliance aligned from start to finish.",
    bio2:
      "He is recognized for meticulous planning, strategic coordination, and the ability to drive cross-functional collaboration with attention to detail.",
  },
  {
    photo: "/Jeffrey.jpeg",
    name: "Pye Hein Thaw @ Jeffrey",
    title: "Service Manager",
    bio1:
      "Jeffrey focuses on service support, maintenance coordination, and day-to-day follow-through so site operations stay steady and responsive.",
    bio2:
      "His role strengthens the handoff between project delivery and ongoing support, with a practical mindset and close attention to client needs.",
  },
];

const LeadershipSection = () => (
  <section
    id="leadership"
    className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:from-slate-900/70 dark:to-slate-900/50 sm:px-6 lg:px-8"
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

    <div className="mb-6 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
        Leadership
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
        Leadership that keeps delivery practical and dependable.
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        Technical depth, site discipline, and follow-through keep complex work organized, safe, and on schedule.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {leaders.map((leader, index) => (
        <LeadershipCard key={leader.name} {...leader} index={index} />
      ))}
    </div>
  </section>
);

export default LeadershipSection;
