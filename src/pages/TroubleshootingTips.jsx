import React from 'react';

const TroubleshootingTips = () => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-300 mb-4 border-b pb-2">
      Common Air Conditioning Issues & Troubleshooting
    </h3>
    
    <div className="space-y-8">
      {/* Water Leaking */}
      <IssueSection
        title="Water Leaking"
        image="/waterleaking.png"
        description="Water leaking from an air conditioner is a common issue, often caused by improper drainage or system malfunctions. If not addressed, it can lead to water damage or mold growth."
        causes="Possible Causes: Clogged drain line, frozen evaporator coil, improper unit installation, or low refrigerant levels causing coil icing."
        troubleshooting="Troubleshooting Steps: Clear the drain line with a wet/dry vacuum or flush with water. Check for frozen coils and ensure proper airflow by cleaning filters. Verify unit tilt for drainage (outdoor units should tilt slightly). Schedule professional service if refrigerant issues are suspected."
      />

      {/* No Cooling */}
      <IssueSection
        title="No Cooling"
        image="/nocooling.png"
        description="When the air conditioner runs but fails to cool, the indoor environment remains uncomfortable, and energy consumption may increase."
        causes="Possible Causes: Dirty air filters, low refrigerant levels, blocked condenser unit, or malfunctioning thermostat."
        troubleshooting="Troubleshooting Steps: Replace or clean air filters every 1-3 months. Ensure the outdoor condenser is free of debris (leaves, dirt). Check thermostat settings and recalibrate if needed. Contact a technician to check for refrigerant leaks or compressor issues."
      />

      {/* No Power */}
      <IssueSection
        title="No Power"
        image="/nopower.png"
        description="The air conditioner does not turn on, leaving the space without cooling or air circulation."
        causes="Possible Causes: Tripped circuit breaker, faulty isolator switch, dead remote batteries, or internal electrical faults."
        troubleshooting="Troubleshooting Steps: Check the circuit breaker and reset if tripped. Inspect the isolator switch for proper connection. Replace remote batteries. If the issue persists, consult a professional to inspect wiring or control board."
      />

      {/* Strange Noises */}
      <IssueSection
        title="Strange Noises"
        image="/public/issue-strange-noises.png"
        description="Unusual sounds like rattling, buzzing, or grinding indicate mechanical or operational issues that can worsen if ignored."
        causes="Possible Causes: Loose screws or panels, worn fan belts, debris in the unit, or failing motor bearings."
        troubleshooting="Troubleshooting Steps: Turn off the unit and inspect for loose components or debris. Tighten screws or panels. Lubricate motor bearings if accessible. For persistent noises, contact a technician to inspect belts, motors, or compressor."
      />

      {/* Foul Odors */}
      <IssueSection
        title="Foul Odors"
        image="/public/issue-foul-odors.png"
        description="Unpleasant smells from the air conditioner can affect indoor air quality and indicate underlying issues."
        causes="Possible Causes: Mold or mildew in the drain pan or coils, clogged filters, or stagnant water in the system."
        troubleshooting="Troubleshooting Steps: Clean or replace air filters. Use coil cleaner on evaporator coils and clear the drain pan. Run the fan-only mode to dry the system. If odors persist, schedule professional cleaning or check for duct contamination."
      />

      {/* Uneven Cooling */}
      <IssueSection
        title="Uneven Cooling"
        image="/public/issue-uneven-cooling.png"
        description="Some areas of the space are cooler than others, leading to inconsistent comfort levels."
        causes="Possible Causes: Blocked vents, poor insulation, improper system sizing, or duct leaks."
        troubleshooting="Troubleshooting Steps: Ensure vents are open and unobstructed. Check insulation in walls or windows. Verify system capacity matches room size using a heat load calculation. Inspect ductwork for leaks and seal with mastic or foil tape."
      />

      {/* High Energy Bills */}
      <IssueSection
        title="High Energy Bills"
        image="/public/issue-high-energy.png"
        description="Unexpectedly high electricity costs can result from inefficient operation or system malfunctions."
        causes="Possible Causes: Dirty filters or coils, low refrigerant, outdated system, or excessive runtime due to improper settings."
        troubleshooting="Troubleshooting Steps: Clean filters and coils regularly. Adjust thermostat to efficient settings (e.g., 24-26°C for tropical climates). Check for refrigerant leaks via professional service. Consider upgrading to an energy-efficient system if the unit is old."
      />
    </div>
  </div>
);

// Reusable Issue Section Component
const IssueSection = ({ title, image, description, causes, troubleshooting }) => (
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/3 bg-gray-200 border-2 border-dashed rounded-xl w-full h-56 flex items-center justify-center text-gray-500">
      <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
    </div>
    <div className="md:w-2/3">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="mb-2">{description}</p>
      <p className="mb-2"><strong>{causes}</strong></p>
      <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-md">
        <span className="font-medium text-blue-700 dark:text-blue-300">Troubleshooting Steps:</span> 
        <span className="ml-2">{troubleshooting}</span>
      </div>
    </div>
  </div>
);

export default TroubleshootingTips;