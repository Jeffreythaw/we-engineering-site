class HeatLoadService {
    static STORAGE_KEY = "heatLoadProjects";

    saveProject(project) {
        const projects = this.getProjects();
        const projectData = {
            id: project.id || crypto.randomUUID(),
            name: project.name,
            buildingType: project.buildingType,
            climateZone: project.climateZone,
            calculationMode: project.calculationMode || "detailed",
            zones: project.zones,
            createdAt: new Date().toISOString(),
        };

        if (project.id) {
            const index = projects.findIndex(p => p.id === project.id);
            if (index !== -1) projects[index] = projectData;
        } else {
            projects.push(projectData);
        }

        localStorage.setItem(HeatLoadService.STORAGE_KEY, JSON.stringify(projects));
        return projectData;
    }

    getProjects() {
        const data = localStorage.getItem(HeatLoadService.STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    }

    getProjectById(projectId) {
        const projects = this.getProjects();
        return projects.find(p => p.id === projectId) || null;
    }

    calculateHeatLoad(projectData) {
        const buildingFactors = {
            HDB: { base: 0.18, occupancy: 0.05, defaultCeilingHeight: 2.6, defaultWindowArea: 0.15, defaultOccupants: 1 },
            Condo: { base: 0.19, occupancy: 0.06, defaultCeilingHeight: 2.7, defaultWindowArea: 0.20, defaultOccupants: 2 },
            Landed: { base: 0.20, occupancy: 0.07, defaultCeilingHeight: 2.8, defaultWindowArea: 0.25, defaultOccupants: 3 },
            Commercial: { base: 0.25, occupancy: 0.10, lighting: 20, defaultCeilingHeight: 3.0 },
            Industrial: { base: 0.27, occupancy: 0.08, machinery: 25, defaultCeilingHeight: 3.5 }
        };

        const config = buildingFactors[projectData.buildingType] || buildingFactors.HDB;
        const isDetailedMode = projectData.calculationMode === "detailed";
        const outdoorTempC = 35;
        const indoorTempC = 24;

        let totalAreaM2 = 0;
        const zones = projectData.zones.map(zone => {
            const area = (parseFloat(zone.lengthM) || 0) * (parseFloat(zone.widthM) || 0);
            totalAreaM2 += area;

            const ceilingHeight = parseFloat(zone.ceilingHeightM) || config.defaultCeilingHeight;
            const insulationLevel = zone.insulationLevel || "medium";
            const orientation = zone.orientation || "N";
            const glazingFactor = this.getGlazingFactor(zone.windowGlassType || "double");
            const windowAreaM2 = parseFloat(zone.windowAreaM2) || (area * (config.defaultWindowArea || 0.15));
            const occupants = parseInt(zone.occupants) || config.defaultOccupants || 0;
            const applianceWatts = parseInt(zone.applianceWatts) || 0;
            const materialType = zone.materialType || "drywall";

            let heatLoadKw;

            if (!isDetailedMode) {
                heatLoadKw = area * config.base + occupants * config.occupancy + windowAreaM2 * 0.4;
            } else {
                const volume = Math.max(1, area * ceilingHeight);
                const tempDelta = (outdoorTempC - indoorTempC) / 10;
                const insulationFactor = this.getInsulationFactor(insulationLevel);
                const orientationFactor = this.getOrientationFactor(orientation);
                const thermalMassAdjustment = this.getThermalMassAdjustment(materialType);

                const baseLoad = volume * config.base * insulationFactor * orientationFactor * glazingFactor * tempDelta;
                const windowLoad = windowAreaM2 * 0.4 * glazingFactor;
                const occupantLoad = occupants * config.occupancy;
                const applianceLoad = applianceWatts / 1000;
                const lightingLoad = config.lighting ? area * config.lighting / 1000 : 0;
                const machineryLoad = config.machinery ? area * config.machinery / 1000 : 0;

                heatLoadKw = (baseLoad + windowLoad + occupantLoad + applianceLoad + lightingLoad + machineryLoad) * thermalMassAdjustment;
            }

            return {
                name: zone.name,
                areaM2: area,
                heatLoadKw: parseFloat(heatLoadKw.toFixed(2)),
                heatLoadBtu: parseFloat((heatLoadKw * 3412.142).toFixed(0))
            };
        });

        zones.sort((a, b) => a.name.localeCompare(b.name));

        const totalHeatLoadKw = zones.reduce((sum, zone) => sum + zone.heatLoadKw, 0);
        const totalHeatLoadBtu = totalHeatLoadKw * 3412.142;
        const hpBufferMultiplier = this.getHpBufferMultiplier(projectData.buildingType);
        // --- AIRCON HP: 1 HP = 2.6 kW ---
        const totalHp = (totalHeatLoadKw / 2.6) * hpBufferMultiplier;

        const recommendations = this.generateRecommendations(zones, totalHeatLoadKw, totalHp, projectData.buildingType);

        return {
            totalAreaM2,
            totalHeatLoadKw: parseFloat(totalHeatLoadKw.toFixed(2)),
            totalHeatLoadBtu: parseFloat(totalHeatLoadBtu.toFixed(0)),
            totalHp: parseFloat(totalHp.toFixed(1)),
            zones,
            recommendations
        };
    }

    getInsulationFactor(level) {
        return { low: 1.15, medium: 1.0, high: 0.85 }[level] || 1.0;
    }

    getOrientationFactor(orientation) {
        return { N: 0.9, S: 0.95, E: 1.1, W: 1.15, NE: 1.02, NW: 1.02, SE: 1.08, SW: 1.08 }[orientation] || 1.0;
    }

    getGlazingFactor(glassType) {
        return { single: 1.15, double: 1.05, tinted: 0.95 }[glassType] || 1.0;
    }

    getThermalMassAdjustment(material) {
        return { concrete: 1.2, drywall: 0.9, glass: 1.3 }[material] || 1.0;
    }

    getHpBufferMultiplier(buildingType) {
        return { HDB: 1.1, Condo: 1.1, Landed: 1.15, Commercial: 1.2, Industrial: 1.25 }[buildingType] || 1.1;
    }

    // ----------- FIXED: Use Aircon HP standard 2.6kW/HP -----------
    generateRecommendations(zones, totalKw, totalHp, buildingType) {
        const recs = [`Recommended total cooling capacity: ${totalHp.toFixed(1)} HP`];
        zones.forEach(z => {
            const zoneHP = (z.heatLoadKw / 2.6) * this.getHpBufferMultiplier(buildingType);
            recs.push(`• ${z.name}: ${z.heatLoadKw.toFixed(2)} kW → Recommended Cooling Capacity: ${zoneHP.toFixed(1)} HP`);
        });
        recs.push("Select units with at least 5-tick NEA energy rating");
        recs.push("Regular maintenance improves efficiency by 10-15%");
        return recs;
    }
}

const heatLoadService = new HeatLoadService();
export default heatLoadService;