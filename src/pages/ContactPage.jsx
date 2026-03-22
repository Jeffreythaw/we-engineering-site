import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ClipboardList, Phone } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const enquiryText =
  "Hello WE Engineering, I would like to discuss a project scope. Please review the site, timeline, and requirements when convenient.";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEnquiry = async () => {
    try {
      await navigator.clipboard.writeText(enquiryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="w-full">
      <SEO
        title="Contact - WE Engineering Pte Ltd"
        description="Contact WE Engineering Pte Ltd for ACMV, HVAC, M&E, cleanroom, maintenance, and project management support in Singapore."
        path="/contact"
        image="https://we-engineering.net/banner.png"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
          <div className="rounded-[2.4rem] border border-slate-200/80 bg-white/90 px-5 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
              Contact us
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
              Quick contact, not a duplicate footer.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              This page is the short path to reach the team. The footer keeps the full office details and map.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Reach us
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Call for new work or maintenance support.
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/75">
              We review scopes for ACMV, HVAC, M&E, cleanroom, and project management work.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+6583668738"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
              >
                Call +65 8366 8738
                <ArrowUpRight size={16} />
              </a>
              <button
                type="button"
                onClick={handleCopyEnquiry}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                <ClipboardList size={16} />
                {copied ? "Copied enquiry note" : "Copy enquiry note"}
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Scope",
                "Site location",
                "Timeline",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
              What to prepare
            </p>
            <div className="mt-5 space-y-4">
              {[
                "Brief project scope or problem statement",
                "Site address or building name",
                "Target start date or maintenance window",
                "Any photos, drawings, or existing constraints",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                Office details
              </p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Full address, office hours, and map are shown in the footer below.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                View footer contact
                <Phone size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
