import React, { useState } from "react";
import jsPDF from "jspdf";

const BASE_URL = process.env.REACT_APP_API_BASE_HL_URL;

const HeatLoadCalculator = () => {
  const [unit, setUnit] = useState("sqft");
  const [area, setArea] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const calculateBTU = () => {
    const parsedArea = parseFloat(area);
    if (isNaN(parsedArea)) {
      setResult(null);
      setMessage("❌ Please enter a valid number for area.");
      return;
    }

    const factor = unit === "sqm" ? 10.764 : 1;
    const btu = parsedArea * factor * 65;
    const finalBTU = btu.toFixed(0);
    const finalHP = Math.round((btu / 12000) * 10) / 10;

    setResult({ btu: finalBTU, hp: finalHP });
    saveToServer(finalBTU, finalHP);
  };

  const saveToServer = async (btu, hp) => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${BASE_URL}/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unit,
          area: parseFloat(area),
          resultBTU: parseFloat(btu),
          estimatedHP: parseFloat(hp),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Save failed");

      setMessage("✅ Saved successfully!");
      setArea(""); // Clear input
    } catch (error) {
      console.error("Failed to save:", error);
      setMessage("❌ Failed to save");
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Heat Load Calculation Summary", 10, 10);
    doc.text(`Area: ${area} ${unit}`, 10, 20);
    doc.text(`Estimated BTU/hr: ${result?.btu}`, 10, 30);
    doc.text(`Recommended HP: ${result?.hp}`, 10, 40);
    doc.save("heatload-summary.pdf");
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">
        Heat Load Calculator
      </h3>
      <p>Estimate cooling requirement (BTU/hr) based on your room size:</p>

      <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder={`Area (${unit})`}
          className="p-2 rounded border w-full sm:w-52 dark:bg-gray-700 dark:border-gray-600"
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="sqft">Square Feet (ft²)</option>
          <option value="sqm">Square Meters (m²)</option>
        </select>
        <button
          onClick={calculateBTU}
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
          }`}
        >
          {loading ? "Saving..." : "Calculate"}
        </button>
      </div>

      {result && (
        <div className="mt-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <p>
            Estimated Heat Load: <strong>{result.btu} BTU/hr</strong> — approx.{" "}
            <strong>{result.hp} HP</strong>
          </p>
          <button
            onClick={downloadPDF}
            className="bg-gray-700 text-white px-3 py-1 rounded"
          >
            Download PDF
          </button>
        </div>
      )}

      {message && (
        <p className="text-sm mt-3 text-green-600 dark:text-green-400">
          {message}
        </p>
      )}
    </div>
  );
};

export default HeatLoadCalculator;