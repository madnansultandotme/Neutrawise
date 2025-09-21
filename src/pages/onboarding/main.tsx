import React from 'react'
import AboutUser from './aboutUser';

const Onboarding = () => {
    const [showAboutUser, setShowAboutUser] = React.useState(false);

    if (showAboutUser) {
        return <AboutUser />;
    }

    return (
        <div className='w-full relative items-center justify-start flex h-screen flex-col pb-14 bg-gradient-to-br from-green-50 to-blue-50'>
            <div className='w-[90%] md:w-[70%] lg:w-[50%] flex flex-col transparent pb-14 justify-center items-center '>
                <div className='flex flex-row justify-center items-center mt-7'>
                    <img src="Icon1.png" height={65} width={65} alt="Logo" />
                    <div className='font-dmsans'>
                        <h1 className='text-4xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                    </div>
                </div>
                <div>
                    <p className='font-dmsans text-center font-bold text-lg mt-5 ml-2'>Answer a few questions to discover your carbon footprint. Then we'll help you find ways to help the planet.</p>
                </div>
                <div className='w-full flex justify-center '>
                    <img src="earth.png" className='w-[50%]' alt="onboarding illustration" />
                </div>
                <div className='flex justify-center w-full'>
                    <button onClick={() => setShowAboutUser(true)} className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-dmsans text-lg font-black px-6 py-3 w-[60%] rounded-full mt-4 hover:scale-105 transition-transform duration-300'>
                        Next
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Onboarding;