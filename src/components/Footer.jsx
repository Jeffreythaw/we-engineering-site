// src/components/Footer.jsx
import React, { useState } from "react";
import { ArrowUpRight, MapPin, Phone, Clock3 } from "lucide-react";
import BrandLogo from "./BrandLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#leadership" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "ACMV & HVAC Systems",
  "M&E Works",
  "Cleanroom Construction",
  "Preventive Maintenance",
];

const enquiryText =
  "Hello WE Engineering, I would like to discuss a project scope. Please review the site, timeline, and requirements when convenient.";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=WCEGA%20Tower%2C%2021%20Bukit%20Batok%20Cres%2C%20%2329-81%2C%20Singapore%20658065";

const Footer = () => {
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
    <footer
      id="contact"
      className="relative mt-12 overflow-hidden border-t border-white/10 bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" tone="inverse" />
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
              Singapore-based engineering support for ACMV, M&E, cleanroom construction, project management, and preventive maintenance.
            </p>

            <a
              href="tel:+6583668738"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Call +65 8366 8738
              <ArrowUpRight size={16} />
            </a>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
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
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Quick links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Contact
            </h4>
            <div className="mt-4 space-y-4 text-sm text-white/75">
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
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                  Office location
                </p>
                <p className="mt-1 text-sm text-white/80">
                  WCEGA Tower, Singapore 658065
                </p>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/12 sm:inline-flex"
            >
              Open in Maps
            </a>
          </div>

          <div className="relative">
            <iframe
              title="WE Engineering Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4934951136814!2d103.75720113814559!3d1.3371481252415036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106e2359f501%3A0xe711c6cdf0d7a4ad!2sSingapore%20658065!5e0!3m2!1sen!2ssg!4v1716355048575!5m2!1sen!2ssg"
              width="100%"
              height="280"
              className="block border-0 grayscale-[0.12] contrast-105 saturate-90 sm:h-[320px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),transparent_30%,rgba(2,6,23,0.22))]" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
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

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} WE Engineering Pte Ltd. All rights reserved.</p>
          <p>ACMV, M&E, cleanroom, and maintenance delivery for Singapore projects.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
