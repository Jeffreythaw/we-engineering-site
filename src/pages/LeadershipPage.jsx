import React from "react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import LeadershipSection from "../components/LeadershipSection";

const LeadershipPage = () => (
  <div className="w-full">
    <SEO
      title="Leadership - WE Engineering Pte Ltd"
      description="Meet the WE Engineering leadership team behind project delivery, operations, and service support."
      path="/leadership"
      image="https://we-engineering.net/banner.png"
    />

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-[2.4rem] border border-slate-200/80 bg-white/90 px-5 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Leadership
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            The team behind delivery.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Technical depth, operations discipline, and service follow-through shape how WE Engineering works on site.
          </p>
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <LeadershipSection />
    </main>

    <Footer />
  </div>
);

export default LeadershipPage;
