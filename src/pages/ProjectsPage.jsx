import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Layers3, ShieldCheck, Sparkles } from "lucide-react";
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

const projectPhotos = [
  {
    image: "/Work.png",
    title: "Site installation",
    caption: "Ducting, pipework, and support coordination during delivery.",
  },
  {
    image: "/ACMV.png",
    title: "ACMV work",
    caption: "Mechanical services installed for controlled environments.",
  },
  {
    image: "/Cleanroom.png",
    title: "Cleanroom build",
    caption: "Cleanroom-focused fit-out and execution detail.",
  },
  {
    image: "/Maintenance.png",
    title: "Maintenance support",
    caption: "Ongoing servicing and follow-through after handover.",
  },
];

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

      <section className="mt-8 rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Project photos
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
            Real site work, shown clearly.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Add your own worksite photos here to show installation quality, safety, and project progress.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projectPhotos.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="block aspect-[3/4] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(2,6,23,0.55))]" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                  Project photo
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

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
