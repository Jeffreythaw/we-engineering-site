import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, BriefcaseBusiness, Sparkles } from "lucide-react";

const LeadershipCard = ({ photo, name, title, bio1, bio2, index }) => (
  <motion.article
    className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900/75"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-80px" }}
  >
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-white/5 dark:via-white/10 dark:to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.22),transparent_50%)]" />
      <div className="relative flex aspect-[4/3] items-center justify-center p-5 sm:p-6">
        <img
          src={photo}
          alt={name}
          className="max-h-full max-w-full object-contain drop-shadow-[0_16px_30px_rgba(15,23,42,0.18)]"
        />
      </div>
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
        <BadgeCheck size={14} />
        Leadership
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/20 via-slate-950/10 to-transparent" />
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
        {name}
      </h3>
      <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">
        {title}
      </p>

      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
        <p>{bio1}</p>
        <p>{bio2}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          { icon: <BriefcaseBusiness size={16} />, label: "Project delivery" },
          { icon: <Sparkles size={16} />, label: "Operational discipline" },
          { icon: <BadgeCheck size={16} />, label: "Compliance mindset" },
        ].map((item) => (
          <div
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  </motion.article>
);

export default LeadershipCard;
