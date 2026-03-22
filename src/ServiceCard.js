import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ServiceCard({ icon, title, description, tagColor, index }) {
  const isIconElement = React.isValidElement(icon);

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition dark:border-white/10 dark:bg-slate-900/80"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1.5 opacity-90"
        style={{ backgroundColor: tagColor }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start gap-4">
        <div
          className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/20 shadow-[0_14px_30px_rgba(15,23,42,0.12)]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${tagColor}, ${tagColor}bb)`,
            boxShadow: `0 14px 30px ${tagColor}2e`,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_45%)]" />
          {isIconElement ? (
            <span className="relative flex h-9 w-9 items-center justify-center text-white">
              {icon}
            </span>
          ) : (
            <img src={icon} alt={title} className="relative h-9 w-9 object-contain" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-700 dark:group-hover:text-white"
            />
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>
          <div className="mt-5 inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:border-white/10 dark:text-slate-400">
            Site discipline
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
