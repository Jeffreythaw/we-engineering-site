import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Compass, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const aboutHighlights = [
  {
    icon: <Building2 size={18} />,
    title: "Singapore-based",
    body: "Local support for industrial, commercial, and specialist facility work.",
  },
  {
    icon: <Compass size={18} />,
    title: "Practical delivery",
    body: "Clear coordination, clean handover, and disciplined site execution.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Trusted scopes",
    body: "ACMV, HVAC, cleanroom, maintenance, and project management.",
  },
];

const mvvCards = [
  {
    label: "Mission",
    title: "Practical support",
    body: "Deliver work that stays usable on real sites, real schedules, and real handovers.",
  },
  {
    label: "Vision",
    title: "Trusted delivery",
    body: "Be the team clients call when quality, cleanliness, and coordination matter most.",
  },
  {
    label: "Values",
    title: "Steady standards",
    body: "Keep precision, accountability, and clear communication at the center of every stage.",
  },
];

const HomePage = () => {
  return (
    <div className="w-full">
      <SEO
        title="WE Engineering Pte Ltd"
        description="WE Engineering Pte Ltd delivers ACMV, HVAC, M&E, cleanroom, maintenance, and project management services in Singapore."
        path="/"
        image="https://we-engineering.net/banner.png"
      />

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12">
          <div className="overflow-hidden rounded-[2.4rem] border border-slate-200/80 bg-slate-950 text-white shadow-[0_30px_100px_rgba(15,23,42,0.2)] dark:border-white/10">
            <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:p-8 xl:p-10">
              <div className="flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  About us
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-[4.1rem]">
                  Engineering support for demanding sites.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  WE Engineering handles ACMV, HVAC, M&E, cleanroom, and maintenance scopes with practical execution and steady follow-through.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
                  >
                    Our services
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white/88 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Contact us
                  </Link>
                  <Link
                    to="/leadership"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white/88 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Leadership
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {aboutHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur"
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                        {item.icon}
                      </div>
                      <h2 className="mt-3 text-sm font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="rounded-[2rem] border border-white/10 bg-white/6 p-5 text-white/75 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
                    Company profile
                  </p>
                  <p className="mt-3 text-sm leading-7">
                    A focused engineering team for ACMV, HVAC, M&E, cleanroom, and maintenance delivery.
                  </p>
                  <div className="mt-5 overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/6">
                    <img
                      src="/company-profile.png"
                      alt="WE Engineering company profile"
                      className="block aspect-[16/10] w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
              Mission, vision, values
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              Three commitments that guide the work.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Short, direct, and easy to scan.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {mvvCards.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
