import React from 'react'
import DrivingDetails from './drivingDetails';

const AboutUser = () => {
    const [showDrivingDetails, setShowDrivingDetails] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        
        if (!lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        
        if (!country) {
            newErrors.country = 'Please select a country';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateForm()) {
            setShowDrivingDetails(true);
        }
    };

    if (showDrivingDetails) {
        return <DrivingDetails />;
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
                <div className='flex flex-row justify-center w-full items-start '>
                    <div className='flex w-[60%] flex-col mt-10'>
                    <div className='flex justify-center'>
                        <p className='text-3xl font-black bg-gradient-to-r text-center from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Tell us about yourself.</p>
                    </div>
                    <div>
                        <p className="font-dmsans text-center font-black mt-5">First Name</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <input
                            type="text"
                            className="w-[60%] border-2 max-w-96 border-gray-300 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}

                    <div>
                        <p className="font-dmsans text-center font-black mt-5">Last Name</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <input
                            type="text"
                            className="w-[60%] border-2 max-w-96 border-gray-300 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}

                    <div>
                        <p className="font-dmsans text-center font-black mt-5">Country</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <select
                            className="w-[60%] border-2 max-w-96 border-gray-300 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="">Select your country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IN">India</option>
                            <option value="JP">Japan</option>
                            <option value="BR">Brazil</option>
                            <option value="MX">Mexico</option>
                        </select>
                    </div>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                    <div className='flex justify-center'>         
                        <button onClick={() => setShowDrivingDetails(true)} className=' bg-gradient-to-r from-[#81C82B] w-40 to-[#4595D1] text-white font-dmsans text-lg font-black px-6 py-3 rounded-full mt-10 hover:scale-105 transition-transform duration-300'>
                            Next
                        </button>
                    </div>
                </div>
                <div className='flex w-[40%] flex-col mt-10'>
                    <div className='bg-white rounded-lg shadow-md p-6 border-l-4 border-[#81C82B]'>
                        <div className='flex items-center mb-3'>
                            <div className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold'>
                                💡
                            </div>
                            <h3 className='ml-3 text-lg font-bold text-gray-800'>Quick Tip</h3>
                        </div>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            Make sure to use your real name as it appears on official documents. This helps us verify your identity and provide better personalized recommendations.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>


    )
}

export default AboutUser;