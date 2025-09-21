import React from 'react'
import Steps from './steps'


const Result = () => {
    const [showSteps, setShowSteps] = React.useState(false);

    if (showSteps) {
        return <Steps />;
    }
    
    return (
        <div className='w-full min-h-screen bg-white flex flex-col items-center px-4 py-4'>
            <div className='flex flex-row justify-center items-center mb-10'>
                <img src="Icon1.png" height={80} width={80} alt="Logo" />
                <div className='font-dmsans'>
                    <h1 className='text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                </div>
            </div>

            <div className='w-full max-w-6xl flex flex-col lg:flex-row gap-8'>
                <div className='flex-1'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-8'>
                        Congratulations! Here's an initial estimate of your carbon footprint.
                    </h2>

                    <div className='space-y-4'>
                        {[
                            { category: 'Home', value: 3587, color: 'bg-gradient-to-r from-[#81C82B] to-[#4595D1]' },
                            { category: 'Food', value: 1684, color: 'bg-gradient-to-r from-[#81C82B]/80 to-[#4595D1]/80' },
                            { category: 'Purchases', value: 1028, color: 'bg-gradient-to-r from-[#81C82B]/60 to-[#4595D1]/60' },
                            { category: 'Services', value: 642, color: 'bg-gradient-to-r from-[#81C82B]/40 to-[#4595D1]/40' },
                            { category: 'Transport', value: 106, color: 'bg-gradient-to-r from-[#81C82B]/20 to-[#4595D1]/20' }
                        ].map((item, index) => (
                            <div key={index} className='flex items-center'>
                                <div className='w-24 text-gray-700 font-medium'>{item.category}</div>
                                <div className='flex-1 mx-4'>
                                    <div className='h-8 bg-gray-100 rounded-full overflow-hidden'>
                                        <div
                                            className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                                            style={{ width: `${(item.value / 3587) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className='w-20 text-right text-gray-700 font-medium'>{item.value}kg</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-start'>
                    <div className='relative'>
                        <div className='bg-white border-4 border-transparent bg-gradient-to-r from-[#81C82B] to-[#4595D1] p-1 rounded-full w-80 h-80 shadow-lg'>
                            <div className='bg-white rounded-full w-full h-full flex flex-col items-center justify-center'>
                                <p className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent font-medium text-lg mb-2'>Your footprint</p>
                                <p className='text-6xl font-bold bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>7,047</p>
                                <p className='text-lg bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>kg</p>
                                <p className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent mt-1'>of carbon emissions</p>
                            </div>

                            <div className='absolute -top-4 -left-4 text-green-500 text-2xl'>🍃</div>
                            <div className='absolute top-10 -right-6 text-green-500 text-xl'>🍃</div>
                            <div className='absolute -bottom-2 left-8 text-green-500 text-lg'>🍃</div>
                            <div className='absolute bottom-16 -right-4 text-green-500 text-xl'>🍃</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full max-w-4xl mt-12 text-center'>
                <div className='bg-gradient-to-r from-[#81C82B]/20 to-[#4595D1]/20 rounded-2xl p-6 mb-6'>
                    <p className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent text-lg font-medium'>
                        You can personalise your footprint more later.
                    </p>
                </div>

                <p className='text-xl font-bold bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent mb-6'>
                    This is just the start of your journey. Now let's find your first step to help the planet.
                </p>

                <button onClick={() => setShowSteps(true)} className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white px-8 py-4 rounded-full text-lg font-bold hover:from-[#81C82B]/90 hover:to-[#4595D1]/90 transition-all duration-300'>
                    Find a step
                </button>
            </div>
        </div>
    )
}

export default Result