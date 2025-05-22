// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasicKnowledge from './pages/BasicKnowledge';
import HeatLoadCalculator from './pages/HeatLoadCalculator';
import TroubleshootingTips from './pages/TroubleshootingTips';
import MaintenanceTips from './pages/MaintenanceTips';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services/basic-knowledge" element={<BasicKnowledge />} />
  <Route path="/services/heatload-calculation" element={<HeatLoadCalculator />} />
  <Route path="/services/common-issues" element={<TroubleshootingTips />} />
  <Route path="/services/maintenance-tips" element={<MaintenanceTips />} />
  <Route path="*" element={<NotFound />} /> {/* catch-all route */}
</Routes>
  );
};

export default AppRoutes;