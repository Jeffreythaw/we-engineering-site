import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generatePDF = (project, result) => {
    const doc = new jsPDF("p", "mm", "a4");
    let y = 10; // Start closer to top for letterhead

    // Debug: Log the project object to check its structure
    console.log("Project object:", project);

    // **Header Section (Letterhead) - Two-column layout with more space
    const logoWidth = 15.6; // Matching h-14 (56px ≈ 15.6 mm)
    const logoHeight = 15.6;
    doc.addImage("/welogo.png", "PNG", 10, y, logoWidth, logoHeight); // Logo in left column
    y += 2; // Increased vertical adjustment for space

    doc.setFontSize(10); // Match compact style
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0);
    doc.text("WE Engineering Pte Ltd", 105, y + 4, { align: "center" }); // Centered company name
    doc.setFont("helvetica", "normal");
    y += 5; // Increased space between lines
    doc.text("WCEGA Tower, 21 Bukit Batok Cres, #29-81, Singapore 658065", 105, y + 4, { align: "center" });
    y += 5; // Increased space between lines
    doc.text("UEN: 202447757M | Location: Singapore", 105, y + 4, { align: "center" });
    y += 18; // Increased space after letterhead

    // **Title and Date**
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Heat Load Calculation Report", 105, y, { align: "center" });
    y += 8;

    // Date section with small font size and user time zone
    doc.setFontSize(8); // Smaller font for the date
    doc.setFont("helvetica", "normal");
    const now = new Date();
    const dateOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    const formattedDate = now.toLocaleString('en-US', dateOptions);
    doc.text(`Generated on: ${formattedDate}`, 145, y, { align: "left" });

    doc.setFontSize(10); // Restore to your normal size for next content
    y += 10;

    // **Project Details**
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Project Details", 10, y);
    doc.setFont("helvetica", "normal");
    y += 10;
    // Use project.name instead of project.projectName
    const projectName = project && project.name ? project.name : "Unnamed Project";
    doc.text(`Project Name: ${projectName}`, 10, y); y += 6;
    doc.text(`Building Type: ${project && project.buildingType ? project.buildingType : ""}`, 10, y); y += 6;
    doc.text(`Climate Zone: ${project && project.climateZone ? project.climateZone : ""}`, 10, y); y += 10;

    // **Zone Breakdown Table**
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Zone Breakdown", 10, y);
    y += 10;

    autoTable(doc, {
        startY: y,
        head: [["Zone", "Area (m²)", "Heat Load (kW)", "BTU/hr"]],
        body: result.zones.map((z) => [
            z.name,
            z.areaM2.toFixed(1),
            z.heatLoadKw.toFixed(2),
            z.heatLoadBtu.toLocaleString(),
        ]),
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 2 },
        headStyles: { fillColor: [22, 160, 133], textColor: [255, 255, 255] },
        columnStyles: { 0: { halign: "left" }, 2: { halign: "right" }, 3: { halign: "right" } },
    });

    y = doc.lastAutoTable.finalY + 10;

    // **Summary Section**
    doc.setFontSize(10.5);
    doc.setFont("helvetica", "bold");
    doc.text("Summary", 10, y);
    doc.setFont("helvetica", "normal");
    y += 10;
    const hpBuffer = { HDB: 1.1, Condo: 1.1, Landed: 1.15 }[project && project.buildingType ? project.buildingType : "HDB"] || 1.1;
    const recommendedHP = (result.totalHeatLoadKw / 2.6) * hpBuffer;
    doc.text(`Total Heat Load: ${result.totalHeatLoadKw.toFixed(2)} kW`, 10, y); y += 6;
    doc.text(`Estimated BTU/hr: ${result.totalHeatLoadBtu.toLocaleString()}`, 10, y); y += 6;
    doc.text(`Recommended AC Capacity: ${recommendedHP.toFixed(1)} HP`, 10, y); y += 10;

    // **Recommendations Section**
    doc.setFontSize(10.5);
    doc.setFont("helvetica", "bold");
    doc.text("Recommendations", 10, y);
    doc.setFont("helvetica", "normal");
    y += 6;

    result.zones.forEach((z) => {
        const zoneHP = (z.heatLoadKw / 2.6) * hpBuffer;
        doc.text(`• ${z.name}: ${z.heatLoadKw.toFixed(2)} kW → Recommended Cooling Capacity: ${zoneHP.toFixed(1)} HP`, 14, y);
        y += 6;
    });
    doc.text("• Select units with at least 5-tick NEA energy rating.", 14, y); y += 6;
    doc.text("• Regular maintenance improves efficiency by 10-15%.", 14, y); y += 10;

    // **Singapore-Specific Disclaimer**
    const pageCount = doc.getNumberOfPages();
    doc.setPage(pageCount);

    const disclaimerText = [
        "This is a simplified estimation based on standard calculations and environmental factors.",
        "Actual cooling requirements may vary based on building insulation, occupancy levels, and external climate conditions.",
        "Consult a licensed mechanical engineer before finalizing equipment specifications.",
        "All recommendations comply with Singapore's energy efficiency guidelines and NEA standards.",
        "For official approval and verification, refer to BCA and NEA regulations governing cooling systems.",
        "The values provided in this report are for general guidance only and do not substitute professional engineering assessments.",
    ];

    const disclaimerLineHeight = 3.8;
    const disclaimerTotalHeight = disclaimerText.length * disclaimerLineHeight + 6; // +6 for "Disclaimer:" header

    let footerY = 297 - disclaimerTotalHeight - 5; // leave 5mm bottom margin

    // If footerY is too close to previous content, add a new page
    if (footerY < y + 10) {
        doc.addPage();
        footerY = 297 - disclaimerTotalHeight - 5;
    }

    // Move to last page (in case addPage was called)
    const lastPage = doc.getNumberOfPages();
    doc.setPage(lastPage);

    // Draw disclaimer at bottom of page
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.setFont("helvetica", "bold");
    doc.text("Disclaimer:", 10, footerY);    // <--- ONLY THIS, not the previous one!
    doc.setFont("helvetica", "normal");

    let y_disclaimer = footerY + 5;
    disclaimerText.forEach(line => {
        doc.text(`• ${line}`, 12, y_disclaimer);
        y_disclaimer += disclaimerLineHeight;
    });

    doc.save(`${project && project.name ? `${project.name}-report` : "heatload-report"}.pdf`);
};