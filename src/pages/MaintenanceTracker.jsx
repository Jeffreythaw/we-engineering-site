import React, { useState, useEffect } from 'react';

const maintenanceTasks = [
  "Clean filters every month",
  "Inspect and service fans and coils every 6 months",
  "Calibrate thermostat yearly",
  "Inspect and seal ductwork",
  "Test electrical components yearly",
  "Run system performance diagnostics",
  "Lubricate moving parts",
  "Install surge protection",
  "Test for carbon monoxide and air quality",
  "Prepare for seasonal demands"
];

const MaintenanceTracker = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [allComplete, setAllComplete] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem("maintenanceProgress");
    if (savedProgress) {
      setCompletedTasks(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("maintenanceProgress", JSON.stringify(completedTasks));
    
    // Show animation for task completion
    if (completedTasks.length > 0) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    }

    // Celebration when all tasks are completed
    if (completedTasks.length === maintenanceTasks.length) {
      setAllComplete(true);
    } else {
      setAllComplete(false);
    }

  }, [completedTasks]);

  const toggleTaskCompletion = (task) => {
    setCompletedTasks(prev =>
      prev.includes(task) ? prev.filter(t => t !== task) : [...prev, task]
    );
  };

  const resetProgress = () => {
    setCompletedTasks([]);
    localStorage.removeItem("maintenanceProgress");
  };

  const progressPercentage = (completedTasks.length / maintenanceTasks.length) * 100;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-orange-600 dark:text-orange-300 mb-4 border-b pb-2">
        Maintenance Completion Tracker
      </h3>

      {/* Progress Bar */}
      <div className="relative w-full bg-gray-300 rounded-full h-6 mb-4 overflow-hidden">
        <div
          className="absolute top-0 left-0 bg-orange-500 h-6 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <span className="absolute inset-0 flex justify-center items-center text-white font-medium">
          {Math.round(progressPercentage)}% Completed
        </span>
      </div>

      {/* Task Completion Notification */}
      {showNotification && (
        <div className="p-3 bg-green-500 text-white rounded-md text-center transition-opacity duration-500">
          ✔ Task Updated!
        </div>
      )}

      {/* Task List */}
      <div className="space-y-3 mt-4">
        {maintenanceTasks.map((task, index) => (
          <label key={index} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 text-orange-500 transition-transform duration-300 ease-in-out transform"
              checked={completedTasks.includes(task)}
              onChange={() => toggleTaskCompletion(task)}
            />
            <span className={`text-lg transition-colors duration-300 ${
              completedTasks.includes(task) ? "line-through text-gray-500" : "text-gray-900"
            }`}>
              {task}
            </span>
          </label>
        ))}
      </div>

      {/* Celebration Message */}
      {allComplete && (
        <div className="mt-4 p-4 bg-blue-500 text-white rounded-md text-center">
          🎉 All maintenance tasks completed! Great job!
        </div>
      )}

      {/* Reset Button */}
      <button
        onClick={resetProgress}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
      >
        Reset Progress
      </button>
    </div>
  );
};

export default MaintenanceTracker;