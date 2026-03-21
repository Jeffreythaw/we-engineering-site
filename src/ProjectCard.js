import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function ProjectCard({ title, tagColorStart, tagColorEnd, projects }) {
  return (
    <motion.div
      className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900/80"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <div
        className="px-6 py-5 text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, ${tagColorStart}, ${tagColorEnd})`,
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-lg font-semibold">{title}</h4>
          <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-white/80">
            Selected work
          </div>
        </div>
      </div>

      <div className="grid gap-3 p-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((item, idx) => (
          <div
            key={`${item.client}-${idx}`}
            className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-1 shrink-0 text-sky-500" />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">
                  {item.client}
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.scope}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
