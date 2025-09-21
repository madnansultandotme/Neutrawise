import React from 'react'
import FlyingDetails from './flyingDetails';

const DrivingDetails = () => {
    const [showFlyingDetails, setShowFlyingDetails] = React.useState(false);
    const [doYouDrive, setDoYouDrive] = React.useState('');
    const [drivingFrequency, setDrivingFrequency] = React.useState('');
    const [carType, setCarType] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!doYouDrive) {
            newErrors.doYouDrive = 'Please select if you drive';
        }
        
        if (doYouDrive === 'yes') {
            if (!drivingFrequency) {
                newErrors.drivingFrequency = 'Please select how often you drive';
            }
            
            if (!carType) {
                newErrors.carType = 'Please select your car type';
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateForm()) {
            // Handle form submission
            console.log({ doYouDrive, drivingFrequency, carType });
            setShowFlyingDetails(true);
        }
    };

    if (showFlyingDetails) {
        return <FlyingDetails />;
    }

    return (
        <div className='w-full relative items-start justify-center flex min-h-[600px] bg-gradient-to-br from-green-50 to-blue-50'>
            {/* Rest of your existing JSX */}
            <div className='w-[95%] flex flex-col transparent pb-14 justify-center items-center'>
                <div className='flex flex-row justify-center items-center mt-7'>
                    <img src="Icon1.png" height={65} width={65} alt="Logo" />
                    <div className='font-dmsans'>
                        <h1 className='text-4xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-center w-full items-start '>
                    <div className='flex w-[60%] flex-col mt-10'>
                        <div className='flex justify-center'>
                            <p className='text-4xl font-black bg-gradient-to-r text-center from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Driving</p>
                        </div>

                        <div>
                            <p className="font-dmsans text-center font-black mt-5">Do you drive?</p>
                        </div>
                        <div className="w-full flex justify-center">
                            <select
                                className="w-[60%] border-2 max-w-96 border-gray-300 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
                                value={doYouDrive}
                                onChange={(e) => setDoYouDrive(e.target.value)}
                            >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        {errors.doYouDrive && <p className="text-red-500 text-xs mt-1 text-center">{errors.doYouDrive}</p>}

                        {doYouDrive === 'yes' && (
                            <>
                                <div>
                                    <p className="font-dmsans text-center font-black mt-5">How often do you drive?</p>
                                </div>
                                <div className="w-full flex justify-center">
                                    <select
                                        className="w-[60%] border-2 max-w-96 border-gray-300 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
                                        value={drivingFrequency}
                                        onChange={(e) => setDrivingFrequency(e.target.value)}
                                    >
                                        <option value="">Select frequency</option>
                                        <option value="daily">Daily</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="occasionally">Occasionally</option>
                                        <option value="rarely">Rarely</option>
                                    </select>
                                </div>
                                {errors.drivingFrequency && <p className="text-red-500 text-xs mt-1 text-center">{errors.drivingFrequency}</p>}

                                <div>
                                    <p className="font-dmsans text-center font-black mt-5">What kind of car do you drive?</p>
                                </div>
                                <div className="w-full flex justify-center">
                                    <select
                                        className="w-[60%] border-2 max-w-96 border-gray-300 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
                                        value={carType}
                                        onChange={(e) => setCarType(e.target.value)}
                                    >
                                        <option value="">Select car type</option>
                                        <option value="small">Small Car</option>
                                        <option value="sedan">Sedan</option>
                                        <option value="suv">SUV</option>
                                        <option value="truck">Truck</option>
                                        <option value="hatchback">Hatchback</option>
                                    </select>
                                </div>
                                {errors.carType && <p className="text-red-500 text-xs mt-1 text-center">{errors.carType}</p>}
                            </>
                        )}

                        <div className='flex justify-center'>         
                            <button onClick={handleNext} className=' bg-gradient-to-r from-[#81C82B] w-40 to-[#4595D1] text-white font-dmsans text-lg font-black px-6 py-3 rounded-full mt-10 hover:scale-105 transition-transform duration-300'>
                                Next
                            </button>
                        </div>
                    </div>
                    <div className='flex w-[40%] flex-col mt-10'>
                        <div className='bg-white rounded-lg shadow-md p-6 border-l-4 border-[#81C82B]'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold'>
                                    🚗
                                </div>
                                <h3 className='ml-3 text-lg font-bold text-gray-800'>Driving Tip</h3>
                            </div>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                Try carpooling, using public transport, or combining multiple errands into one trip to reduce your carbon footprint. Even maintaining proper tire pressure can improve fuel efficiency by up to 3%!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrivingDetails;