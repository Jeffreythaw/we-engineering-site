import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

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
                Selected work and sector coverage.
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                A compact overview of the environments we work in and the type of delivery we bring to each one.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              View services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <Projects />

      <section className="mt-8 rounded-[2rem] border border-slate-200/80 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Delivery focus
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Built for complex and occupied sites.
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Precision, safety, and accountability stay consistent from planning through closeout.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Contact us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default ProjectsPage;
