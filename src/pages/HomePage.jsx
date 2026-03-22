import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CircuitBoard,
  ClipboardList,
  Compass,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Eye,
  Wrench,
  Clock3,
  Factory,
} from "lucide-react";
import ServiceCard from "../ServiceCard";
import LeadershipSection from "../components/LeadershipSection";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import SEO from "../components/SEO";

const services = [
  {
    icon: <Wrench size={28} className="text-white" />,
    title: "ACMV & HVAC Systems",
    tagColor: "#0f52ba",
    description:
      "Design and installation of ductwork, piping, VRF systems, chilled water systems, and cleanroom air handling.",
  },
  {
    icon: <CircuitBoard size={28} className="text-white" />,
    title: "M&E Works",
    tagColor: "#0f766e",
    description:
      "Turnkey mechanical and electrical engineering, utilities installation, and infrastructure upgrades.",
  },
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    title: "Cleanroom Construction",
    tagColor: "#7c3aed",
    description:
      "Design, construction, and validation of Class 10k and 100k cleanrooms.",
  },
  {
    icon: <Factory size={28} className="text-white" />,
    title: "Preventive Maintenance",
    tagColor: "#f97316",
    description:
      "Comprehensive maintenance for ACMV, chiller plants, and utilities systems.",
  },
  {
    icon: <ClipboardList size={28} className="text-white" />,
    title: "Consultancy & Project Management",
    tagColor: "#db2777",
    description:
      "System assessments, retrofit consultations, and full project lifecycle management.",
  },
];

const capabilityCards = [
  {
    icon: <ShieldCheck size={18} />,
    title: "Compliance-led delivery",
    body: "Practical execution that keeps regulated environments clean, safe, and traceable.",
  },
  {
    icon: <Layers3 size={18} />,
    title: "Complex system integration",
    body: "ACMV, utilities, and project coordination handled as one connected scope.",
  },
  {
    icon: <Compass size={18} />,
    title: "Singapore-based support",
    body: "Local response for industrial, commercial, and specialist facility work.",
  },
  {
    icon: <ClipboardList size={18} />,
    title: "Lifecycle maintenance",
    body: "From preventive checks to troubleshooting, the site stays operational longer.",
  },
];

const principles = [
  {
    label: "Mission",
    icon: <Target size={18} />,
    title: "Keep the work practical.",
    body: "Deliver engineering support that holds up on real sites, real schedules, and real handovers.",
    points: ["Site-ready execution", "Clear accountability", "Dependable closeout"],
    accent: "from-amber-500/95 via-orange-500/90 to-orange-600/95",
  },
  {
    label: "Vision",
    icon: <Eye size={18} />,
    title: "Be the team clients trust.",
    body: "Build a reputation for quality, cleanliness, and coordination in demanding environments.",
    points: ["Trustworthy delivery", "Consistent standards", "Responsive coordination"],
    accent: "from-emerald-500/95 via-green-500/90 to-teal-600/95",
  },
  {
    label: "Values",
    icon: <BadgeCheck size={18} />,
    title: "Work with steady standards.",
    body: "Keep precision, accountability, and clear communication at the center of every stage.",
    points: ["Precision first", "Own the details", "Communicate clearly"],
    accent: "from-sky-500/95 via-cyan-500/90 to-blue-600/95",
  },
];

