import React from 'react'
import Result from './result'

const UserGoals = () => {
  const [showResult, setShowResult] = React.useState(false);
    const [selectedGoal, setSelectedGoal] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const goalOptions = [
        { id: 'cut-carbon', label: 'Cut Carbon Footprint', description: 'Reduce your environmental impact' },
        { id: 'save-money', label: 'Save Money', description: 'Lower your monthly expenses' },
        { id: 'health-wellness', label: 'Health & Wellness', description: 'Improve your physical wellbeing' },
        { id: 'sustainable-living', label: 'Sustainable Living', description: 'Live more eco-friendly' },
        { id: 'energy-efficiency', label: 'Energy Efficiency', description: 'Optimize your energy usage' },
        { id: 'waste-reduction', label: 'Waste Reduction', description: 'Minimize waste and consumption' },
    ];

    const validateForm = () => {
        const newErrors = {};
        
        if (!selectedGoal) {
            newErrors.selectedGoal = 'Please select your primary goal';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateForm()) {
            console.log({ selectedGoal });
            setShowResult(true);
        }
    };

    if (showResult) {
        return <Result />;
    }

    return (
        <div className='w-full relative items-center justify-start flex flex-col bg-gradient-to-br from-green-50 to-blue-50'>
            <div className='w-[95%] flex flex-col transparent pb-14 justify-center items-center'>
                <div className='flex flex-row justify-center items-center mt-7'>
                    <img src="Icon1.png" height={65} width={65} alt="Logo" />
                    <div className='font-dmsans'>
                        <h1 className='text-4xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-center w-full items-start'>
                    <div className='flex w-[60%] flex-col mt-10'>
                        <div className='flex justify-center'>
                            <p className='text-4xl font-black bg-gradient-to-r text-center from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Goals</p>
                        </div>

                        <div>
                            <p className="font-dmsans text-center font-black mt-5">What's your primary goal?</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-5 px-4">
                            {goalOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                                        selectedGoal === option.id
                                            ? 'bg-gradient-to-r from-[#81C82B] to-[#4595D1] border-[#81C82B] text-white'
                                            : 'border-gray-300 bg-white text-gray-800 hover:border-[#81C82B]'
                                    }`}
                                    onClick={() => setSelectedGoal(option.id)}
                                >
                                    <h3 className={`font-bold text-lg mb-2 ${selectedGoal === option.id ? 'text-white' : 'text-gray-800'}`}>
                                        {option.label}
                                    </h3>
                                    <p className={`text-sm ${selectedGoal === option.id ? 'text-white' : 'text-gray-600'}`}>
                                        {option.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {errors.selectedGoal && <p className="text-red-500 text-xs mt-3 text-center">{errors.selectedGoal}</p>}

                        <div className='flex justify-center'>         
                            <button onClick={handleNext} className='bg-gradient-to-r from-[#81C82B] w-40 to-[#4595D1] text-white font-dmsans text-lg font-black px-6 py-3 rounded-full mt-10 hover:scale-105 transition-transform duration-300'>
                                Next
                            </button>
                        </div>
                    </div>
                    <div className='flex w-[40%] flex-col mt-10'>
                        <div className='bg-white rounded-lg shadow-md p-6 border-l-4 border-[#81C82B]'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold'>
                                    🎯
                                </div>
                                <h3 className='ml-3 text-lg font-bold text-gray-800'>Goal Tip</h3>
                            </div>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                Setting clear sustainability goals helps you track progress and stay motivated. Small daily actions compound into big impacts over time. Choose the goal that resonates most with your values!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserGoals