// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import LeadershipPage from './pages/LeadershipPage';
import BasicKnowledge from './pages/BasicKnowledge';
import HeatLoadCalculator from './pages/HeatLoadCalculator';
import TroubleshootingTips from './pages/TroubleshootingTips';
import MaintenanceTips from './pages/MaintenanceTips';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/projects" element={<ProjectsPage />} />
  <Route path="/leadership" element={<LeadershipPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/services/basic-knowledge" element={<BasicKnowledge />} />
  <Route path="/services/heatload-calculation" element={<HeatLoadCalculator />} />
  <Route path="/services/common-issues" element={<TroubleshootingTips />} />
  <Route path="/services/maintenance-tips" element={<MaintenanceTips />} />
  <Route path="*" element={<NotFound />} /> {/* catch-all route */}
</Routes>
  );
};

export default AppRoutes;
