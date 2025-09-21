import React from 'react';

// A simple component for the summary cards at the top
const SummaryCard = ({ count, label, iconSrc }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between min-w-[200px] h-[220px] text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">{count}</div>
                <p className="text-gray-600 mb-4">{label}</p>
                <img src={iconSrc} alt={label} className="w-36 h-36 object-contain mb-4" />
                
            </div>
            <button className="text-sm mt-4 font-semibold text-[#4595D1] hover:underline">
                    View All
                </button>
        </div>


    );
};


const MySteps = () => {
    // You would likely fetch these counts from an API in a real application
    const stepsTryingCount = 0;
    const stepsCompletedCount = 0;
    const stepsAlreadyDoCount = 0;

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16 font-dm-sans">
            <h1 className="text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent text-center mb-16">
                My Steps
            </h1>

            {/* Summary Cards Section */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
                <SummaryCard
                    count={stepsTryingCount}
                    label="steps trying"
                    iconSrc="shoe1.png" // Replace with actual path or import
                />
                <SummaryCard
                    count={stepsCompletedCount}
                    label="steps completed"
                    iconSrc="shoe2.png" // Replace with actual path or import
                />
                <SummaryCard
                    count={stepsAlreadyDoCount}
                    label="steps you already do"
                    iconSrc="shoe3.png" // Replace with actual path or import
                />
            </div>

            {/* Central "Find steps" Button */}
            <div className="text-center mb-16">
                <button className="bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Find steps
                </button>
            </div>

            {/* Steps Trying Section - Empty State */}
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Steps trying</h2>
                <p className="text-2xl font-bold text-gray-700 mb-6">
                    Oops, it looks a bit empty here!
                </p>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                    By tapping "Find a step" you will be taken to the Giki Zero
                    website where you can choose from over 150 steps to Cut Carbon.
                </p>
                <button className="bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Find a step
                </button>
            </div>

            {/* If there were steps trying, you might render a grid of StepCard components here */}
            {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StepCard ... />
            <StepCard ... />
        </div> */}
        </div>
    );
};

export default MySteps;