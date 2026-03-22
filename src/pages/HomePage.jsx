import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CircuitBoard,
  CheckCircle2,
  ClipboardList,
  Compass,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wind,
  Wrench,
} from "lucide-react";
import ServiceCard from "../ServiceCard";
import LeadershipSection from "../components/LeadershipSection";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import SEO from "../components/SEO";
import BrandLogo from "../components/BrandLogo";

const services = [
  {
    icon: <Wind size={28} className="text-white" />,
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
    icon: <Wrench size={28} className="text-white" />,
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

const highlights = [
  {
    icon: <Building2 size={18} />,
    title: "Site-ready scope",
    body: "ACMV, M&E, cleanroom, retrofit, and maintenance packages.",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Clear coordination",
    body: "Direct communication, site discipline, and dependable closeout.",
  },
  {
    icon: <CheckCircle2 size={18} />,
    title: "Reliable outcomes",
    body: "Fit-for-purpose systems built around real operational needs.",
  },
];

const mvvCards = [
  {
    label: "Vision",
    title: "Trusted delivery",
    body: "Trusted delivery with quality, cleanliness, and coordination.",
    accent: "from-emerald-500 to-green-500",
    glow: "bg-emerald-400/20",
  },
  {
    label: "Values",
    title: "Steady standards",
    body: "Precision, accountability, and clear communication.",
    accent: "from-sky-500 to-cyan-500",
    glow: "bg-sky-400/20",
  },
  {
    label: "Mission",
    title: "Practical support",
    body: "Practical support that holds up on real sites and schedules.",
    accent: "from-amber-500 to-orange-500",
    glow: "bg-amber-400/20",
  },
];

const HomePage = () => {
  const [mvvHoverTick, setMvvHoverTick] = useState({});

  const replayMvvAnimation = (label) => {
    setMvvHoverTick((current) => ({
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_24%)]" />
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              WE Engineering Pte Ltd
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Engineering built for real sites.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              WE Engineering delivers ACMV, M&E, cleanroom, and maintenance work with practical execution, clear coordination, and dependable closeout.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                View services
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                Contact us
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200/80 bg-white/85 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                    {item.icon}
                  </div>
                  <h2 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.body}
                  </p>
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
            <div className="absolute -left-4 top-10 hidden h-24 w-24 rounded-full border border-slate-300/70 bg-white/60 shadow-lg backdrop-blur lg:block dark:border-white/10 dark:bg-white/5" />
            <div className="absolute -bottom-4 right-6 hidden h-28 w-28 rounded-[2rem] border border-slate-300/70 bg-white/60 shadow-lg backdrop-blur lg:block dark:border-white/10 dark:bg-white/5" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.24)] dark:border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_22%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(15,23,42,0.72))]" />

              <div className="relative flex flex-col gap-4">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                  <img
                    src="/company-profile.png"
                    alt="WE Engineering company profile"
                    className="block aspect-[16/9] w-full object-cover object-center"
                  />
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 text-white shadow-lg shadow-black/10 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <BrandLogo size="sm" tone="inverse" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/78">
                      A hands-on engineering team for design support, site execution, maintenance, and handover.
                    </p>
                  </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 text-white backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                      Core sectors
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      Semiconductor, pharma, industrial, commercial
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 text-white backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                      Delivery focus
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      Precision, safety, communication, accountability
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 text-white backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                      Support
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      Maintenance, troubleshooting, and project leadership
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 md:grid-cols-2 xl:grid-cols-4">
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
        <section id="services" className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
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

        <section className="rounded-[2rem] border border-slate-200/80 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 sm:px-6 lg:px-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              How we work
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Three principles that guide every project.
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Practical, consistent, and built for real site conditions.
            </p>
          </div>

          <div className="relative isolate flex flex-col items-center gap-6 overflow-visible pb-10 sm:pb-12 lg:block lg:min-h-[760px] lg:pb-0">
            {mvvCards.map((card, index) => (
              <motion.article
                key={card.label}
                onHoverStart={() => replayMvvAnimation(card.label)}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.5, delay: index * 0.16 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`relative flex aspect-square w-full max-w-[300px] flex-col items-center justify-center overflow-hidden rounded-full border border-white/12 bg-gradient-to-br ${card.accent} p-5 text-center text-white shadow-[0_24px_80px_rgba(15,23,42,0.24)] ${card.glow} sm:max-w-[360px] sm:p-7 lg:absolute lg:h-[420px] lg:w-[420px] lg:max-w-none lg:p-8`}
                style={
                  index === 0
                    ? { top: "52px", left: "48px" }
                    : index === 1
                    ? { top: "18px", left: "calc(50% - 220px)" }
                    : { top: "260px", right: "96px" }
                }
              >
                <motion.div
                  key={`${card.label}-${mvvHoverTick[card.label] || 0}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-4 rounded-full border border-white/25"
                  initial={{ scale: 0.88, opacity: 0.55 }}
                  animate={{ scale: [0.88, 1.04, 1], opacity: [0.55, 0.2, 0] }}
                  transition={{ duration: 1.05, ease: "easeOut" }}
                />
                <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
                  {card.label}
                </div>
                <h3 className="text-2xl font-semibold sm:text-3xl">{card.title}</h3>
                <p className="mt-4 max-w-[250px] text-sm leading-7 text-white/88 sm:max-w-[280px]">
                  {card.body}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <LeadershipSection />

        <section className="rounded-[2rem] border border-slate-200/80 bg-white px-5 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
                Need support for an HVAC or M&E scope?
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Call us for new projects, maintenance support, or engineering consultation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+6583668738"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  Call +65 8366 8738
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    Address
                  </p>
                  <p className="mt-2 leading-7">
                    WCEGA Tower, 21 Bukit Batok Cres, #29-81, Singapore 658065
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    Phone
                  </p>
                  <p className="mt-2 leading-7">+65 8366 8738</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    Working hours
                  </p>
                  <p className="mt-2 leading-7">Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Project enquiry
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Tell us the scope, site location, and timeline. We will review and respond by phone.
                </p>
                <a
                  href="tel:+6583668738"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500"
                >
                  Call to discuss
                </a>
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
