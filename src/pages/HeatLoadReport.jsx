import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const HeatLoadReport = ({ result, project }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 10;

    // Add logo from public folder
    doc.addImage("/welogo.png", "PNG", 10, y, 35, 15); // Static path, adjust size as needed
    y += 20;

    // Letterhead
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text("WE Engineering Pte Ltd", 105, y, { align: "center" }); y += 6;
    doc.text("WCEGA Tower, 21 Bukit Batok Cres, #29-81, Singapore 658065", 105, y, { align: "center" }); y += 6;
    doc.text("UEN: 202447757M | Location: Singapore", 105, y, { align: "center" }); y += 10;

    // Title
    doc.setFontSize(16);
    doc.text("Heat Load Calculation Report", 105, y, { align: "center" });
    y += 12;

    // Project Info
    doc.setFontSize(11);
    doc.text(`Project Name: ${project.projectName || "Unnamed Project"}`, 10, y); y += 6;
    doc.text(`Building Type: ${project.buildingType}`, 10, y); y += 6;
    doc.text(`Climate Zone: ${project.climateZone}`, 10, y); y += 10;

    // Zone Breakdown Table
    doc.setFontSize(12);
    doc.text("Zone Breakdown", 10, y);
    y += 6;

    // Extract recommended HP from recommendations
    const zoneRecommendations = result.recommendations.reduce((acc, rec) => {
      const match = rec.match(/• (.+?): (\d+\.\d+) kW → Recommended Cooling Capacity: (\d+\.\d+) HP/);
      if (match) {
        acc[match[1]] = parseFloat(match[3]);
      }
      return acc;
    }, {});

    autoTable(doc, {
      head: [["Zone", "Area (m²)", "Heat Load (kW)", "BTU/hr", "Recommended HP"]],
      body: result.zones.map(z => [
        z.name,
        z.areaM2.toFixed(1),
        z.heatLoadKw.toFixed(2),
        z.heatLoadBtu.toLocaleString(),
        zoneRecommendations[z.name]?.toFixed(1) || "N/A"
      ]),
      startY: y,
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [22, 160, 133] }
    });

    y = doc.lastAutoTable.finalY + 10;

    // Summary
    doc.setFontSize(12);
    doc.text("Summary", 10, y); y += 6;
    doc.text(`Total Heat Load: ${result.totalHeatLoadKw.toFixed(2)} kW`, 10, y); y += 6;
    doc.text(`Estimated BTU/hr: ${result.totalHeatLoadBtu.toLocaleString()}`, 10, y); y += 6;

    // Recommendations
    y += 10;
    doc.setFontSize(12);
    doc.text("Recommendations", 10, y); y += 6;
    const generalRecommendations = result.recommendations.filter(rec => !rec.includes("kW →"));
    generalRecommendations.forEach((rec) => {
      doc.text(`• ${rec}`, 14, y);
      y += 6;
    });

    // Disclaimer
    y = 270;
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text("Disclaimer: This is a simplified estimation. Please consult a licensed mechanical engineer for final sizing and selection.", 10, y, { maxWidth: 180 });

    doc.save(`${project.projectName || "heatload"}-report.pdf`);
  };

  return (
    <div className="mt-6">
      <button
        onClick={downloadPDF}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
      >
        📄 Download PDF Report
      </button>
    </div>
  );
};

export default HeatLoadReport;