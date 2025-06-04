import React from 'react';

const MaintenanceTips = () => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-300 mb-4 border-b pb-2">
      Comprehensive Preventive Maintenance Guide
    </h3>
    
    <div className="space-y-8">
      {/* Filter Cleaning */}
      <MaintenanceSection 
        title="Clean filters every month"
        image="/FilterClean.png"
        description="Dirty filters reduce airflow efficiency by up to 15% and force your system to work harder, leading to higher energy consumption and increased wear."
        warning="Signs of Dirty Filters: Increased dust accumulation, reduced cooling/heating efficiency, and odd odors."
        bestPractice="Vacuum reusable filters every two weeks or replace pleated filters every 30-90 days."
      />

      {/* Fan & Coil Service */}
      <MaintenanceSection 
        title="Inspect and service fans and coils every 6 months"
        image="/coilcleaning.png"
        description="Dust accumulation on coils reduces heat transfer efficiency by 20-30%, leading to increased energy consumption. Check fan blades for cracks, debris, and ensure motors are properly lubricated."
        warning="Warning Signs: Decreased cooling capacity, excessive noise, and high electricity usage."
        bestPractice="Use soft brush and coil cleaner on evaporator coils during seasonal checks."
      />

      {/* Ductwork Inspection & Sealing */}
      <MaintenanceSection 
        title="Inspect and seal ductwork"
        image="/ductworkinspection.png"
        description="Leaks in ducts reduce airflow efficiency and increase utility costs. Inspect ducts for blockages or damage."
        warning="Warning Signs: Uneven heating/cooling, increased energy bills."
        bestPractice="Seal gaps with mastic or foil tape, and check for obstructions every six months."
      />

      {/* Electrical Component Testing */}
      <MaintenanceSection 
        title="Test electrical components yearly"
        image="/electricaltesting.png"
        description="Inspect capacitors, contactors, and circuit boards for signs of wear or damage to prevent failures."
        warning="Warning Signs: Frequent system shutdowns, burning smells."
        bestPractice="Perform electrical system diagnostics annually using voltage meters."
      />

      {/* System Performance Diagnostics */}
      <MaintenanceSection 
        title="Run system performance diagnostics"
        image="/systemdiagnostics.png"
        description="Check system pressure levels, airflow rates, and efficiency metrics to detect potential issues early."
        warning="Warning Signs: Weak airflow, fluctuating temperatures."
        bestPractice="Use diagnostic tools to evaluate system efficiency before seasonal changes."
      />
    </div>
  </div>
);

// Reusable Maintenance Section Component
const MaintenanceSection = ({ title, image, description, warning, bestPractice }) => (
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/3 bg-gray-200 border-2 border-dashed rounded-xl w-full h-56 flex items-center justify-center">
      <img 
        src={image} 
        alt={title} 
        className="max-w-full max-h-full object-contain rounded-xl"
        onError={(e) => {
          e.target.src = '/fallback.png'; // Fallback image
          e.target.alt = 'Image not available';
        }}
      />
    </div>
    <div className="md:w-2/3">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="mb-2">{description}</p>
      <p className="mb-2"><strong>{warning}</strong></p>
      <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-md">
        <span className="font-medium text-blue-700 dark:text-blue-300">Best Practice:</span> 
        <span className="ml-2">{bestPractice}</span>
      </div>
    </div>
  </div>
);

export default MaintenanceTips;