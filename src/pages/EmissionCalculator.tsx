import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Car, Home, Recycle, Wrench, TrendingDown, Download, User, Mail } from "lucide-react";

// EmissionsCalculator.tsx
// TypeScript React single-file calculator component built with TailwindCSS classes.
// - Uses DM Sans for main text (assume font is loaded globally)
// - Uses brand colors: Black #000000, Blue #4696D2, Green #82C92C
// - Replace EGRID_DATA lookup with your real dataset (import or API) as needed

// ----------------------
// Types
// ----------------------
type MilesInputType = 1 | 2; // 1 = miles/week, 2 = miles/year

type Vehicle = {
  id: number;
  miles: number;
  milesInputType: MilesInputType;
  mpg: number;
};

// ----------------------
// Constants / Assumptions
// ----------------------
const MAX_VEHICLES = 5;
const CO2_PER_GALLON_GAS = 19.6; // lbs CO2 / gallon
const CO2_PER_GALLON_FUELOIL = 22.61; // lbs CO2 / gallon fuel oil
const CO2_PER_GALLON_PROPANE = 12.43; // lbs CO2 / gallon propane
const CO2_PER_CCF_NATGAS = 119.58; // lbs CO2 / thousand cubic feet
const WASTE_SAVINGS = {
  aluminum: 89,
  glass: 25,
  plastic: 35,
  newspaper: 113,
  magazines: 27,
};
const WASHER_SAVINGS = 376; // lbs CO2 / year

// Average price placeholders (used when user inputs dollars instead of units)
const AVG_PRICE_PER_CCF = 15; // $ / CCF (example) - replace with real data
const AVG_PRICE_PER_KWH = 0.15; // $ / kWh (example) - replace with real data

// ----------------------
// Placeholder EGRID lookup
// ----------------------
// Replace this with a real data import or an API call. This function returns
// lbs CO2 per kWh for the given US ZIP code. For now it returns a fallback.
const getEmissionFactorFromZip = (zip: string): number => {
  // Example: look up from EGRID_DATA if available
  // if (!EGRID_DATA[zip]) return 0.92; // fallback lbs CO2 / kWh
  // return EGRID_DATA[zip];
  // For demo, return 0.92 lbs/kWh (approximate U.S. average)
  if (!zip) return 0.92;
  return 0.92;
};

interface LoginModalProps {
  isOpen: boolean;
  onLogin: (name: string, email: string) => void;
}

