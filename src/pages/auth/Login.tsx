import React, { useState } from 'react'

interface LoginProps {
  Email?: string; // optional since you default it
}
const Login: React.FC<LoginProps> = ({ Email }) => {
    const [email, setEmail] = useState<string>(Email || "");
    const [emailError, setEmailError] = React.useState('');
    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        
        if (value && !validateEmail(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };
  return (
    <div className='w-full items-center justify-start flex flex-col bg-gradient-to-br from-green-50 to-blue-50'>
            <div className='w-[90%] md:w-[50%] flex flex-col pb-10 justify-center items-center '>
                <div className='absolute top-10 right-10'>
                </div>
                <div className='flex flex-row justify-center items-center mt-6'>
                    <img src="Icon1.png" height={65} width={65} alt="Logo" />
                    <div className='font-dmsans'>
                    <h1 className='text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                    </div> 
                </div>
                <div className='flex mt-10'>
                    <p className='font-dmsans text-center font-black text-3xl mt-5 ml-2'>Welcome Back!</p>
                </div>
                <div>
                    <p className='font-dmsans text-center font-black mt-5'>Email Address</p>
                </div>
                <div className='w-full flex justify-center'>
                        <input type="email" value={email} onChange={handleEmailChange}
                                className='w-[60%] border-2 border-gray-300 rounded-full max-w-96 px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]' 
                                placeholder='Enter your email' 
                        />
                </div>
                {emailError && (
                        <div className='w-full flex justify-center mt-2'>
                                <p className='text-red-500 text-sm'>{emailError}</p>
                        </div>
                )}
                <div>
                    <p className='font-dmsans text-center font-black mt-5'>Password</p>
                </div>
                <div className='w-full flex justify-center'>
                        <input type="password"
                                className='w-[60%] border-2 border-gray-300 rounded-full max-w-96 px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]' 
                                placeholder='Password' 
                        />
                </div>
                <div className='w-full flex justify-center mt-5'>
                    <button className='font-dmsans text-sm underline'>Forgot Password?</button>
                </div>

                <div className='w-full flex justify-center '>
                        <button 

                                className='w-[60%] max-w-96 bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-dmsans text-lg font-black px-6 py-3 rounded-full mt-5 hover:scale-105 transition-transform duration-300'>
                                Sign In
                        </button>
                </div>
                
            </div>
        </div>
  )
}

export default Login