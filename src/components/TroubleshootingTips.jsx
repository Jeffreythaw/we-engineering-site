import React from 'react';

const TroubleshootingTips = () => (
  <div>
    <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">Common Issues & Troubleshooting</h3>
    <ul className="list-disc pl-5">
      <li><strong>Water Leaking:</strong> Clogged drainage or frozen coil</li>
      <li><strong>No Cooling:</strong> Dirty filter, low refrigerant, or blocked condenser</li>
      <li><strong>No Power:</strong> Check isolator, breaker, or remote batteries</li>
    </ul>
  </div>
);

export default TroubleshootingTips;