const LoginModal = ({ isOpen, onLogin }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (email && name) {
      onLogin(name, email);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl" style={{ color: '#000000' }}>
            <User className="h-6 w-6" style={{ color: '#4696D2' }} />
            Welcome to Carbon Calculator
          </DialogTitle>
          <DialogDescription>
            Please share your details so we can personalize your carbon footprint report
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#4696D2' }} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-0"
                style={{ backgroundColor: '#f8fdf8', border: '1px solid #e5e7eb' }}
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#4696D2' }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-0"
                style={{ backgroundColor: '#f0f7ff', border: '1px solid #e5e7eb' }}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <Button 
            onClick={handleLogin}
            disabled={!email || !name}
            className="w-full py-3 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#4696D2' }}
          >
            Begin My Carbon Assessment
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Your information is used only for personalizing your carbon footprint report.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalEmissions: number;
  totalEmissionsBeforeUpgrades: number;
  userName?: string;
  breakdownData: {
    vehicles: number;
    homeEnergy: number;
    wasteSavings: number;
    upgradesSavings: number;
  };
}

const SummaryModal = ({ isOpen, onClose, totalEmissions, totalEmissionsBeforeUpgrades, userName, breakdownData }: SummaryModalProps) => {
  const lbsToTons = (lbs: number) => lbs / 2204.62262;

  const getRecommendations = () => {
    const recommendations = [];
    
    if (breakdownData.homeEnergy > 5000) {
      recommendations.push("Consider switching to renewable energy sources or improving home insulation");
    }
    if (breakdownData.vehicles > 4000) {
      recommendations.push("Explore hybrid/electric vehicles or public transportation options");
    }
    if (breakdownData.wasteSavings < 200) {
      recommendations.push("Increase recycling efforts to reduce your carbon footprint");
    }
    
    return recommendations;
  };

  const exportData = () => {
    const data = {
      totalEmissions,
      totalEmissionsBeforeUpgrades,
      breakdown: breakdownData,
      date: new Date().toISOString(),
      recommendations: getRecommendations()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'carbon-footprint-report.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl" style={{ color: '#000000' }}>
            <TreePine className="h-6 w-6" style={{ color: '#82C92C' }} />
            {userName ? `${userName}'s Carbon Footprint Report` : 'Your Carbon Footprint Report'}
          </DialogTitle>
          <DialogDescription>
            Detailed breakdown of your annual CO2 emissions
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Total Emissions */}
          <Card className="border-2" style={{ borderColor: '#82C92C', backgroundColor: '#f8fdf8' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#000000' }}>
                  {totalEmissions.toLocaleString()} lbs
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Total Annual CO2 Emissions (After Upgrades)
                </div>
                <Badge variant="secondary" className="mt-2" style={{ backgroundColor: '#4696D2', color: 'white' }}>
                  {lbsToTons(totalEmissions).toFixed(3)} metric tons
                </Badge>
                <div className="mt-2 text-sm text-gray-600">
                  Before upgrades: {totalEmissionsBeforeUpgrades.toLocaleString()} lbs
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Breakdown */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2" style={{ color: '#000000' }}>
              <TrendingDown className="h-4 w-4" style={{ color: '#4696D2' }} />
              Emissions Breakdown
            </h3>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#f0f7ff' }}>
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4" style={{ color: '#4696D2' }} />
                  <span className="text-sm font-medium">Vehicles</span>
                </div>
                <span className="font-semibold">{breakdownData.vehicles.toLocaleString()} lbs</span>
              </div>
              
              <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#f8fdf8' }}>
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" style={{ color: '#82C92C' }} />
                  <span className="text-sm font-medium">Home Energy</span>
                </div>
                <span className="font-semibold">{breakdownData.homeEnergy.toLocaleString()} lbs</span>
              </div>
              
              <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#f8fdf8' }}>
                <div className="flex items-center gap-2">
                  <Recycle className="h-4 w-4" style={{ color: '#82C92C' }} />
                  <span className="text-sm font-medium">Waste Savings</span>
                </div>
                <span className="font-semibold" style={{ color: '#82C92C' }}>-{breakdownData.wasteSavings.toLocaleString()} lbs</span>
              </div>
              
              {breakdownData.upgradesSavings > 0 && (
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#f0f7ff' }}>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" style={{ color: '#4696D2' }} />
                    <span className="text-sm font-medium">Upgrade Savings</span>
                  </div>
                  <span className="font-semibold" style={{ color: '#4696D2' }}>-{breakdownData.upgradesSavings.toLocaleString()} lbs</span>
                </div>
              )}
            </div>
          </div>

          {/* Recommendations */}
          {getRecommendations().length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold" style={{ color: '#000000' }}>Recommendations</h3>
              <div className="space-y-2">
                {getRecommendations().map((rec, index) => (
                  <div key={index} className="p-3 border-l-4 rounded" style={{ backgroundColor: '#fffdf0', borderLeftColor: '#82C92C' }}>
                    <p className="text-sm text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button onClick={exportData} variant="outline" className="flex items-center gap-2" style={{ borderColor: '#4696D2', color: '#4696D2' }}>
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button onClick={onClose} style={{ backgroundColor: '#82C92C' }} className="hover:opacity-90">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// ----------------------
// Main Component
// ----------------------
export default function EmissionsCalculator() {
  // Household
  const [zip, setZip] = useState("");
  const [heatingSource, setHeatingSource] = useState<number>(1);

  // Vehicles
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, miles: 0, milesInputType: 2, mpg: 25 },
  ]);
  const [maintenance, setMaintenance] = useState<1 | 2>(2); // 1 = yes, 2 = no

  // Home Energy
  const [natgasValue, setNatgasValue] = useState<number>(0);
  const [natgasUnit, setNatgasUnit] = useState<1 | 2>(2); // 1 = dollars, 2 = CCF

  const [elecValue, setElecValue] = useState<number>(0);
  const [elecUnit, setElecUnit] = useState<1 | 2>(2); // 1 = dollars, 2 = kWh

  const [fuelOilMonthly, setFuelOilMonthly] = useState<number>(0);
  const [propaneMonthly, setPropaneMonthly] = useState<number>(0);

  // Waste recycling
  const [waste, setWaste] = useState({
    aluminum: false,
    glass: false,
    plastic: false,
    newspaper: false,
    magazines: false,
  });

  // Upgrades
  const [heatingUpgrade, setHeatingUpgrade] = useState(false);
  const [washerUpgrade, setWasherUpgrade] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  
  // User state
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(true);

  // ----------------------
  // Vehicle handlers
  // ----------------------
  const addVehicle = () => {
    if (vehicles.length >= MAX_VEHICLES) return;
    setVehicles((v) => [
      ...v,
      { id: Date.now(), miles: 0, milesInputType: 2, mpg: 25 },
    ]);
  };
  const removeVehicle = (id: number) => {
    setVehicles((v) => v.filter((x) => x.id !== id));
  };
  const updateVehicle = (id: number, patch: Partial<Vehicle>) => {
    setVehicles((v) => v.map((veh) => (veh.id === id ? { ...veh, ...patch } : veh)));
  };

  // ----------------------
  // User handlers
  // ----------------------
  const handleUserLogin = (name: string, email: string) => {
    setUser({ name, email });
    setShowLoginModal(false);
  };

  // ----------------------
  // Calculation helpers
  // ----------------------
  const calcAnnualMiles = (vehicle: Vehicle) => {
    if (vehicle.milesInputType === 1) return vehicle.miles * 52;
    return vehicle.miles;
  };

  const calcGallonsUsed = (vehicle: Vehicle) => {
    const annualMiles = calcAnnualMiles(vehicle);
    if (!vehicle.mpg || vehicle.mpg <= 0) return 0;
    return annualMiles / vehicle.mpg;
  };

  const calcEmissionsVehicle = (vehicle: Vehicle) => {
    const gallons = calcGallonsUsed(vehicle);
    return gallons * CO2_PER_GALLON_GAS; // lbs CO2
  };

  const vehicleEmissionsTotal = vehicles.reduce((sum, veh) => sum + calcEmissionsVehicle(veh), 0);

  const adjustedVehicleEmissions =
    maintenance === 1 ? vehicleEmissionsTotal * (1 - 0.04) : vehicleEmissionsTotal;

  // ----------------------
  // Home energy calculations
  // ----------------------
  const calcNatGasAnnualCCF = () => {
    if (natgasUnit === 1) {
      // dollars -> ccf
      const monthly_ccf = natgasValue / AVG_PRICE_PER_CCF;
      return monthly_ccf * 12;
    }
    return natgasValue * 12; // already in CCF per month
  };

  const emissionsNaturalGas = calcNatGasAnnualCCF() * CO2_PER_CCF_NATGAS;

  const calcElectricityAnnualKWh = () => {
    if (elecUnit === 1) {
      const monthly_kwh = elecValue / AVG_PRICE_PER_KWH;
      return monthly_kwh * 12;
    }
    return elecValue * 12;
  };

  const emissionFactorFromZip = getEmissionFactorFromZip(zip); // lbs / kWh
  const emissionsElectricity = calcElectricityAnnualKWh() * emissionFactorFromZip;

  const annualFuelOilGallons = fuelOilMonthly * 12;
  const emissionsFuelOil = annualFuelOilGallons * CO2_PER_GALLON_FUELOIL;

  const annualPropaneGallons = propaneMonthly * 12;
  const emissionsPropane = annualPropaneGallons * CO2_PER_GALLON_PROPANE;

  const homeEnergyTotal =
    emissionsNaturalGas + emissionsElectricity + emissionsFuelOil + emissionsPropane;

  // ----------------------
  // Waste savings
  // ----------------------
  const emissionsSavedWaste = Object.entries(waste).reduce((sum, [key, checked]) => {
    if (!checked) return sum;
    const k = key as keyof typeof WASTE_SAVINGS;
    return sum + (WASTE_SAVINGS[k] ?? 0);
  }, 0);

  // ----------------------
  // Upgrades
  // ----------------------
  const savingsHeatingUpgrade = heatingUpgrade ? emissionsNaturalGas * 0.1 : 0;
  const savingsWasherUpgrade = washerUpgrade ? WASHER_SAVINGS : 0;

  // ----------------------
  // Final totals
  // ----------------------
  const totalEmissionsBeforeUpgrades = adjustedVehicleEmissions + homeEnergyTotal - emissionsSavedWaste;
  const totalUpgradesSavings = savingsHeatingUpgrade + savingsWasherUpgrade;
  const adjustedEmissions = totalEmissionsBeforeUpgrades - totalUpgradesSavings;

  // Convert to tons
  const lbsToTons = (lbs: number) => lbs / 2204.62262; // short ton = 2204.62262 lbs

  const showSummary = () => {
    setShowModal(true);
  };

  // ----------------------
  // Render
  // ----------------------
  return (
    <div className="max-w-5xl mx-auto p-6 font-['DM_Sans',sans-serif]" style={{ color: '#000000' }}>
      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onLogin={handleUserLogin}
      />

      {/* Main Calculator - only show after user provides details */}
      {user && (
        <>
          <header className="mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TreePine className="h-10 w-10" style={{ color: '#82C92C' }} />
              <h1 className="text-4xl font-bold">Household GHG Calculator</h1>
            </div>
            <p className="text-lg text-gray-600 text-center">Estimates annual CO₂ emissions (lbs / year)</p>
          </header>

      <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#000000' }}>
          <Home className="h-6 w-6" style={{ color: '#4696D2' }} />
          1. Household Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Zip Code</label>
            <input
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))}
              className="w-full rounded px-3 py-2 focus:outline-none focus:ring-0"
              placeholder="e.g., 02139"
              inputMode="numeric"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Primary Heating Source</label>
            <select
              value={heatingSource}
              onChange={(e) => setHeatingSource(Number(e.target.value))}
              className="w-full rounded px-3 py-2 focus:outline-none focus:ring-0"
            >
              <option value={1}>Natural Gas</option>
              <option value={2}>Electric Heat</option>
              <option value={3}>Fuel Oil</option>
              <option value={4}>Propane</option>
            </select>
          </div>

          <div className="flex flex-col justify-end">
            <div className="text-sm text-gray-600">Electricity emission factor (lbs CO₂ / kWh):</div>
            <div className="mt-1 font-semibold" style={{ color: '#4696D2' }}>{emissionFactorFromZip.toFixed(3)}</div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#000000' }}>
          <Car className="h-6 w-6" style={{ color: '#82C92C' }} />
          2. Vehicles
        </h2>

        <div className="space-y-4">
          {vehicles.map((veh, idx) => (
            <div key={veh.id} className="rounded p-3" style={{ backgroundColor: '#f8fdf8' }}>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">Vehicle {idx + 1}</div>
                <div className="text-sm text-gray-600">
                  Emissions: <span style={{ color: '#82C92C' }}>{calcEmissionsVehicle(veh).toFixed(1)} lbs / year</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div>
                  <label className="block text-sm">Miles Driven</label>
                  <input
                    type="number"
                    value={veh.miles}
                    onChange={(e) => updateVehicle(veh.id, { miles: Number(e.target.value) })}
                    className="w-full rounded px-2 py-1 focus:outline-none focus:ring-0"
                    min={0}
                  />
                </div>

                <div>
                  <label className="block text-sm">Miles Input Type</label>
                  <select
                    value={veh.milesInputType}
                    onChange={(e) => updateVehicle(veh.id, { milesInputType: Number(e.target.value) as MilesInputType })}
                    className="w-full rounded px-2 py-1 focus:outline-none focus:ring-0"
                  >
                    <option value={1}>Miles per Week</option>
                    <option value={2}>Miles per Year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm">Fuel Economy (MPG)</label>
                  <input
                    type="number"
                    value={veh.mpg}
                    onChange={(e) => updateVehicle(veh.id, { mpg: Number(e.target.value) })}
                    className="w-full rounded px-2 py-1 focus:outline-none focus:ring-0"
                    min={1}
                  />
                </div>

                <div className="flex items-end gap-2">
                  {vehicles.length > 1 && (
                    <button
                      onClick={() => removeVehicle(veh.id)}
                      className="px-3 py-1 rounded text-sm hover:opacity-80"
                      style={{ backgroundColor: '#82C92C', color: 'white' }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div>
            <button
              onClick={addVehicle}
              className="px-4 py-2 rounded-lg font-semibold hover:opacity-80"
              style={{ backgroundColor: '#4696D2', color: 'white' }}
              disabled={vehicles.length >= MAX_VEHICLES}
            >
              Add Vehicle
            </button>
          </div>

          <div className="mt-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="maintenance"
                value={1}
                checked={maintenance === 1}
                onChange={() => setMaintenance(1)}
                className="mr-2"
                style={{ accentColor: '#82C92C' }}
              />
              Yes — perform regular maintenance (assume ~4% fuel savings)
            </label>
            <br />
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                name="maintenance"
                value={2}
                checked={maintenance === 2}
                onChange={() => setMaintenance(2)}
                className="mr-2"
                style={{ accentColor: '#82C92C' }}
              />
              No
            </label>
          </div>

          <div className="mt-3 font-semibold">Total Vehicle Emissions: <span style={{ color: '#82C92C' }}>{vehicleEmissionsTotal.toFixed(1)} lbs / year</span></div>
          <div className="text-sm text-gray-600">Adjusted (after maintenance): <span style={{ color: '#82C92C' }}>{adjustedVehicleEmissions.toFixed(1)} lbs / year</span></div>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#000000' }}>
          <Home className="h-6 w-6" style={{ color: '#4696D2' }} />
          3. Home Energy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded p-3" style={{ backgroundColor: '#f0f7ff' }}>
            <h3 className="font-semibold mb-2">Natural Gas</h3>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={natgasValue}
                onChange={(e) => setNatgasValue(Number(e.target.value))}
                className="w-full rounded px-2 py-1 focus:outline-none focus:ring-0"
                min={0}
              />
              <select value={natgasUnit} onChange={(e) => setNatgasUnit(Number(e.target.value) as 1 | 2)} className="rounded px-2 py-1 focus:outline-none focus:ring-0">
                <option value={1}>$ / month</option>
                <option value={2}>CCF / month</option>
              </select>
            </div>
            <div className="mt-2 text-sm text-gray-600">Annual Natural Gas Emissions: <span style={{ color: '#4696D2' }}>{emissionsNaturalGas.toFixed(1)} lbs</span></div>
          </div>

          <div className="rounded p-3" style={{ backgroundColor: '#f8fdf8' }}>
            <h3 className="font-semibold mb-2">Electricity</h3>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={elecValue}
                onChange={(e) => setElecValue(Number(e.target.value))}
                className="w-full rounded px-2 py-1 focus:outline-none focus:ring-0"
                min={0}
              />
              <select value={elecUnit} onChange={(e) => setElecUnit(Number(e.target.value) as 1 | 2)} className="rounded px-2 py-1 focus:outline-none focus:ring-0">
                <option value={1}>$ / month</option>
                <option value={2}>kWh / month</option>
              </select>
            </div>
            <div className="mt-2 text-sm text-gray-600">Annual Electricity Emissions: <span style={{ color: '#82C92C' }}>{emissionsElectricity.toFixed(1)} lbs</span></div>
          </div>

          <div className="rounded p-3" style={{ backgroundColor: '#f0f7ff' }}>
            <h3 className="font-semibold mb-2">Fuel Oil</h3>
            <div className="flex gap-2 items-center">
              <input 
                type="number" 
                value={fuelOilMonthly} 
                onChange={(e) => setFuelOilMonthly(Number(e.target.value))} 
                className="w-full rounded px-2 py-1 focus:outline-none focus:ring-0"
                placeholder="gallons / month"
              />
            </div>
            <div className="mt-2 text-sm text-gray-600">Annual Fuel Oil Emissions: <span style={{ color: '#4696D2' }}>{emissionsFuelOil.toFixed(1)} lbs</span></div>
          </div>

          <div className="rounded p-3" style={{ backgroundColor: '#f8fdf8' }}>
            <h3 className="font-semibold mb-2">Propane</h3>
            <div className="flex gap-2 items-center">
              <input 
                type="number" 
                value={propaneMonthly} 
                onChange={(e) => setPropaneMonthly(Number(e.target.value))} 
                className="w-full rounded px-2 py-1 focus:outline-none focus:ring-0"
                placeholder="gallons / month"
              />
            </div>
            <div className="mt-2 text-sm text-gray-600">Annual Propane Emissions: <span style={{ color: '#82C92C' }}>{emissionsPropane.toFixed(1)} lbs</span></div>
          </div>
        </div>

        <div className="mt-3 font-semibold">Total Home Energy Emissions: <span style={{ color: '#4696D2' }}>{homeEnergyTotal.toFixed(1)} lbs / year</span></div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#000000' }}>
          <Recycle className="h-6 w-6" style={{ color: '#82C92C' }} />
          4. Waste & Recycling
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Object.keys(waste).map((k) => (
            <label key={k} className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={(waste as any)[k]}
                onChange={(e) => setWaste((w) => ({ ...w, [k]: e.target.checked }))}
                style={{ accentColor: '#82C92C' }}
              />
              <span className="text-sm capitalize">{k}</span>
            </label>
          ))}
        </div>
        <div className="mt-3 font-semibold">Emissions Saved from Recycling: <span style={{ color: '#82C92C' }}>{emissionsSavedWaste.toFixed(1)} lbs / year</span></div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#000000' }}>
          <Wrench className="h-6 w-6" style={{ color: '#4696D2' }} />
          5. Upgrades (Optional)
        </h2>
        <div className="flex gap-4 items-center">
          <label className="inline-flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={heatingUpgrade} 
              onChange={(e) => setHeatingUpgrade(e.target.checked)} 
              style={{ accentColor: '#4696D2' }}
            />
            <span>Heating Equipment Upgrade (reduce heating emissions by ~10%)</span>
          </label>

          <label className="inline-flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={washerUpgrade} 
              onChange={(e) => setWasherUpgrade(e.target.checked)} 
              style={{ accentColor: '#82C92C' }}
            />
            <span>Clothes Washer Upgrade (saves ~376 lbs CO₂/year)</span>
          </label>
        </div>

        <div className="mt-3">
          <div>Savings from Heating Upgrade: <span style={{ color: '#4696D2' }}>{savingsHeatingUpgrade.toFixed(1)} lbs</span></div>
          <div>Savings from Washer Upgrade: <span style={{ color: '#82C92C' }}>{savingsWasherUpgrade.toFixed(1)} lbs</span></div>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#000000' }}>
          <TrendingDown className="h-6 w-6" style={{ color: '#82C92C' }} />
          6. Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded p-3" style={{ backgroundColor: '#f0f7ff' }}>
            <h3 className="font-semibold">Breakdown (lbs CO₂ / year)</h3>
            <div className="mt-2">Vehicle Emissions (before maintenance): <span style={{ color: '#4696D2' }}>{vehicleEmissionsTotal.toFixed(1)}</span></div>
            <div>Vehicle Emissions (after maintenance): <span style={{ color: '#4696D2' }}>{adjustedVehicleEmissions.toFixed(1)}</span></div>
            <div>Home Energy Emissions: <span style={{ color: '#82C92C' }}>{homeEnergyTotal.toFixed(1)}</span></div>
            <div>Waste Savings (reduction): <span style={{ color: '#82C92C' }}>{emissionsSavedWaste.toFixed(1)}</span></div>
            <div className="mt-2 font-bold">Total (before upgrades): <span style={{ color: '#000000' }}>{totalEmissionsBeforeUpgrades.toFixed(1)} lbs</span></div>
            <div className="text-sm">({lbsToTons(totalEmissionsBeforeUpgrades).toFixed(3)} tons CO₂ / year)</div>
          </div>

          <div className="rounded p-3" style={{ backgroundColor: '#f8fdf8' }}>
            <h3 className="font-semibold">With Optional Upgrades</h3>
            <div>Upgrades Savings: <span style={{ color: '#82C92C' }}>{totalUpgradesSavings.toFixed(1)} lbs</span></div>
            <div className="mt-2 font-bold">Adjusted Total: <span style={{ color: '#000000' }}>{adjustedEmissions.toFixed(1)} lbs</span></div>
            <div className="text-sm">({lbsToTons(adjustedEmissions).toFixed(3)} tons CO₂ / year)</div>
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={showSummary}
            className="px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(90deg,#4696D2,#82C92C)" }}
          >
            Show Summary
          </button>
        </div>
      </section>

      <footer className="text-xs text-gray-500 text-center">Note: This calculator provides estimates only.</footer>

      {/* Summary Modal */}
      <SummaryModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        totalEmissions={adjustedEmissions}
        totalEmissionsBeforeUpgrades={totalEmissionsBeforeUpgrades}
        userName={user?.name}
        breakdownData={{
          vehicles: adjustedVehicleEmissions,
          homeEnergy: homeEnergyTotal,
          wasteSavings: emissionsSavedWaste,
          upgradesSavings: totalUpgradesSavings,
        }}
      />
        </>
      )}
    </div>
  );
}