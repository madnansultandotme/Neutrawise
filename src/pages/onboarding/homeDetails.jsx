import React from 'react'
import UserGoals from './Goals'

const HomeDetails = () => {
    const [showGoals, setShowGoals] = React.useState(false);
    const [selectedBuilding, setSelectedBuilding] = React.useState('');
    const [bedrooms, setBedrooms] = React.useState(1);
    const [people, setPeople] = React.useState(1);
    const [errors, setErrors] = React.useState({});

    const buildingOptions = [
            { id: 'apartment', label: 'Apartment' },
            { id: 'house', label: 'House' },
            { id: 'condo', label: 'Condo' },
            { id: 'townhouse', label: 'Townhouse' },
            { id: 'studio', label: 'Studio' },
            { id: 'other', label: 'Other' }
    ];

    const validateForm = () => {
            const newErrors = {};
            
            if (!selectedBuilding) {
                    newErrors.selectedBuilding = 'Please select your building type';
            }
            
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
            if (validateForm()) {
                    console.log({ selectedBuilding, bedrooms, people });
                    setShowGoals(true);
            }
    };

    const incrementValue = (setter, value, max = 10) => {
            if (value < max) setter(value + 1);
    };

    const decrementValue = (setter, value, min = 1) => {
            if (value > min) setter(value - 1);
    };

    if (showGoals) {
            return <UserGoals />;
    }
    const CounterField = ({ label, value, onIncrement, onDecrement }) => (
    <div className="flex w-full flex-col items-center">
        <p className="font-dmsans text-center font-bold mb-2 mt-4">{label}</p>
        <div className="flex items-center justify-between w-full max-w-96 border-2  bg-white border-gray-300 rounded-full px-3 py-1">
            <button
                onClick={onDecrement}
                className="w-8 h-8 bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white rounded-full flex items-center justify-center font-bold hover:scale-105 transition-transform duration-300"
            >
                -
            </button>
            <span className="text-xl font-bold w-12 text-center">{value}</span>
            <button
                onClick={onIncrement}
                className="w-8 h-8 bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white rounded-full flex items-center justify-center font-bold hover:scale-105 transition-transform duration-300"
            >
                +
            </button>
        </div>
    </div>
    );

    return (
            <div className='w-full relative items-center justify-start flex flex-col bg-gradient-to-br from-green-50 to-blue-50'>
                    <div className='w-[95%] flex flex-col transparent pb-14 justify-center items-center'>
                            <div className='flex flex-row justify-center items-center mt-3'>
                                    <img src="Icon1.png" height={65} width={65} alt="Logo" />
                                    <div className='font-dmsans'>
                                            <h1 className='text-4xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                                    </div>
                            </div>
                            <div className='flex flex-row justify-center w-full items-start'>
                                    <div className='flex w-[60%] flex-col mt-1'>
                                            <div className='flex justify-center'>
                                                    <p className='text-3xl font-black bg-gradient-to-r text-center from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Home</p>
                                            </div>

                                            <div>
                                                    <p className="font-dmsans text-center text-xl font-black ">Tell us about your home</p>
                                            </div>

                                            <div className="flex flex-col items-center mb-2 mt-4 w-full px-4">
                                                    <div className="flex flex-col w-full items-center">
                                                        <p className="font-dmsans text-center font-bold">What type of building is your home?</p>
                                                        <div className="w-full flex justify-center mt-3">
                                                            <select
                                                                className="w-full border-2 border-gray-300 max-w-96 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
                                                                value={selectedBuilding}
                                                                onChange={(e) => setSelectedBuilding(e.target.value)}
                                                            >
                                                                <option value="">Select building type</option>
                                                                {buildingOptions.map((option) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {errors.selectedBuilding && <p className="text-red-500 text-xs mt-1">{errors.selectedBuilding}</p>}
                                                    </div>

                                                    {/* Bedrooms */}
                                                    <CounterField
                                                            label="How many bedrooms?"
                                                            value={bedrooms}
                                                            onIncrement={() => incrementValue(setBedrooms, bedrooms)}
                                                            onDecrement={() => decrementValue(setBedrooms, bedrooms)}
                                                    />

                                                    {/* People */}
                                                    <CounterField
                                                            label="How many people live in your home?"
                                                            value={people}
                                                            onIncrement={() => incrementValue(setPeople, people)}
                                                            onDecrement={() => decrementValue(setPeople, people)}
                                                    />
                                            </div>

                                            <div className='flex justify-center'>         
                                                    <button onClick={handleNext} className='bg-gradient-to-r from-[#81C82B] w-40 to-[#4595D1] text-white font-dmsans text-lg font-black px-6 py-3 rounded-full mt-4 hover:scale-105 transition-transform duration-300'>
                                                            Next
                                                    </button>
                                            </div>
                                    </div>
                                    <div className='flex w-[40%] flex-col mt-10'>
                                            <div className='bg-white rounded-lg shadow-md p-6 border-l-4 border-[#81C82B]'>
                                                    <div className='flex items-center mb-3'>
                                                            <div className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold'>
                                                                    🏠
                                                            </div>
                                                            <h3 className='ml-3 text-lg font-bold text-gray-800'>Home Tip</h3>
                                                    </div>
                                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                                            Smart home improvements can reduce energy consumption by up to 30%! Consider LED lighting, programmable thermostats, and energy-efficient appliances. Even small changes like proper insulation and sealing air leaks can make a big difference.
                                                    </p>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </div>
    )
}

export default HomeDetails