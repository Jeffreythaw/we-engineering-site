// App.jsx
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import LeadershipSection from './components/LeadershipSection';
import ProjectCard from './ProjectCard';
import Navbar from './components/NavBar';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);
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

  const projectGroups = [
    {
      title: 'Semiconductor & Cleanroom',
      tagColorStart: '#0052D4',
      tagColorEnd: '#65C7F7',
      projects: [
        { client: 'Sony Electronics Singapore', scope: 'ACMV and piping for cleanroom areas' },
        { client: 'Murata Electronics Singapore', scope: 'Dryer installation and rotor replacement' },
        { client: 'Tokuyama Singapore', scope: 'New cleanroom construction' },
        { client: 'A-STAR IME FSC', scope: 'Fire safety certification and utilities works' },
      ],
    },
    {
      title: 'Pharmaceutical & Life Sciences',
      tagColorStart: '#8e2de2',
      tagColorEnd: '#4a00e0',
      projects: [
        { client: 'GSK Singapore', scope: 'Lab fit-up and black utilities piping (SGD 8.6M)' },
        { client: 'Amgen Singapore', scope: 'QC lab works and ACMV systems' },
        { client: 'BioMedical Sciences Institutes', scope: 'Reinstatement and consultancy services' },
      ],
    },
    {
      title: 'Industrial & Manufacturing',
      tagColorStart: '#FF512F',
      tagColorEnd: '#F09819',
      projects: [
        { client: 'Shimano Singapore', scope: 'AHU upgrades' },
        { client: 'Skyworks Global', scope: 'Chiller and cooling tower replacements' },
        { client: 'Hamilton Aerospace', scope: 'Comprehensive chiller maintenance' },
      ],
    },
    {
      title: 'Commercial & Retail',
      tagColorStart: '#1D976C',
      tagColorEnd: '#93F9B9',
      projects: [
        { client: 'Big Box Pte Ltd', scope: 'M&E works, fire protection (SGD 44.9M)' },
        { client: 'Norinchukin Bank', scope: 'Office fit-out M&E services' },
        { client: 'SG @ Bedok', scope: 'Miscellaneous ACMV works' },
      ],
    },
    {
      title: 'Maintenance Contracts',
      tagColorStart: '#f7971e',
      tagColorEnd: '#ffd200',
      projects: [
        { client: 'IME SP2', scope: 'HVAC & system maintenance (2023–2025)' },
        { client: 'Hamilton Aerospace', scope: 'Chiller plant maintenance' },
        { client: 'Multi-site buildings', scope: 'Preventive maintenance contracts' },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(projectGroups[0]?.title);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <div className="max-w-screen-lg mx-auto px-4">
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

        {/* Projects */}
        <section id="projects" className="section-spacing bg-white dark:bg-gray-800 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Key Projects</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {projectGroups.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(group.title)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                  activeTab === group.title
                    ? 'bg-primary text-white shadow'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {projectGroups
              .filter((group) => group.title === activeTab)
              .map((group, index) => (
                <ProjectCard
                  key={index}
                  title={group.title}
                  tagColorStart={group.tagColorStart}
                  tagColorEnd={group.tagColorEnd}
                  projects={group.projects}
                />
              ))}
          </div>
        </section>

        {/* Leadership */}
        <LeadershipSection />

        {/* Footer */}
        <footer
          id="contact"
          className="bg-[#003366] text-white dark:bg-gray-900 mt-16 pt-10 pb-4 px-4 rounded-t-xl shadow-inner"
        >
          <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">WE Engineering Pte Ltd</h3>
              <p className="text-sm">WCEGA Tower, 21 Bukit Batok Cres, #29-81, Singapore 658065</p>
              <p className="text-sm mt-1">
                Email:{' '}
                <a
                  href="mailto:info@we-engineering.com.sg"
                  className="underline text-blue-200 hover:text-white"
                >
                  info@we-engineering.com.sg
                </a>
              </p>
              <p className="text-sm mt-1">Phone: +65 8366 8738</p>
            </div>

            <div>
              <iframe
                title="WE Engineering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4934951136814!2d103.75720113814559!3d1.3371481252415036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106e2359f501%3A0xe711c6cdf0d7a4ad!2sSingapore%20658065!5e0!3m2!1sen!2ssg!4v1716355048575!5m2!1sen!2ssg"
                width="100%"
                height="200"
                className="rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="text-center text-xs text-gray-300 mt-6 border-t border-gray-500 pt-3">
            &copy; {new Date().getFullYear()} WE Engineering Pte Ltd. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;