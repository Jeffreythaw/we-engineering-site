import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Factory,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const sectors = [
  {
    icon: <Layers3 size={18} />,
    title: "Semiconductor & Cleanroom",
    summary: "Precision HVAC, cleanroom construction, and utility coordination.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Pharmaceutical & Life Sciences",
    summary: "Lab fit-out, compliance-led M&E execution, and controlled environments.",
  },
  {
    icon: <Factory size={18} />,
    title: "Industrial & Manufacturing",
    summary: "Reliable cooling, plant maintenance, and production support.",
  },
  {
    icon: <Building2 size={18} />,
    title: "Commercial & Retail",
    summary: "Tenant fit-outs, M&E packages, and occupied-building coordination.",
  },
];

const highlights = [
  { label: "Sony Electronics Singapore", scope: "ACMV and piping for cleanroom areas" },
  { label: "GSK Singapore", scope: "Lab fit-up and black utilities piping" },
  { label: "Big Box Pte Ltd", scope: "M&E works and fire protection" },
  { label: "IME SP2", scope: "HVAC and system maintenance" },
];

const projectCases = [
  {
    key: "tai-seng-exchange",
    name: "TaiSeng Exchange",
    address: "1 TaiSeng Avenue, Tower B, Level 3",
    summary:
      "Current site photo set from the TSX folder, presented as a simple animated viewer.",
    tags: ["ACMV", "Site coordination", "Progress photos"],
    photos: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "4.5.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
    ].map((fileName, index) => ({
      src: `/projects/TSX/${fileName}`,
      label: `Photo ${String(index + 1).padStart(2, "0")}`,
    })),
  },
];

const ProjectsViewer = () => {
  const [activeProjectKey, setActiveProjectKey] = useState(projectCases[0].key);
  const activeProject = useMemo(
    () => projectCases.find((project) => project.key === activeProjectKey) ?? projectCases[0],
    [activeProjectKey]
  );
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setActivePhotoIndex(0);
    setDirection(1);
    setHasImageError(false);
  }, [activeProject.key]);

  useEffect(() => {
    setHasImageError(false);
  }, [activePhotoIndex, activeProject.key]);

  useEffect(() => {
    if (!activeProject.photos.length || isPaused) return undefined;

    const interval = window.setInterval(() => {
      setDirection(1);
      setActivePhotoIndex((current) => (current + 1) % activeProject.photos.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [activeProject.photos.length, activeProject.key, isPaused]);

  const goToPhoto = (nextIndex) => {
    setDirection(nextIndex > activePhotoIndex ? 1 : -1);
    setActivePhotoIndex(nextIndex);
    setHasImageError(false);
  };

  const activePhoto = activeProject.photos[activePhotoIndex];
  const slideVariants = {
    enter: (slideDirection) => ({
      opacity: 0,
      x: slideDirection > 0 ? 56 : -56,
      scale: 1.02,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (slideDirection) => ({
      opacity: 0,
      x: slideDirection > 0 ? -48 : 48,
      scale: 0.99,
    }),
  };

  return (
    <section className="mt-8 rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Project photos
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
            Animated project viewer.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            A single viewer keeps the page clean now, and scales better when more projects are added later.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
            Current project
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
            {activeProject.name}
          </p>
          <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {activeProject.address}
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {projectCases.map((project) => (
          <button
            key={project.key}
            type="button"
            onClick={() => setActiveProjectKey(project.key)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeProject.key === project.key
                ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-white"
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
          <div
            className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-950 sm:aspect-[16/10]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              {!hasImageError ? (
                <motion.img
                  key={activePhoto.src}
                  src={activePhoto.src}
                  alt={`${activeProject.name} ${activePhoto.label}`}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  loading="lazy"
                  onError={() => setHasImageError(true)}
                />
              ) : (
                <motion.div
                  key={`${activePhoto.src}-fallback`}
                  className="absolute inset-0 flex items-center justify-center px-6 text-center text-white"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="max-w-md rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                      Image unavailable
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">
                      {activeProject.name}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      The project image did not load, but the case study remains available.
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/55">
                      {activePhoto.label}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(2,6,23,0.52))]" />
            <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
              {activePhoto.label}
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/15 bg-slate-950/70 px-4 py-3 text-white backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                {activeProject.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-white/85">
                {activeProject.summary}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
              Photo set
            </p>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Hover or tap through the sequence as more projects are added later.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() =>
                  goToPhoto(
                    (activePhotoIndex - 1 + activeProject.photos.length) % activeProject.photos.length
                  )
                }
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <ArrowLeft size={16} />
                Previous
              </button>
              <button
                type="button"
                onClick={() =>
                  goToPhoto((activePhotoIndex + 1) % activeProject.photos.length)
                }
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Next
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900/70">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
                Thumbnails
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {String(activePhotoIndex + 1).padStart(2, "0")} /{" "}
                {String(activeProject.photos.length).padStart(2, "0")}
              </p>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {activeProject.photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => goToPhoto(index)}
                  className={`overflow-hidden rounded-2xl border transition ${
                    activePhotoIndex === index
                      ? "border-sky-500 ring-2 ring-sky-500/20"
                      : "border-slate-200 dark:border-white/10"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={`${activeProject.name} thumbnail ${index + 1}`}
                    className="block h-20 w-16 shrink-0 object-cover sm:h-24 sm:w-20"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = "/banner.png";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
              Tags
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsPage = () => (
  <div className="w-full">
    <SEO
      title="Sectors & Projects - WE Engineering Pte Ltd"
      description="Review WE Engineering's sectors, selected projects, and delivery focus across cleanroom, pharma, industrial, and commercial work."
      path="/projects"
      image="https://we-engineering.net/banner.png"
    />

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-[2.4rem] border border-slate-200/80 bg-white/90 px-5 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Sectors & projects
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
                Selected work, by sector.
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                A short view of the sectors we work in and the kinds of projects we are brought in to deliver.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              Start a project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                {sector.icon}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {sector.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {sector.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProjectsViewer />

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Delivery focus
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Built for feasibility, execution, and closeout.
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/75">
            Precision, safety, and accountability stay consistent from planning through completion.
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

        <div className="rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Sample projects
          </p>
          <div className="mt-5 space-y-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.scope}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
              Need a similar project?
            </p>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Contact the team to discuss a new build, fit-out, or maintenance contract.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              Start a project
              <Sparkles size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default ProjectsPage;
