import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import heatLoadService from "./HeatLoadService";
import { generatePDF } from "./pdfGenerator";
import SEO from "../components/SEO";

const buildingPresets = {
  HDB: [
    { name: "Living Room", lengthM: 5, widthM: 3, occupants: 2 },
    { name: "Bedroom", lengthM: 4, widthM: 2.5, occupants: 1 },
  ],
  Condo: [
    { name: "Living Room", lengthM: 6, widthM: 3.5, occupants: 2 },
    { name: "Bedroom", lengthM: 4.5, widthM: 3, occupants: 1 },
  ],
  Landed: [
    { name: "Living Room", lengthM: 7, widthM: 4, occupants: 2 },
    { name: "Master Bedroom", lengthM: 5.5, widthM: 3.5, occupants: 2 },
  ],
};

const fieldClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 dark:border-white/10 dark:bg-slate-950/40 dark:text-white";

const labelClass =
  "text-sm font-medium text-slate-700 dark:text-slate-200";

const HeatLoadCalculator = ({ onCalculate }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      projectName: "",
      buildingType: "HDB",
      climateZone: "tropical",
      zones: buildingPresets.HDB,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "zones",
  });

  const [result, setResult] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const buildingType = watch("buildingType");

  useEffect(() => {
    reset((prev) => ({
      ...prev,
      zones: buildingPresets[buildingType] || [],
    }));
  }, [buildingType, reset]);

  const onSubmit = (data) => {
    const project = {
      name: data.projectName,
      buildingType: data.buildingType,
      climateZone: data.climateZone,
      zones: data.zones.map((zone) => ({
        ...zone,
        areaM2: (parseFloat(zone.lengthM) || 0) * (parseFloat(zone.widthM) || 0),
        occupants: parseInt(zone.occupants, 10) || 1,
      })),
    };

    const resultData = heatLoadService.calculateHeatLoad(project);
    setResult(resultData);
    setProjectData(project);
    if (onCalculate) onCalculate(project, resultData);
  };

  const handleReset = () => {
    reset({
      projectName: "",
      buildingType: "HDB",
      climateZone: "tropical",
      zones: buildingPresets.HDB,
    });
    setResult(null);
    setProjectData(null);
  };

  const handleDownloadPDF = () => {
    if (result && projectData) {
      generatePDF(projectData, result);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SEO
        title="Heat load calculator"
        description="Estimate zone-by-zone cooling loads and export a PDF summary for early design review."
        path="/services/heatload-calculation"
        image="https://we-engineering.net/banner.png"
      />
      <section className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
            Heat load tool
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Heat load calculator
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            Estimate zone-by-zone cooling loads, then export a PDF summary for planning or early design review.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            "Fast zone-by-zone sizing",
            "Project summary export",
            "Useful for early-stage planning",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Project details
              </h2>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>Project name</label>
                  <input
                    {...register("projectName", {
                      required: "Project name is required",
                    })}
                    className={fieldClass}
                    placeholder="e.g. Office fit-out"
                  />
                  {errors.projectName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.projectName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Building type</label>
                  <select {...register("buildingType")} className={fieldClass}>
                    <option value="HDB">HDB</option>
                    <option value="Condo">Condo</option>
                    <option value="Landed">Landed</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>Climate zone</label>
                  <select {...register("climateZone")} className={fieldClass}>
                    <option value="tropical">Tropical</option>
                    <option value="humid">Humid</option>
                    <option value="dry">Dry</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Zones
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Add one card for each room or area.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    append({
                      name: `Room ${fields.length + 1}`,
                      lengthM: 0,
                      widthM: 0,
                      occupants: 1,
                    })
                  }
                  className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  + Add zone
                </button>
              </div>

              <div className="mt-5 grid gap-4">
                {fields.map((field, index) => {
                  const lengthM = watch(`zones.${index}.lengthM`) || 0;
                  const widthM = watch(`zones.${index}.widthM`) || 0;
                  const area = lengthM * widthM;

                  return (
                    <div
                      key={field.id}
                      className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/30"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                          Zone {index + 1}
                        </h3>
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="md:col-span-2">
                          <label className={labelClass}>Zone name</label>
                          <input
                            {...register(`zones.${index}.name`, {
                              required: "Zone name is required",
                            })}
                            className={fieldClass}
                            placeholder="e.g. Meeting room"
                          />
                          {errors.zones?.[index]?.name && (
                            <p className="mt-2 text-sm text-red-500">
                              {errors.zones[index].name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className={labelClass}>Length (m)</label>
                          <input
                            type="number"
                            step="0.1"
                            {...register(`zones.${index}.lengthM`, {
                              required: "Length is required",
                              min: {
                                value: 0.1,
                                message: "Length must be at least 0.1m",
                              },
                            })}
                            className={fieldClass}
                          />
                          {errors.zones?.[index]?.lengthM && (
                            <p className="mt-2 text-sm text-red-500">
                              {errors.zones[index].lengthM.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className={labelClass}>Width (m)</label>
                          <input
                            type="number"
                            step="0.1"
                            {...register(`zones.${index}.widthM`, {
                              required: "Width is required",
                              min: {
                                value: 0.1,
                                message: "Width must be at least 0.1m",
                              },
                            })}
                            className={fieldClass}
                          />
                          {errors.zones?.[index]?.widthM && (
                            <p className="mt-2 text-sm text-red-500">
                              {errors.zones[index].widthM.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className={labelClass}>Occupants</label>
                          <input
                            type="number"
                            min="0"
                            {...register(`zones.${index}.occupants`)}
                            className={fieldClass}
                            placeholder="1"
                          />
                        </div>

                        <div className="md:col-span-2 flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm dark:bg-white/5 dark:text-slate-300">
                          <span>Auto-calculated area</span>
                          <strong className="text-slate-900 dark:text-white">
                            {area.toFixed(1)} m²
                          </strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Calculate &amp; save
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                What the calculator returns
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  "Zone area",
                  "Estimated heat load",
                  "Total cooling load",
                  "Suggested AC capacity",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700 dark:bg-white/5 dark:text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {result && projectData ? (
              <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-5 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10">
                <h2 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">
                  Results
                </h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Total heat load
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                      {result.totalHeatLoadKw.toFixed(2)} kW
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Total capacity
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                      {result.totalHp.toFixed(1)} HP
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Zone breakdown
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
                    {result.zones.map((z) => (
                      <li key={z.name} className="flex flex-wrap gap-x-2">
                        <strong>{z.name}</strong>
                        <span className="text-slate-500 dark:text-slate-400">
                          {z.areaM2.toFixed(1)} m²
                        </span>
                        <span>
                          {z.heatLoadKw.toFixed(2)} kW
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Recommendations
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
                    {result.recommendations.map((rec) => (
                      <li key={rec}>• {rec}</li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="mt-5 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Download PDF report
                </button>
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                Run the calculation to see the zone loads, total cooling requirement, and suggested capacity.
              </div>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default HeatLoadCalculator;
