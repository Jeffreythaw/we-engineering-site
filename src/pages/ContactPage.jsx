import React, { useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=WCEGA%20Tower%2C%2021%20Bukit%20Batok%20Cres%2C%20%2329-81%2C%20Singapore%20658065";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const enquiryText =
    "Hello WE Engineering, I would like to discuss a project scope. Please review the site, timeline, and requirements when convenient.";

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
              Start a project or call for support.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              Use the details below to reach the team for new work, maintenance support, or engineering consultation.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Direct contact
            </p>
            <div className="mt-6 space-y-5 text-sm text-white/80">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sky-300" />
                <span>WCEGA Tower, 21 Bukit Batok Cres, #29-81, Singapore 658065</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-sky-300" />
                <span>+65 8366 8738</span>
              </p>
              <p className="flex items-center gap-3">
                <Clock3 size={18} className="shrink-0 text-sky-300" />
                <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/6 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                Project enquiry
              </p>
              <p className="mt-2 text-sm leading-7 text-white/72">
                Use this quick prompt when you call, or copy it and add your own scope details.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEnquiry}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  {copied ? "Copied" : "Copy enquiry note"}
                </button>
                <a
                  href="tel:+6583668738"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Start call
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/60">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200/80 px-5 py-4 dark:border-white/10 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    Office location
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    WCEGA Tower, Singapore 658065
                  </p>
                </div>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 sm:inline-flex"
              >
                Open in Maps
              </a>
            </div>

            <div className="relative">
              <iframe
                title="WE Engineering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4934951136814!2d103.75720113814559!3d1.3371481252415036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106e2359f501%3A0xe711c6cdf0d7a4ad!2sSingapore%20658065!5e0!3m2!1sen!2ssg!4v1716355048575!5m2!1sen!2ssg"
                width="100%"
                height="360"
                className="block border-0 grayscale-[0.12] contrast-105 saturate-90"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),transparent_30%,rgba(2,6,23,0.22))]" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className="max-w-[16rem] rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-3 text-white backdrop-blur">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-sky-300">
                    Visit us
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/85">
                    Practical support from WCEGA Tower, Bukit Batok.
                  </p>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 sm:hidden"
                >
                  Open Maps
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

export default ContactPage;
