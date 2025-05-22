// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Info,
  Thermometer,
  AlertCircle,
  Wrench,
  Sun,
  Moon,
} from "lucide-react";
import "./navbar.css";

const NavBar = ({ isDark, setIsDark }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".digit").forEach((el) => {
            el.classList.remove("replay");
            void el.offsetWidth;
            el.classList.add("replay");
          });
        }
      },
      { threshold: 1 }
    );

    const target = document.querySelector(".code");
    if (target) observer.observe(target);

    return () => target && observer.unobserve(target);
  }, []);

  const isActive = (path) => location.pathname === path;
  const brandName = "WE ENGINEERING PTE LTD";

  return (
    <nav className="bg-[#003366] text-white dark:bg-gray-800 px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <ul className="flex space-x-1 font-bold text-white text-lg code">
            {[...brandName].map((char, index) => (
              <li key={index} tabIndex="0" className="digit replay">
                <span>{char}</span>
              </li>
            ))}
          </ul>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`hover:underline ${isActive("/") ? "font-semibold underline" : ""}`}>
            Home
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:underline"
            >
              Services <ChevronDown size={16} />
            </button>
            <div
              className={`transition-all duration-200 ease-out transform origin-top-left ${
                dropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
              } absolute top-full left-0 bg-white text-black dark:bg-gray-700 dark:text-white mt-2 rounded shadow w-72 z-50`}
            >
              <Link to="/services/basic-knowledge" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Info size={18} /> Air Conditioning Basics Knowledge
              </Link>
              <Link to="/services/heatload-calculation" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Thermometer size={18} /> Heat Load Calculation
              </Link>
              <Link to="/services/common-issues" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <AlertCircle size={18} /> Common Issues & Troubleshooting
              </Link>
              <Link to="/services/maintenance-tips" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Wrench size={18} /> Preventive Maintenance Tips
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 bg-gray-100 text-black dark:bg-gray-600 dark:text-white px-3 py-1 rounded flex items-center gap-2"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />} {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#003366] dark:bg-gray-800 text-white px-4 py-3 space-y-2">
          <Link to="/" className="block" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <div>
            <span className="block font-semibold">Services</span>
            <Link to="/services/basic-knowledge" className="block ml-4 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Info size={16} /> Air Conditioning Basics
            </Link>
            <Link to="/services/heatload-calculation" className="block ml-4 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Thermometer size={16} /> Heat Load
            </Link>
            <Link to="/services/common-issues" className="block ml-4 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <AlertCircle size={16} /> Issues
            </Link>
            <Link to="/services/maintenance-tips" className="block ml-4 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Wrench size={16} /> Maintenance
            </Link>
          </div>
          <button
            onClick={() => {
              setIsDark(!isDark);
              setMobileMenuOpen(false);
            }}
            className="bg-gray-100 text-black dark:bg-gray-600 dark:text-white px-3 py-1 rounded mt-2 flex items-center gap-2"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />} {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;