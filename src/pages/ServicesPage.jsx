import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CircuitBoard, ClipboardList, Factory, ShieldCheck, Wrench } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import ServiceCard from "../ServiceCard";

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

const ServicesPage = () => (
  <div className="w-full">
    <SEO
      title="Services - WE Engineering Pte Ltd"
      description="Explore WE Engineering's ACMV, HVAC, M&E, cleanroom, preventive maintenance, and project management services."
      path="/services"
      image="https://we-engineering.net/banner.png"
    />

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-[2.4rem] border border-slate-200/80 bg-white/90 px-5 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Our service
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
                Practical engineering services.
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                The homepage stays short. This page holds the full service overview for clients who want detail.
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
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default ServicesPage;
