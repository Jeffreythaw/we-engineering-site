import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import heatLoadService from "./HeatLoadService";
import { generatePDF } from "./pdfGenerator";

const buildingPresets = {
  HDB: [{ name: "Living Room", lengthM: 5, widthM: 3 }, { name: "Bedroom", lengthM: 4, widthM: 2.5 }],
  Condo: [{ name: "Living Room", lengthM: 6, widthM: 3.5 }, { name: "Bedroom", lengthM: 4.5, widthM: 3 }],
  Landed: [{ name: "Living Room", lengthM: 7, widthM: 4 }, { name: "Master Bedroom", lengthM: 5.5, widthM: 3.5 }]
};

const HeatLoadCalculator = ({ onCalculate }) => {
  const { register, control, handleSubmit, formState: { errors }, watch, reset } = useForm({
    defaultValues: { projectName: "", buildingType: "HDB", climateZone: "tropical", zones: buildingPresets["HDB"] }
  });

  const { fields, append, remove } = useFieldArray({ control, name: "zones" });
  const [result, setResult] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const buildingType = watch("buildingType");

  useEffect(() => {
    reset((prev) => ({ ...prev, zones: buildingPresets[buildingType] || [] }));
  }, [buildingType, reset]);

  const onSubmit = (data) => {
    const projectData = {
      name: data.projectName,
      buildingType: data.buildingType,
      climateZone: data.climateZone,
      zones: data.zones.map(zone => ({
        ...zone,
        areaM2: zone.lengthM * zone.widthM,
        occupants: parseInt(zone.occupants) || 1
      }))
    };
    const resultData = heatLoadService.calculateHeatLoad(projectData);
    setResult(resultData);
    setProjectData(projectData);
    if (onCalculate) onCalculate(projectData, resultData);
  };

  const handleReset = () => {
    reset();
    setResult(null);
    setProjectData(null);
  };

  const handleDownloadPDF = () => {
    if (result && projectData) {
      generatePDF(projectData, result);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">Heat Load Calculator</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Project Name</label>
          <input
            {...register("projectName", { required: "Project name is required" })}
            className="mt-1 p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-green-500"
          />
          {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Building Type</label>
          <select
            {...register("buildingType")}
            className="mt-1 p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-green-500"
          >
            <option value="HDB">HDB</option>
            <option value="Condo">Condo</option>
            <option value="Landed">Landed</option>
          </select>
        </div>

        {fields.map((field, index) => {
          const lengthM = watch(`zones.${index}.lengthM`) || 0;
          const widthM = watch(`zones.${index}.widthM`) || 0;
          const area = lengthM * widthM;

          return (
            <div key={field.id} className="border p-4 rounded-md dark:border-gray-600 dark:bg-gray-700 relative">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Zone Name</label>
                  <input
                    {...register(`zones.${index}.name`, { required: "Zone name is required" })}
                    className="mt-1 p-2 border rounded w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                  {errors.zones?.[index]?.name && <p className="text-red-500 text-sm mt-1">{errors.zones[index].name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Length (m)</label>
                  <input
                    type="number"
                    step="0.1"
                    {...register(`zones.${index}.lengthM`, {
                      required: "Length is required",
                      min: { value: 0.1, message: "Length must be at least 0.1m" }
                    })}
                    className="mt-1 p-2 border rounded w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                  {errors.zones?.[index]?.lengthM && <p className="text-red-500 text-sm mt-1">{errors.zones[index].lengthM.message}</p>}
                  {lengthM > 50 && <p className="text-yellow-500 text-sm mt-1">⚠ Length seems unusually high</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Width (m)</label>
                  <input
                    type="number"
                    step="0.1"
                    {...register(`zones.${index}.widthM`, {
                      required: "Width is required",
                      min: { value: 0.1, message: "Width must be at least 0.1m" }
                    })}
                    className="mt-1 p-2 border rounded w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                  {errors.zones?.[index]?.widthM && <p className="text-red-500 text-sm mt-1">{errors.zones[index].widthM.message}</p>}
                  {widthM > 50 && <p className="text-yellow-500 text-sm mt-1">⚠ Width seems unusually high</p>}
                </div>

                <div className="relative">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 cursor-help">
                      Occupants
                    </label>
                    <div className="absolute hidden group-hover:block w-64 p-2 bg-gray-800 dark:bg-gray-600 text-white dark:text-gray-200 text-xs rounded shadow-lg -top-10 left-0 z-10">
                      Number of people typically in this room at the same time. Each person adds heat (e.g., 0.05 kW per person). Default is 1 if not specified.
                    </div>
                  </div>
                  <input
                    type="number"
                    title="Number of people typically in this room at the same time. Each person adds heat (e.g., 0.05 kW per person). Default is 1 if not specified."
                    {...register(`zones.${index}.occupants`, { min: 0 })}
                    className="mt-1 p-2 border rounded w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  🧮 Auto-Calculated Area: <strong>{area.toFixed(1)} m²</strong>
                </p>

                <div
                  className="border bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center text-xs"
                  style={{ width: `${Math.min(widthM * 8, 200)}px`, height: `${Math.min(lengthM * 8, 200)}px` }}
                >
                  📏 Room Size Preview
                </div>

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm"
                >
                  Remove Zone
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => append({ name: `Room ${fields.length + 1}`, lengthM: 0, widthM: 0, occupants: 1 })}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            + Add Zone
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
          >
            Calculate & Save
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700"
          >
            Reset Form
          </button>
        </div>
      </form>

      {result && projectData && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Results</h2>
          <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-600">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Detailed Results</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-200">
              {result.zones.map((z, i) => (
                <li key={i}>
                  <strong>{z.name}</strong>: {z.areaM2.toFixed(1)} m² → {z.heatLoadKw.toFixed(2)} kW ({z.heatLoadBtu.toLocaleString()} BTU/hr)
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-gray-700 dark:text-gray-200">
              <p><strong>Total Heat Load:</strong> {result.totalHeatLoadKw.toFixed(2)} kW</p>
              <p><strong>Total BTU/hr:</strong> {result.totalHeatLoadBtu.toLocaleString()}</p>
              <h4 className="mt-2 text-md font-medium text-green-700 dark:text-green-300">Recommended Cooling Capacity by Zone</h4>
              {result.recommendations.map((rec, i) => (
                <p key={i} className="ml-4">{rec}</p>
              ))}
            </div>
            <button
              onClick={handleDownloadPDF}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
            >
              Download PDF Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeatLoadCalculator;