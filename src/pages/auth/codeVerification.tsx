import React from 'react'
const CodeVerification = ({ Email }) => {
    const [code, setCode] = React.useState('');
  return (
    <div className='w-full relative items-center justify-start flex flex-col bg-gradient-to-br from-green-50 to-blue-50'>
            <div className='absolute justify-end z-0 items-end w-full h-full flex'>
                <img src="vector_br1.png" className='absolute left-0 hidden sm:flex sm:w-[25%] h-[60%] lg:w-[35%] max-w-2xl' alt="" />
            </div>
            <div className='w-[90%] md:w-[50%] flex flex-col z-10 pb-10 justify-center items-center '>
                <div className='flex flex-row justify-center items-center mt-16'>
                    <img src="Icon1.png" height={85} width={85} alt="Logo" />
                    <div className='font-dmsans'>
                    <h1 className='text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                    </div> 
                </div>
                <div className='flex'>
                    <p className='font-dmsans text-center font-black text-2xl mt-5 ml-2'>Enter 6-digit verification code</p>
                </div>
                <div>
                    <p className='font-dmsans text-center text-sm mt-2 text-gray-600'>We sent a code to {Email}</p>
                </div>
                <div className='w-full flex justify-center mt-5'>
                    <div className='flex gap-3'>
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                type='text'
                                maxLength={1}
                                className='w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-[#81C82B] focus:border-[#81C82B]'
                                onKeyDown={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    if (e.key === 'Backspace' && target.value === '' && index > 0) {
                                        const prevInput = target.parentElement?.children[index - 1] as HTMLInputElement;
                                        prevInput?.focus();
                                    }
                                }}
                                onInput={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    const value = target.value;
                                    
                                    // Update the code string
                                    const newCodeArray = code.split('');
                                    newCodeArray[index] = value;
                                    const newCode = newCodeArray.join('');
                                    setCode(newCode);
                                    console.log(newCode);
                                    
                                    if (value && index < 5) {
                                        const nextInput = target.parentElement?.children[index + 1] as HTMLInputElement;
                                        nextInput?.focus();
                                    }
                                }}
                                value={code[index] || ''}
                            />
                        ))}
                    </div>
                </div>
                <div className='w-full flex justify-center '>
                        <button 
                                onClick={() => window.location.href = '/onboarding'}
                                className='w-[60%] bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white max-w-72 font-dmsans text-lg font-black px-6 py-3 rounded-full mt-10 hover:scale-105 transition-transform duration-300'>
                                Verify Code
                        </button>
                </div>
                <button className='bg-gray-200 border-2 border-black text-black font-dmsans text-lg font-black px-16 py-3 rounded-full mt-5 hover:scale-105 transition-transform duration-300'>
                        Send New Code
                    </button>

                <div>
                    <button onClick={() => window.location.href = '/auth'} className='font-dmsans text-center font-black underline mt-7'>Cancel</button>
                </div>
                
            </div>
        </div>
  )
}

export default CodeVerification