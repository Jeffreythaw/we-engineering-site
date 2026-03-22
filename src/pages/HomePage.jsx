import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CircuitBoard,
  ClipboardList,
  Compass,
  Factory,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import ServiceCard from "../ServiceCard";
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

const leaders = [
  {
    photo: "/Eric.png",
    name: "Eric Auiyong",
    title: "Managing Director",
    summary:
      "Project leadership with deep HVAC, M&E, and cleanroom experience.",
  },
  {
    photo: "/weiren.png",
    name: "Walter Wu Weiren",
    title: "Operations Director",
    summary:
      "Operational coordination and site execution across project phases.",
  },
  {
    photo: "/Jeffrey.jpeg",
    name: "Pye Hein Thaw @ Jeffrey",
    title: "Service Manager",
    summary:
      "Service support, maintenance coordination, and responsive follow-through.",
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

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-12">
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
                  WE Engineering handles ACMV, HVAC, M&E, cleanroom, and maintenance scopes with practical execution, clear coordination, and steady follow-through.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
                  >
                    Our services
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

                    <div className="rounded-[1.65rem] border border-white/10 bg-white/6 p-5 text-white backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                        What we handle
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {[
                          "ACMV and HVAC",
                          "Cleanroom and M&E",
                          "Maintenance and project support",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-white/80"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                        Built for teams that need practical delivery, fast coordination, and work that closes cleanly.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-14 pt-2 sm:px-6 lg:px-8">
        <section
          id="services"
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
              Our service
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              Practical engineering services.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              The homepage only needs a quick read. Each service card points to the detail pages when clients need more.
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
          id="leadership"
          className="rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
              Leadership
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              Leadership that keeps delivery practical.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              The team combines technical depth with site discipline and clear handoff.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50/80 dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-white/5 dark:via-white/10 dark:to-slate-900">
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                    <BadgeCheck size={14} />
                    Leadership
                  </div>
                  <div className="flex aspect-[4/3] items-center justify-center p-4">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="max-h-full max-w-full object-contain drop-shadow-[0_16px_30px_rgba(15,23,42,0.18)]"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">
                    {leader.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {leader.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[2rem] border border-slate-200/80 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 sm:px-6 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Contact us
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Need an HVAC or M&E team in Singapore?
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Call us for new projects, maintenance support, or engineering consultation. We will review the scope and follow up by phone.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+6583668738"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  Call +65 8366 8738
                </a>
                <a
                  href="#home"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white/88 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Back to top
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
              <div className="grid gap-3 text-sm text-white/80 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                    Typical response
                  </p>
                  <p className="mt-2 leading-7">
                    Reviewed during business hours
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                    What to share
                  </p>
                  <p className="mt-2 leading-7">Scope, site location, and timeline</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
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