const HomePage = () => {
  const [hoverSeed, setHoverSeed] = useState({});

  const replayPulse = (label) => {
    setHoverSeed((current) => ({
      ...current,
      [label]: (current[label] || 0) + 1,
    }));
  };

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

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="overflow-hidden rounded-[2.4rem] border border-slate-200/80 bg-slate-950 text-white shadow-[0_30px_100px_rgba(15,23,42,0.2)] dark:border-white/10">
            <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-8 xl:p-10">
              <div className="flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  WE Engineering Pte Ltd
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-[4.25rem]">
                  Built for demanding mechanical and electrical work.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  WE Engineering delivers ACMV, M&E, cleanroom, and maintenance work with the discipline of a project team and the response of a site partner.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
                  >
                    View services
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white/88 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Contact us
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    "Singapore-based delivery",
                    "ACMV, M&E, cleanroom",
                    "Maintenance and closeout",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/78 backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="relative"
              >
                <div className="absolute -left-4 top-10 hidden h-24 w-24 rounded-full border border-white/10 bg-white/5 shadow-lg backdrop-blur lg:block" />
                <div className="absolute -bottom-4 right-6 hidden h-28 w-28 rounded-[2rem] border border-white/10 bg-white/5 shadow-lg backdrop-blur lg:block" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_22%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.72))]" />

                  <div className="relative grid gap-4">
                    <div className="overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/6">
                      <img
                        src="/company-profile.png"
                        alt="WE Engineering company profile"
                        className="block aspect-[16/9] w-full object-cover object-center"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 text-white backdrop-blur">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                            Core sectors
                          </p>
                          <Building2 size={16} className="text-sky-300" />
                        </div>
                        <p className="mt-2 text-base font-semibold leading-7">
                          Semiconductor, pharma, industrial, commercial
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 text-white backdrop-blur">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                            Delivery focus
                          </p>
                          <Sparkles size={16} className="text-sky-300" />
                        </div>
                        <p className="mt-2 text-base font-semibold leading-7">
                          Precision, safety, communication, accountability
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 text-white backdrop-blur">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                            Support
                          </p>
                          <Clock3 size={16} className="text-sky-300" />
                        </div>
                        <p className="mt-2 text-base font-semibold leading-7">
                          Maintenance, troubleshooting, and project leadership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[2rem] border border-slate-200/80 bg-white/82 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 md:grid-cols-2 xl:grid-cols-4">
          {capabilityCards.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                {item.icon}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <section
          id="services"
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              Practical engineering services for demanding environments.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Every scope is handled with the same focus on site discipline, clear communication, and clean handover.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </section>

        <Projects />

        <section
          className="rounded-[2rem] border border-slate-200/80 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 sm:px-6 lg:px-8"
        >
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              How we work
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Mission, vision, and values.
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Three commitments that keep the work practical, consistent, and easy to trust.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {principles.map((card, index) => (
              <motion.article
                key={card.label}
                onHoverStart={() => replayPulse(card.label)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br ${card.accent} p-5 shadow-[0_18px_60px_rgba(15,23,42,0.22)]`}
              >
                <motion.div
                  key={`${card.label}-${hoverSeed[card.label] || 0}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-4 rounded-[1.45rem] border border-white/20"
                  initial={{ scale: 0.94, opacity: 0.45 }}
                  animate={{ scale: [0.94, 1.03, 1], opacity: [0.45, 0.18, 0] }}
                  transition={{ duration: 0.95, ease: "easeOut" }}
                />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/16 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
                    {card.icon}
                    {card.label}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/88">
                    {card.body}
                  </p>

                  <div className="mt-5 space-y-2">
                    {card.points.map((point) => (
                      <div
                        key={point}
                        className="inline-flex w-full items-center rounded-2xl border border-white/15 bg-white/12 px-4 py-3 text-sm text-white/92 backdrop-blur"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <LeadershipSection />

        <section className="rounded-[2rem] border border-slate-200/80 bg-white px-5 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
                Start a project
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
                Need support for an HVAC or M&E scope?
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Call us for new projects, maintenance support, or engineering consultation. We will review the scope and follow up by phone.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+6583668738"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  Call +65 8366 8738
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  View contact details
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    Typical response
                  </p>
                  <p className="mt-2 leading-7">
                    Reviewed during business hours
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    What to share
                  </p>
                  <p className="mt-2 leading-7">Scope, site location, and timeline</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    Best for
                  </p>
                  <p className="mt-2 leading-7">New work, maintenance, and consultation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
