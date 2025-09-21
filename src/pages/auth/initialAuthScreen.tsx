import React from 'react'

const InitialAuthScreen = () => {
  return (
        <div className='w-full relative items-center justify-start flex flex-col bg-gradient-to-br from-green-50 to-blue-50'>
            <div className='absolute justify-end z-0 items-end w-full h-full flex'>

                <img src="vector_tr1.png" className='h-full hidden sm:flex sm:w-[45%] lg:w-[55%] max-w-2xl' alt="image" />
                <img src="vector_br1.png" className='absolute left-0 hidden sm:flex sm:w-[25%] h-[60%] lg:w-[35%] max-w-2xl' alt="" />
            </div>
            <div className='w-[90%] md:w-[50%] flex flex-col z-10 transparent pb-14 justify-center items-center '>   
                <div className='flex flex-row justify-center items-center mt-9'>
                    <img src="Icon1.png" height={80} width={80} alt="Logo" />
                    <div className='font-dmsans'>
                    <h1 className='text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                    </div> 
                </div>
                <div className='flex'>
                    <p className='font-dmsans text-center font-black text-3xl mt-5 ml-2'>Sustainability starts with you.</p>
                </div>
                <div>
                    <button onClick={() => window.location.href = '/getStarted'} className='bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-dmsans text-lg font-black px-6 py-3 rounded-full mt-10 hover:scale-105 transition-transform duration-300'>
                        Sign Up For Free!
                    </button>
                </div>
                <div>
                    <p className='font-dmsans font-medium text-xl mt-7'>Already have an account?</p>
                </div>
                <div>
                    <button onClick={() => window.location.href = '/getStarted'} className='bg-gray-200 border-2 border-black text-black font-dmsans text-xl font-black px-16 py-3 rounded-full mt-5 hover:scale-105 transition-transform duration-300'>
                        Log In
                    </button>
                </div>
                <div>
                    <button className='font-dmsans text-center font-medium text-xl mt-7 underline'>Find out more</button>
                </div>
                
            </div>
        </div>
        
    
  )
}

export default InitialAuthScreen