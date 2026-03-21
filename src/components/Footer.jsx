// src/components/Footer.jsx
import React, { useState } from "react";
import { ArrowUpRight, MapPin, Phone, Clock3 } from "lucide-react";
import BrandLogo from "./BrandLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Leadership", href: "/#leadership" },
];

const services = [
  "ACMV & HVAC Systems",
  "M&E Works",
  "Cleanroom Construction",
  "Preventive Maintenance",
];

const enquiryText =
  "Hello WE Engineering, I would like to discuss a project scope. Please review the site, timeline, and requirements when convenient.";

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

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <iframe
            title="WE Engineering Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4934951136814!2d103.75720113814559!3d1.3371481252415036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106e2359f501%3A0xe711c6cdf0d7a4ad!2sSingapore%20658065!5e0!3m2!1sen!2ssg!4v1716355048575!5m2!1sen!2ssg"
            width="100%"
            height="260"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
