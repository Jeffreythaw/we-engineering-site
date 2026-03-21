import React from "react";

const sizeClasses = {
  sm: "h-10 w-10 p-1.5",
  md: "h-12 w-12 p-2",
  lg: "h-14 w-14 p-2.5",
};

const BrandLogo = ({
  compact = false,
  size = "md",
  tone = "default",
  className = "",
}) => {
  const toneClasses =
    tone === "inverse"
      ? "text-white"
      : "text-slate-900 dark:text-white";
  const subToneClasses =
    tone === "inverse" ? "text-white/60" : "text-slate-500 dark:text-slate-400";

  const iconSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-sky-500/15 bg-gradient-to-br from-white via-sky-50 to-slate-100 shadow-[0_14px_30px_rgba(15,23,42,0.12)] dark:border-white/10 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 ${iconSize}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_45%)]" />
        <img
          src="/welogo.png"
          alt="WE Engineering"
          className="relative h-full w-full object-contain drop-shadow-[0_6px_14px_rgba(15,23,42,0.08)]"
        />
      </div>

      {!compact && (
        <div className="leading-tight">
          <div className={`text-[0.72rem] font-semibold uppercase tracking-[0.34em] ${toneClasses}`}>
            WE Engineering
          </div>
          <div className={`mt-1 text-xs ${subToneClasses}`}>
            ACMV, M&E, Cleanroom
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
