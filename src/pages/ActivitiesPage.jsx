import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const activityVideos = [
  {
    title: "Chiller Positioning Highlight",
    project: "Woodlands Spectrum #01-18",
    src: "/activities/woodlands-spectrum-01-18/chiller-positioning-highlight.mp4",
    poster: "/activities/woodlands-spectrum-01-18/chiller-positioning-highlight.jpg",
  },
  {
    title: "Cooling Tower Overhaul Preparation",
    project: "HarbourLink Innohub",
    src: "/activities/harbour-link-innohub/cooling-tower-overhaul-01.mp4",
    poster: "/activities/harbour-link-innohub/cooling-tower-overhaul-01.jpg",
  },
  {
    title: "Cooling Tower Refurbishment Works",
    project: "HarbourLink Innohub",
    src: "/activities/harbour-link-innohub/cooling-tower-overhaul-02.mp4",
    poster: "/activities/harbour-link-innohub/cooling-tower-overhaul-02.jpg",
  },
  {
    title: "Cooling Tower Maintenance Progress",
    project: "HarbourLink Innohub",
    src: "/activities/harbour-link-innohub/cooling-tower-overhaul-03.mp4",
    poster: "/activities/harbour-link-innohub/cooling-tower-overhaul-03.jpg",
  },
  {
    title: "Cooling Tower Reassembly",
    project: "HarbourLink Innohub",
    src: "/activities/harbour-link-innohub/cooling-tower-overhaul-04.mp4",
    poster: "/activities/harbour-link-innohub/cooling-tower-overhaul-04.jpg",
  },
  {
    title: "Condenser Tube Cleaning & Chiller Overhaul",
    project: "Temasek Lifesciences",
    src: "/activities/temasek-lifesciences/condenser-tube-cleaning-01.mp4",
    poster: "/activities/temasek-lifesciences/chiller-overhaul-01.jpg",
  },
  {
    title: "Chiller Water Box Cleaning & Restoration",
    project: "Temasek Lifesciences",
    src: "/activities/temasek-lifesciences/condenser-tube-cleaning-02.mp4",
    poster: "/activities/temasek-lifesciences/chiller-overhaul-02.jpg",
  },
];

const ActivitiesPage = () => (
  <div className="w-full">
    <SEO
      title="Activity Videos - WE Engineering Pte Ltd"
      description="Short activity videos from WE Engineering project and maintenance work."
      path="/activities"
      image="https://we-engineering.net/banner.png"
    />

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-10 lg:px-8">
        <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 px-4 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 sm:rounded-[2.4rem] sm:px-6 sm:py-8 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Activity videos
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
                Short clips from site work.
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                A compact place for project progress, maintenance activity, and handover videos.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 sm:w-auto"
            >
              Discuss a project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      {activityVideos.length > 0 ? (
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activityVideos.map((video) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:rounded-[2rem]"
            >
              <video
                className="block aspect-[9/16] w-full bg-slate-950 object-cover"
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
                  {video.project}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {video.title}
                </h2>
              </div>
            </article>
          ))}
        </section>
      ) : null}
    </main>

    <Footer />
  </div>
);

export default ActivitiesPage;
