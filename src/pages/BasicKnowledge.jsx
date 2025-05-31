import React from 'react';

const BasicKnowledge = () => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-300 mb-4 border-b pb-2">
      Air Conditioning Systems: Key Types and Features
    </h3>
    
    <div className="space-y-8">
      {/* Split Unit */}
      <SystemSection 
        title="Split Unit Air Conditioner"
        image ="/splitunit.png"
        description="Split unit air conditioners consist of an indoor unit (evaporator) and an outdoor unit (condenser) connected by refrigerant lines. They use a refrigeration cycle to remove heat from indoor spaces, delivering cool air via a fan."
        keyFeatures="Key Features: Quiet operation, energy-efficient inverter technology, suitable for single rooms or small spaces. Typically wall-mounted with remote control."
        bestUse="Best Use: Homes, small offices, or individual rooms requiring independent cooling."
      />

      {/* VRV/VRF System */}
      <SystemSection 
        title="VRV/VRF System"
        image ="/vrvsystem.png"
        description="Variable Refrigerant Volume (VRV) or Variable Refrigerant Flow (VRF) systems use advanced technology to control the flow of refrigerant to multiple indoor units from a single outdoor unit. They provide precise temperature control and zoning capabilities."
        keyFeatures="Key Features: High energy efficiency, supports multiple indoor units, flexible zoning for different areas, and quiet operation."
        bestUse="Best Use: Commercial buildings, large homes, or spaces requiring independent temperature control in multiple zones."
      />

      {/* Chilled Water System (AHU/FCU) */}
      <SystemSection 
        title="Chilled Water System (AHU/FCU)"
        image="/chilledwater.png"
        description="Chilled water systems use a central chiller to cool water, which is then circulated through Air Handling Units (AHUs) or Fan Coil Units (FCUs) to cool indoor spaces. These systems are highly efficient for large-scale cooling."
        keyFeatures="Key Features: Scalable for large buildings, supports multiple zones, integrates with building management systems, and provides consistent cooling."
        bestUse="Best Use: Large commercial buildings, hospitals, hotels, or industrial facilities with extensive cooling needs."
      />

      {/* Heat Load Basics */}
      <SystemSection 
        title="Heat Load Basics"
        image="/heatload.png"
        description="Heat load refers to the amount of heat energy that an air conditioning system must remove to maintain a comfortable indoor temperature. It is measured in kilowatts (kW) or BTU/hr and is critical for sizing AC systems correctly."
        keyFeatures="Key Factors: Room size (area and volume), insulation quality, number of occupants, windows (size and orientation), external temperature, and equipment heat output (e.g., computers, lighting)."
        bestUse="Best Use: Calculating heat load ensures proper AC system sizing for residential, commercial, or industrial spaces, optimizing energy efficiency and comfort."
      />
    </div>
  </div>
);

// Reusable System Section Component
const SystemSection = ({ title, image, description, keyFeatures, bestUse }) => (
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/3 bg-gray-200 border-2 border-dashed rounded-xl w-full h-56 flex items-center justify-center text-gray-500">
      <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
    </div>
    <div className="md:w-2/3">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="mb-2">{description}</p>
      <p className="mb-2"><strong>{keyFeatures}</strong></p>
      <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-md">
        <span className="font-medium text-blue-700 dark:text-blue-300">Best Use:</span> 
        <span className="ml-2">{bestUse}</span>
      </div>
    </div>
  </div>
);

export default BasicKnowledge;