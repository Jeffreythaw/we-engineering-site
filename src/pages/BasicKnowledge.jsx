import React from 'react';
import HeatLoadCalculator from './HeatLoadCalculator';
import TroubleshootingTips from './TroubleshootingTips';
import MaintenanceTips from './MaintenanceTips';

const BasicKnowledge = () => {
  return (
    <section className="space-y-10 text-sm text-gray-800 dark:text-gray-200">
      {/* Aircon Basics */}
      <div>
        <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Air Conditioning Basics</h3>
        <p>
          Air conditioning systems remove heat from indoor spaces using refrigerant cycles and fans. Types include:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Split Unit</li>
          <li>VRV/VRF System</li>
          <li>Chilled Water System (AHU/FCU)</li>
          <li>Window Air Conditioner</li>
        </ul>
      </div>

      <HeatLoadCalculator />
      <TroubleshootingTips />
      <MaintenanceTips />
    </section>
  );
};

export default BasicKnowledge;