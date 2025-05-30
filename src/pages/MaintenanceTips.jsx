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
        image="Filter Cleaning Example"
        description="Dirty filters reduce airflow efficiency by up to 15% and force your system to work harder, leading to higher energy consumption and increased wear."
        warning="Signs of Dirty Filters: Increased dust accumulation, reduced cooling/heating efficiency, and odd odors."
        bestPractice="Vacuum reusable filters every two weeks or replace pleated filters every 30-90 days."
      />

      {/* Fan & Coil Service */}
      <MaintenanceSection 
        title="Inspect and service fans and coils every 6 months"
        image="Coil Cleaning Example"
        description="Dust accumulation on coils reduces heat transfer efficiency by 20-30%, leading to increased energy consumption. Check fan blades for cracks, debris, and ensure motors are properly lubricated."
        warning="Warning Signs: Decreased cooling capacity, excessive noise, and high electricity usage."
        bestPractice="Use soft brush and coil cleaner on evaporator coils during seasonal checks."
      />

      {/* Thermostat Calibration */}
      <MaintenanceSection 
        title="Calibrate thermostat yearly"
        image="Thermostat Calibration Example"
        description="Misconfigured thermostats lead to inefficient heating and cooling cycles, increasing energy usage."
        warning="Signs of Faulty Calibration: Inconsistent room temperature, unresponsive settings."
        bestPractice="Check and recalibrate the thermostat annually for optimal performance."
      />

      {/* Ductwork Inspection & Sealing */}
      <MaintenanceSection 
        title="Inspect and seal ductwork"
        image="Ductwork Inspection Example"
        description="Leaks in ducts reduce airflow efficiency and increase utility costs. Inspect ducts for blockages or damage."
        warning="Warning Signs: Uneven heating/cooling, increased energy bills."
        bestPractice="Seal gaps with mastic or foil tape, and check for obstructions every six months."
      />

      {/* Electrical Component Testing */}
      <MaintenanceSection 
        title="Test electrical components yearly"
        image="Electrical Testing Example"
        description="Inspect capacitors, contactors, and circuit boards for signs of wear or damage to prevent failures."
        warning="Warning Signs: Frequent system shutdowns, burning smells."
        bestPractice="Perform electrical system diagnostics annually using voltage meters."
      />

      {/* System Performance Diagnostics */}
      <MaintenanceSection 
        title="Run system performance diagnostics"
        image="System Diagnostics Example"
        description="Check system pressure levels, airflow rates, and efficiency metrics to detect potential issues early."
        warning="Warning Signs: Weak airflow, fluctuating temperatures."
        bestPractice="Use diagnostic tools to evaluate system efficiency before seasonal changes."
      />

      {/* Lubrication of Moving Parts */}
      <MaintenanceSection 
        title="Lubricate moving parts"
        image="Lubrication Example"
        description="Reduce wear and tear by lubricating fan motors, belts, and bearings regularly."
        warning="Warning Signs: Grinding or squeaking noises, excess friction."
        bestPractice="Apply manufacturer-recommended lubricants to motor bearings and moving components annually."
      />

      {/* Surge Protection */}
      <MaintenanceSection 
        title="Install surge protection"
        image="Surge Protection Example"
        description="Protect the HVAC system from electrical surges that can damage sensitive components."
        warning="Warning Signs: Flickering displays, component overheating."
        bestPractice="Install surge protectors and monitor voltage stability."
      />

      {/* Carbon Monoxide & Air Quality Testing */}
      <MaintenanceSection 
        title="Test for carbon monoxide and air quality"
        image="Air Quality Testing Example"
        description="Check for air pollutants and potential gas leaks to enhance safety."
        warning="Warning Signs: Headaches, dizziness, increased allergy symptoms."
        bestPractice="Perform indoor air quality tests annually with CO detectors."
      />

      {/* Seasonal Preparation */}
      <MaintenanceSection 
        title="Prepare for seasonal demands"
        image="Seasonal Prep Example"
        description="Ensure HVAC units are ready for summer and winter with tailored maintenance."
        warning="Warning Signs: System struggles to maintain temperature during extreme weather."
        bestPractice="Inspect heating elements before winter and cooling units before summer."
      />

    </div>
  </div>
);

// Reusable Maintenance Section Component
const MaintenanceSection = ({ title, image, description, warning, bestPractice }) => (
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/3 bg-gray-200 border-2 border-dashed rounded-xl w-full h-56 flex items-center justify-center text-gray-500">
      {image}
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