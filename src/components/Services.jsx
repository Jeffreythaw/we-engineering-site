// src/components/Services.jsx
import React from 'react';
import ServiceCard from '../ServiceCard';

const services = [
  {
    icon: '/ACMV.png',
    title: 'ACMV & HVAC Systems',
    tagColor: '#003366',
    description: 'Design and installation of ductwork, piping, VRF systems, chilled water systems, and cleanroom air handling.',
  },
  {
    icon: '/Work.png',
    title: 'M&E Works',
    tagColor: '#2e7d32',
    description: 'Turnkey mechanical and electrical engineering, utilities installation, and infrastructure upgrades.',
  },
  {
    icon: '/Cleanroom.png',
    title: 'Cleanroom Construction',
    tagColor: '#1565c0',
    description: 'Design, construction, and validation of Class 10k and 100k cleanrooms.',
  },
  {
    icon: '/Maintenance.png',
    title: 'Preventive Maintenance',
    tagColor: '#ef6c00',
    description: 'Comprehensive maintenance for ACMV, chiller plants, and utilities systems.',
  },
  {
    icon: '/ProjectManagement.png',
    title: 'Consultancy & Project Management',
    tagColor: '#6a1b9a',
    description: 'System assessments, retrofit consultations, and full project lifecycle management.',
  },
];

const Services = () => (
  <section id="services" className="my-10 bg-white dark:bg-gray-800 p-6 rounded shadow">
    <h2 className="text-xl font-bold mb-6">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </section>
);

export default Services;