// src/pages/HomePage.jsx
import React from 'react';
import ServiceCard from '../ServiceCard';
import LeadershipSection from '../components/LeadershipSection';
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const services = [
  {
    icon: '/ACMV.png',
    title: 'ACMV & HVAC Systems',
    tagColor: '#003366',
    description:
      'Design and installation of ductwork, piping, VRF systems, chilled water systems, and cleanroom air handling.',
  },
  {
    icon: '/Work.png',
    title: 'M&E Works',
    tagColor: '#2e7d32',
    description:
      'Turnkey mechanical and electrical engineering, utilities installation, and infrastructure upgrades.',
  },
  {
    icon: '/Cleanroom.png',
    title: 'Cleanroom Construction',
    tagColor: '#1565c0',
    description:
      'Design, construction, and validation of Class 10k and 100k cleanrooms.',
  },
  {
    icon: '/Maintenance.png',
    title: 'Preventive Maintenance',
    tagColor: '#ef6c00',
    description:
      'Comprehensive maintenance for ACMV, chiller plants, and utilities systems.',
  },
  {
    icon: '/ProjectManagement.png',
    title: 'Consultancy & Project Management',
    tagColor: '#6a1b9a',
    description:
      'System assessments, retrofit consultations, and full project lifecycle management.',
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <main className="flex-grow max-w-screen-lg mx-auto px-4">
        {/* Banner */}
        <header id="home" className="relative h-[300px] w-full overflow-hidden">
          <img src="/banner.png" alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute bottom-8 left-10 flex flex-col items-start gap-2">
            <img src="/welogo.png" alt="Logo" className="h-14 mb-20 ml-[-18px]" />
            <div className="bg-white/60 dark:bg-gray-800/60 px-5 py-3 rounded-md shadow-md ml-[-38px] mb-[-10px]">
              <h1 className="text-lg font-bold text-black dark:text-white">WE Engineering Pte Ltd</h1>
              <p className="text-blue-600 dark:text-blue-300 font-medium text-sm">Company Profile</p>
              <div className="h-[3px] w-full bg-blue-600 rounded mt-1" />
            </div>
          </div>
        </header>

        {/* Services */}
        <section id="services" className="my-10 bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
        {/* Project */}
        <Projects />

        {/* Leadership */}
        <LeadershipSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;