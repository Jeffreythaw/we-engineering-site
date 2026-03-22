// src/components/NavBar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  ChevronDown,
  Layers3,
  Menu,
  Moon,
  Sun,
  Thermometer,
  Wrench,
  X,
} from "lucide-react";
import BrandLogo from "./BrandLogo";

const NavBar = ({ isDark, setIsDark }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive(path) ? "text-sky-300" : "text-white/85 hover:text-white"
    }`;

  const menuItemClass =
    "flex items-start gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-white/5";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 text-white shadow-[0_10px_30px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => {
            setMobileMenuOpen(false);
            setDropdownOpen(false);
          }}
        >
          <BrandLogo size="sm" tone="inverse" />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link to="/services" className={navLinkClass("/services")}>
            Services
          </Link>
          <Link to="/projects" className={navLinkClass("/projects")}>
            Projects
          </Link>
          <Link to="/#leadership" className={navLinkClass("/#leadership")}>
            Leadership
          </Link>
          <Link to="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((open) => !open)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 transition-colors duration-200 hover:text-white"
            >
              More <ChevronDown size={16} />
            </button>
            <div
              className={`absolute left-0 top-full mt-3 w-80 origin-top-left rounded-2xl border border-slate-200/20 bg-white p-2 text-slate-900 shadow-2xl transition duration-200 dark:border-white/10 dark:bg-slate-900 dark:text-white ${
                dropdownOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
              }`}
            >
              <Link
                to="/services"
                className={menuItemClass}
                onClick={() => setDropdownOpen(false)}
              >
                <Building2 size={18} className="mt-0.5 shrink-0 text-sky-600" />
                <span>
                  <span className="block font-semibold">Services Overview</span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Our full service lineup
                  </span>
                </span>
              </Link>
              <Link
                to="/projects"
                className={menuItemClass}
                onClick={() => setDropdownOpen(false)}
              >
                <Layers3 size={18} className="mt-0.5 shrink-0 text-sky-600" />
                <span>
                  <span className="block font-semibold">Sectors & Projects</span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Portfolio by sector
                  </span>
                </span>
              </Link>
              <Link
                to="/contact"
                className={menuItemClass}
                onClick={() => setDropdownOpen(false)}
              >
                <ArrowUpRight size={18} className="mt-0.5 shrink-0 text-sky-600" />
                <span>
                  <span className="block font-semibold">Contact Us</span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Call or visit the office
                  </span>
                </span>
              </Link>
              <div className="my-2 border-t border-slate-200 dark:border-white/10" />
              <Link
                to="/services/basic-knowledge"
                className={menuItemClass}
                onClick={() => setDropdownOpen(false)}
              >
                <Building2 size={18} className="mt-0.5 shrink-0 text-sky-600" />
                <span>
                  <span className="block font-semibold">Air Conditioning Basics</span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Core HVAC knowledge and system types
                  </span>
                </span>
              </Link>
              <Link
                to="/services/heatload-calculation"
                className={menuItemClass}
                onClick={() => setDropdownOpen(false)}
              >
                <Thermometer size={18} className="mt-0.5 shrink-0 text-sky-600" />
                <span>
                  <span className="block font-semibold">Heat Load Calculation</span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Sizing and estimation workflow
                  </span>
                </span>
              </Link>
              <Link
                to="/services/common-issues"
                className={menuItemClass}
                onClick={() => setDropdownOpen(false)}
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0 text-sky-600" />
                <span>
                  <span className="block font-semibold">Common Issues</span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Troubleshooting for daily operations
                  </span>
                </span>
              </Link>
              <Link
                to="/services/maintenance-tips"
                className={menuItemClass}
                onClick={() => setDropdownOpen(false)}
              >
                <Wrench size={18} className="mt-0.5 shrink-0 text-sky-600" />
                <span>
                  <span className="block font-semibold">Preventive Maintenance</span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Practical care routines and checklists
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            {isDark ? "Light" : "Dark"}
          </button>

          <a
            href="tel:+6583668738"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Call Now
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 text-white md:hidden">
          <div className="space-y-2">
            <Link
              to="/"
              className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/#leadership"
              className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
            </Link>
            <Link
              to="/contact"
              className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="rounded-2xl border border-white/8 bg-white/5 p-2">
              <div className="px-3 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/50">
                Services
              </div>
              <Link
                to="/services/basic-knowledge"
                className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
                onClick={() => setMobileMenuOpen(false)}
              >
                Air Conditioning Basics
              </Link>
              <Link
                to="/services/heatload-calculation"
                className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
                onClick={() => setMobileMenuOpen(false)}
              >
                Heat Load Calculation
              </Link>
              <Link
                to="/services/common-issues"
                className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
                onClick={() => setMobileMenuOpen(false)}
              >
                Common Issues
              </Link>
              <Link
                to="/services/maintenance-tips"
                className="block rounded-xl px-3 py-2 transition hover:bg-white/8"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preventive Maintenance
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setIsDark(!isDark);
                  setMobileMenuOpen(false);
                }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? "Light mode" : "Dark mode"}
              </button>
              <a
                href="tel:+6583668738"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call Now
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
