import React from 'react'
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const EmailInput = ({ onEmailSubmit }) => {
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [currentView, setCurrentView] = React.useState('email'); // 'email', 'login', or 'signup'

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
    const handleContinue = () => {
            if (!email) {
                    setEmailError('Email is required');
                    return;
            }
            if (!validateEmail(email)) {
                    setEmailError('Please enter a valid email address');
                    return;
            }
            onEmailSubmit(email);
            
            if (email === "user@gmail.com") {
                    setCurrentView('login');
            } 
            else 
            {
                    setCurrentView('signup');
            }
    };

    // Render based on current view
    if (currentView === 'login') {
            return <Login Email={email}/>;
    }

    if (currentView === 'signup') {
            return <Signup Email={email} />;
    }
  return (
    <div className='w-full items-center justify-start flex flex-col bg-gradient-to-br from-green-50 to-blue-50'>
            <div className='w-[90%] md:w-[50%] flex flex-col pb-10 justify-center items-center '>
                <div className='absolute top-10 right-10'>
                </div>
                <div className='flex flex-row justify-center items-center mt-16'>
                    <img src="Icon1.png" height={85} width={85} alt="Logo" />
                    <div className='font-dmsans'>
                    <h1 className='text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent'>Neutrawise</h1>
                    </div> 
                </div>
                <div className='flex'>
                    <p className='font-dmsans text-center font-black text-2xl mt-5 ml-2'>Own your footprint, shape the future.</p>
                </div>
                <div>
                    <p className='font-dmsans text-center font-bold text-lg mt-5'>Email Address</p>
                </div>
                <div className='w-full flex justify-center'>
                        <input type="email" value={email} onChange={handleEmailChange}
                                className='w-[60%] border-2 border-gray-300 rounded-full max-w-72 px-4 py-2 mt-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#81C82B]' 
                                placeholder='Enter your email' 
                        />
                </div>
                {emailError && (
                        <div className='w-full flex justify-center mt-2'>
                                <p className='text-red-500 text-sm'>{emailError}</p>
                        </div>
                )}
                <div className='w-full flex justify-center '>
                        <button 
                                onClick={handleContinue} 
                                className='w-[60%] bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white max-w-72 font-dmsans text-lg font-black px-6 py-3 rounded-full mt-10 hover:scale-105 transition-transform duration-300'>
                                Continue
                        </button>
                </div>

                <div>
                    <button className='font-dmsans text-center font-light text-xs mt-7'>By clicking continue you agree to Neutrawise's <span className='underline font-black'>Terms of use</span> and acknowledge the terms of our <span className='underline font-black'>Privacy Policy.</span></button>
                </div>
                
            </div>
        </div>
  )
}

export default EmailInput