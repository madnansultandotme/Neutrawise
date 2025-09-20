// Onboarding.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Emission factors (kg CO2 per unit)
const EMISSION_FACTORS = {
  // Housing
  electricity: 0.5, // per kWh
  naturalGas: 2.0, // per therm
  heatingOil: 2.7, // per liter
  propane: 1.5, // per liter
  
  // Transportation
  car: 0.4, // per mile (average)
  bus: 0.15, // per mile
  train: 0.15, // per mile
  shortFlight: 150, // per flight
  mediumFlight: 300, // per flight
  longFlight: 900, // per flight
  
  // Diet (kg CO2 per day)
  meatHeavy: 7.2,
  meatMedium: 5.6,
  meatLight: 4.7,
  vegetarian: 3.8,
  vegan: 2.9,
};

interface CarbonData {
  housing: {
    electricity: number;
    heatingType: 'electricity' | 'natural_gas' | 'heating_oil' | 'propane' | 'none';
    heatingAmount: number;
    householdSize: number;
  };
  travel: {
    carMileage: number;
    publicTransport: number;
    flightsShort: number;
    flightsMedium: number;
    flightsLong: number;
  };
  diet: {
    dietType: 'meat_heavy' | 'meat_medium' | 'meat_light' | 'vegetarian' | 'vegan';
  };
  consumption: {
    shoppingHabits: 'minimal' | 'moderate' | 'frequent';
  };
}

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [carbonData, setCarbonData] = useState<CarbonData>({
    housing: {
      electricity: 300,
      heatingType: 'natural_gas',
      heatingAmount: 50,
      householdSize: 2
    },
    travel: {
      carMileage: 100,
      publicTransport: 20,
      flightsShort: 1,
      flightsMedium: 0,
      flightsLong: 0
    },
    diet: {
      dietType: 'meat_medium'
    },
    consumption: {
      shoppingHabits: 'moderate'
    }
  });

  const [carbonResult, setCarbonResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Update form data
  const handleInputChange = (category: keyof CarbonData, field: string, value: any) => {
    setCarbonData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  // Calculate carbon footprint with actual emission factors
  const calculateFootprint = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for UX purposes
    setTimeout(() => {
      let total = 0;
      
      // Housing calculations
      total += carbonData.housing.electricity * EMISSION_FACTORS.electricity * 12; // Monthly to annual
      
      // Heating calculations
      switch(carbonData.housing.heatingType) {
        case 'natural_gas':
          total += carbonData.housing.heatingAmount * EMISSION_FACTORS.naturalGas * 12;
          break;
        case 'heating_oil':
          total += carbonData.housing.heatingAmount * EMISSION_FACTORS.heatingOil * 12;
          break;
        case 'propane':
          total += carbonData.housing.heatingAmount * EMISSION_FACTORS.propane * 12;
          break;
        case 'electricity':
          total += carbonData.housing.heatingAmount * EMISSION_FACTORS.electricity * 12;
          break;
      }
      
      // Adjust for household size (per capita)
      total /= carbonData.housing.householdSize;
      
      // Travel calculations
      total += carbonData.travel.carMileage * EMISSION_FACTORS.car * 52; // Weekly to annual
      total += carbonData.travel.publicTransport * EMISSION_FACTORS.bus * 52;
      total += carbonData.travel.flightsShort * EMISSION_FACTORS.shortFlight;
      total += carbonData.travel.flightsMedium * EMISSION_FACTORS.mediumFlight;
      total += carbonData.travel.flightsLong * EMISSION_FACTORS.longFlight;
      
      // Diet calculations
      const dietFactors = {
        meat_heavy: EMISSION_FACTORS.meatHeavy * 365,
        meat_medium: EMISSION_FACTORS.meatMedium * 365,
        meat_light: EMISSION_FACTORS.meatLight * 365,
        vegetarian: EMISSION_FACTORS.vegetarian * 365,
        vegan: EMISSION_FACTORS.vegan * 365
      };
      total += dietFactors[carbonData.diet.dietType];
      
      // Consumption calculations
      const shoppingFactors = {
        minimal: 500,
        moderate: 1000,
        frequent: 2000
      };
      total += shoppingFactors[carbonData.consumption.shoppingHabits];
      
      setCarbonResult(Math.round(total));
      setIsCalculating(false);
    }, 800); // Short delay to show calculation animation
  };

  // Progress to next step
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  // Go back to previous step
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Calculate when reaching the final step
  useEffect(() => {
    if (currentStep === 4 && carbonResult === null) {
      calculateFootprint();
    }
  }, [currentStep]);

  // Form steps
  const steps = [
    {
      title: "Your Home",
      description: "Let's start with your housing information",
      icon: "🏠"
    },
    {
      title: "Your Travel",
      description: "How do you get around?",
      icon: "🚗"
    },
    {
      title: "Your Diet",
      description: "What does your typical diet look like?",
      icon: "🍎"
    },
    {
      title: "Your Consumption",
      description: "Tell us about your shopping habits",
      icon: "🛍️"
    },
    {
      title: "Results",
      description: "Your carbon footprint results",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden p-4">
      {/* Background Gradient - Matching login page */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900 to-blue-900 z-0"></div>
      
      {/* Background plant imagery - from Vecteezy or similar source */}
      <div 
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/007/077/577/non_2x/natural-green-background-with-curved-pattern-suitable-for-nature-theme-banner-vector.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Glass Form Container - Matching login style */}
      <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl shadow-black/30 p-6 w-full max-w-2xl z-20">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`flex flex-col items-center ${index <= currentStep ? 'text-emerald-300' : 'text-white/50'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${index <= currentStep ? 'border-emerald-300 bg-emerald-300/10' : 'border-white/30'}`}>
                    {index < currentStep ? '✓' : step.icon}
                  </div>
                  <span className="text-xs mt-1 hidden sm:block">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 ${index < currentStep ? 'bg-emerald-300' : 'bg-white/20'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Form content */}
        <div className="text-white">
          <h2 className="text-2xl font-semibold mb-2 text-center">{steps[currentStep].title}</h2>
          <p className="text-center text-white/80 text-sm mb-6">{steps[currentStep].description}</p>
          
          {/* Step 1: Housing */}
          {currentStep === 0 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Monthly Electricity Usage (kWh)</label>
                <input
                  type="number"
                  value={carbonData.housing.electricity}
                  onChange={(e) => handleInputChange('housing', 'electricity', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                  placeholder="e.g. 300"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Primary Heating Type</label>
                <select
                  value={carbonData.housing.heatingType}
                  onChange={(e) => handleInputChange('housing', 'heatingType', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                >
                  <option value="none">None</option>
                  <option value="electricity">Electricity</option>
                  <option value="natural_gas">Natural Gas</option>
                  <option value="heating_oil">Heating Oil</option>
                  <option value="propane">Propane</option>
                </select>
              </div>
              
              {carbonData.housing.heatingType !== 'none' && (
                <div>
                  <label className="block text-sm mb-1">
                    Monthly Heating Usage 
                    {carbonData.housing.heatingType === 'natural_gas' && ' (therms)'}
                    {carbonData.housing.heatingType === 'heating_oil' && ' (liters)'}
                    {carbonData.housing.heatingType === 'propane' && ' (liters)'}
                    {carbonData.housing.heatingType === 'electricity' && ' (kWh)'}
                  </label>
                  <input
                    type="number"
                    value={carbonData.housing.heatingAmount}
                    onChange={(e) => handleInputChange('housing', 'heatingAmount', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                    placeholder="Depend on heating type"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm mb-1">People in Your Household</label>
                <input
                  type="number"
                  value={carbonData.housing.householdSize}
                  onChange={(e) => handleInputChange('housing', 'householdSize', parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                  min="1"
                />
              </div>
            </div>
          )}
          
          {/* Step 2: Travel */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Weekly Car Mileage (miles)</label>
                <input
                  type="number"
                  value={carbonData.travel.carMileage}
                  onChange={(e) => handleInputChange('travel', 'carMileage', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Weekly Public Transport Usage (miles)</label>
                <input
                  type="number"
                  value={carbonData.travel.publicTransport}
                  onChange={(e) => handleInputChange('travel', 'publicTransport', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1">Short Flights (past year)</label>
                  <input
                    type="number"
                    value={carbonData.travel.flightsShort}
                    onChange={(e) => handleInputChange('travel', 'flightsShort', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Medium Flights</label>
                  <input
                    type="number"
                    value={carbonData.travel.flightsMedium}
                    onChange={(e) => handleInputChange('travel', 'flightsMedium', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Long Flights</label>
                  <input
                    type="number"
                    value={carbonData.travel.flightsLong}
                    onChange={(e) => handleInputChange('travel', 'flightsLong', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Diet */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Primary Diet Type</label>
                <select
                  value={carbonData.diet.dietType}
                  onChange={(e) => handleInputChange('diet', 'dietType', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                >
                  <option value="meat_heavy">Heavy Meat Consumption</option>
                  <option value="meat_medium">Medium Meat Consumption</option>
                  <option value="meat_light">Light Meat Consumption</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg text-sm">
                <h3 className="font-semibold mb-2">Diet Impact Guide:</h3>
                <ul className="space-y-1">
                  <li className="flex justify-between"><span>Heavy Meat:</span> <span>7.2 kg CO2/day</span></li>
                  <li className="flex justify-between"><span>Medium Meat:</span> <span>5.6 kg CO2/day</span></li>
                  <li className="flex justify-between"><span>Light Meat:</span> <span>4.7 kg CO2/day</span></li>
                  <li className="flex justify-between"><span>Vegetarian:</span> <span>3.8 kg CO2/day</span></li>
                  <li className="flex justify-between"><span>Vegan:</span> <span>2.9 kg CO2/day</span></li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Step 4: Consumption */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Shopping Habits</label>
                <select
                  value={carbonData.consumption.shoppingHabits}
                  onChange={(e) => handleInputChange('consumption', 'shoppingHabits', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                >
                  <option value="minimal">Minimal (only essentials)</option>
                  <option value="moderate">Moderate (occasional purchases)</option>
                  <option value="frequent">Frequent (regular shopping)</option>
                </select>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg text-sm">
                <h3 className="font-semibold mb-2">Shopping Impact:</h3>
                <ul className="space-y-1">
                  <li className="flex justify-between"><span>Minimal:</span> <span>~500 kg CO2/year</span></li>
                  <li className="flex justify-between"><span>Moderate:</span> <span>~1000 kg CO2/year</span></li>
                  <li className="flex justify-between"><span>Frequent:</span> <span>~2000 kg CO2/year</span></li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Step 5: Results */}
          {currentStep === 4 && (
            <div className="text-center py-8">
              {isCalculating ? (
                <div>
                  <div className="w-16 h-16 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                  <p>Calculating your carbon footprint...</p>
                </div>
              ) : carbonResult !== null ? (
                <div>
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        strokeDasharray={`${(carbonResult / 20000) * 100}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-2xl font-bold">{carbonResult.toLocaleString()}</span>
                      <span className="text-xs">kg CO2/year</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Your Impact Level:</h3>
                    {carbonResult < 6000 ? (
                      <p className="text-emerald-300">Below average! You're doing great! 🌱</p>
                    ) : carbonResult < 12000 ? (
                      <p className="text-yellow-300">Around average. There's room for improvement.</p>
                    ) : (
                      <p className="text-orange-300">Above average. Let's work on reducing your footprint.</p>
                    )}
                    
                    <div className="mt-4 p-4 bg-white/5 rounded-lg text-sm text-left">
                      <h4 className="font-semibold mb-2">Comparison to Averages:</h4>
                      <ul className="space-y-1">
                        <li className="flex justify-between"><span>Global Average:</span> <span>~4,000 kg CO2/year</span></li>
                        <li className="flex justify-between"><span>US Average:</span> <span>~16,000 kg CO2/year</span></li>
                        <li className="flex justify-between"><span>EU Average:</span> <span>~8,000 kg CO2/year</span></li>
                        <li className="flex justify-between"><span>Climate Target:</span> <span>~2,000 kg CO2/year</span></li>
                      </ul>
                    </div>
                    
                    <button 
                      type="button" 
                      className="mt-6 py-2 px-6 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold transition-all duration-300 hover:from-green-600 hover:to-teal-600 hover:shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5"
                      onClick={() => navigate('/dashboard')}
                    >
                      View Personalized Recommendations
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
          
          {/* Navigation buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`py-2 px-4 rounded-lg ${currentStep === 0 ? 'bg-white/5 text-white/30' : 'bg-white/10 text-white hover:bg-white/15'} transition-all duration-300 text-sm`}
              >
                Back
              </button>
              
              <button
                type="button"
                onClick={nextStep}
                className="py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold transition-all duration-300 hover:from-green-600 hover:to-teal-600 hover:shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5 text-sm"
              >
                {currentStep === 3 ? 'Calculate' : 'Next'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;