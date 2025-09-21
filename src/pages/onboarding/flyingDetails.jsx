import React from 'react'
import FoodDetails from './foodDetails'

const FlyingDetails = () => {
    const [showFoodDetails, setShowFoodDetails] = React.useState(false);
    const [shortHaul, setShortHaul] = React.useState(0);
    const [mediumHaul, setMediumHaul] = React.useState(0);
    const [longHaul, setLongHaul] = React.useState(0);

    const handleIncrement = (type) => {
         if (type === 'short') setShortHaul(prev => prev + 1);
         if (type === 'medium') setMediumHaul(prev => prev + 1);
         if (type === 'long') setLongHaul(prev => prev + 1);
    };

    const handleDecrement = (type) => {
         if (type === 'short') setShortHaul(prev => Math.max(0, prev - 1));
         if (type === 'medium') setMediumHaul(prev => Math.max(0, prev - 1));
         if (type === 'long') setLongHaul(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
         console.log({ shortHaul, mediumHaul, longHaul });
         setShowFoodDetails(true);
    };

    if (showFoodDetails) {
         return <FoodDetails />;
    }

    const FlightCounter = ({ label, timeRange, value, onIncrement, onDecrement }) => (
         <div className="flex flex-col items-center mb-2">
              <p className="font-dmsans text-center font-black">{label}</p>
              <p className="text-sm text-gray-600">{timeRange}</p>
              <div className="flex items-center justify-between w-[60%] border-2 max-w-96 bg-white border-gray-300 rounded-full px-3 py-1">
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
                    <div className='flex flex-row justify-center items-center mt-4'>
                         <img src="Icon1.png" height={65} width={65} alt="Logo" />
                         <div className='font-dmsans'>
                              <h1 className='text-4xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                         </div>
                    </div>
                    <div className='flex flex-row justify-center w-full items-start '>
                         <div className='flex w-[60%] flex-col mt-2'>
                              <div className='flex justify-center'>
                                    <p className='text-3xl font-black bg-gradient-to-r text-center from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Flying</p>
                              </div>
                                <div>
                                    <p className="font-dmsans text-center font-black mt-2">How many flights do you take in a year?</p>
                                </div>

                              <div className="mt-4">
                                    <FlightCounter
                                         label="Short Haul Flights"
                                         timeRange="(1-4 hours)"
                                         value={shortHaul}
                                         onIncrement={() => handleIncrement('short')}
                                         onDecrement={() => handleDecrement('short')}
                                    />
                                    
                                    <FlightCounter
                                         label="Medium Haul Flights"
                                         timeRange="(4-8 hours)"
                                         value={mediumHaul}
                                         onIncrement={() => handleIncrement('medium')}
                                         onDecrement={() => handleDecrement('medium')}
                                    />
                                    
                                    <FlightCounter
                                         label="Long Haul Flights"
                                         timeRange="(8+ hours)"
                                         value={longHaul}
                                         onIncrement={() => handleIncrement('long')}
                                         onDecrement={() => handleDecrement('long')}
                                    />
                              </div>

                              <div className='flex justify-center'>         
                                    <button onClick={handleNext} className=' bg-gradient-to-r from-[#81C82B] w-40 to-[#4595D1] text-white font-dmsans text-lg font-black px-6 py-3 rounded-full mt-3 hover:scale-105 transition-transform duration-300'>
                                         Next
                                    </button>
                              </div>
                         </div>
                         <div className='flex w-[40%] flex-col mt-10'>
                              <div className='bg-white rounded-lg shadow-md p-6 border-l-4 border-[#81C82B]'>
                                    <div className='flex items-center mb-3'>
                                         <div className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold'>
                                              ✈️
                                         </div>
                                         <h3 className='ml-3 text-lg font-bold text-gray-800'>Flying Info</h3>
                                    </div>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                         Air travel contributes significantly to carbon emissions. Help us calculate your flight-related carbon footprint by providing your expected travel frequency.
                                    </p>
                              </div>
                         </div>
                    </div>
              </div>
         </div>
    )
}

export default FlyingDetails