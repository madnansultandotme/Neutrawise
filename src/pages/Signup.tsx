import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const MultiStepSignup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    verificationCode: ''
  });

  // Refs for input elements
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const ageRef = useRef(null);
  const verificationCodeRef = useRef(null);
  const navigate = useNavigate();
  // Focus on the first input when step changes
  useEffect(() => {
    switch (step) {
      case 1:
        nameRef.current?.focus();
        break;
      case 2:
        emailRef.current?.focus();
        break;
      case 3:
        verificationCodeRef.current?.focus();
        break;
      default:
        break;
    }
  }, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate("/login");
  };

  // Render the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <h2 className="text-center text-xl font-semibold mb-1 text-white drop-shadow-md">Welcome to Nature's Community</h2>
            <p className="text-center text-white/80 text-sm mb-6">Let's get started with your name</p>
            
            <div className="mb-6 relative">
              <input
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                required
              />
            </div>
            
            <button 
              onClick={nextStep}
              disabled={!formData.name.trim()}
              className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold transition-all duration-300 hover:from-green-600 hover:to-teal-600 hover:shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              Continue
            </button>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h2 className="text-center text-xl font-semibold mb-1 text-white drop-shadow-md">Account Details</h2>
            <p className="text-center text-white/80 text-sm mb-6">Enter your account information</p>
            
            <div className="mb-4 relative">
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                required
              />
            </div>
            
            <div className="mb-4 relative">
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                required
              />
            </div>
            
            <div className="mb-6 relative">
              <input
                ref={ageRef}
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                min="1"
                max="120"
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                required
              />
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={prevStep}
                className="flex-1 py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/15 text-sm"
              >
                Back
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.email || !formData.password || !formData.age}
                className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold transition-all duration-300 hover:from-green-600 hover:to-teal-600 hover:shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h2 className="text-center text-xl font-semibold mb-1 text-white drop-shadow-md">Verify Your Email</h2>
            <p className="text-center text-white/80 text-sm mb-6">We've sent a verification code to your email</p>
            
            <div className="mb-6 relative">
              <input
                ref={verificationCodeRef}
                type="text"
                name="verificationCode"
                placeholder="Enter verification code"
                value={formData.verificationCode}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
                required
              />
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={prevStep}
                className="flex-1 py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/15 text-sm"
              >
                Back
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.verificationCode}
                className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold transition-all duration-300 hover:from-green-600 hover:to-teal-600 hover:shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                Verify
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-md">Account Verified!</h2>
            <p className="text-white/80 text-sm mb-6">Your account has been successfully created and verified</p>
            
            <button 
              onClick={handleSubmit}
              className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold transition-all duration-300 hover:from-green-600 hover:to-teal-600 hover:shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5 text-sm"
            >
              Get Started
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  // Progress indicators
  const ProgressDots = () => (
    <div className="flex justify-center mb-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full mx-1 ${i === step ? 'bg-emerald-400' : 'bg-white/30'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden p-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900 to-blue-900 z-0"></div>
      
      {/* Glass Form Container */}
      <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl shadow-black/30 p-6 w-full max-w-md z-20">
        <form className="flex flex-col text-white">
          {/* Logo Space */}
          <div className="w-28 md:w-32 lg:w-40 h-16 mx-auto mb-4  flex items-center justify-center">
             <img 
            src="logoCrop.png" 
            alt="Nature Logo" 
            className="w-28 md:w-32 lg:w-40 h-auto mx-auto"
          />
          </div>
          
          <ProgressDots />
          
          {renderStep()}
        </form>
      </div>
    </div>
  );
};

export default MultiStepSignup;