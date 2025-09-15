// LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
interface LoginData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login submission here
    console.log('Login submitted:', loginData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden p-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900 to-blue-900 z-0"></div>
      
      
      {/* Glass Form Container */}
      <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl shadow-black/30 p-6 w-full max-w-md z-20">
        <form className="flex flex-col text-white" onSubmit={handleSubmit}>
          {/* Logo Space */}
          <div className="flex justify-center mb-4">
            <img 
            src="logoCrop.png" 
            alt="Nature Logo" 
            className="w-28 md:w-32 lg:w-40 h-auto mx-auto"
          />
          </div>
          
          <h2 className="text-center text-xl font-semibold mb-1 text-white drop-shadow-md">Welcome Back</h2>
          <p className="text-center text-white/80 text-sm mb-6">Sign in to your nature account</p>
          
          <div className="mb-4 relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={loginData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
              required
            />
          </div>
          
          <div className="mb-6 relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/15 focus:border-emerald-400/50 focus:shadow focus:shadow-emerald-400/30 transition-all duration-300 text-sm"
              required
            />
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-white/80 text-sm">
              <input type="checkbox" className="rounded bg-white/10 border-white/20 text-emerald-500 focus:ring-emerald-500" />
              <span className="ml-2">Remember me</span>
            </label>
            
            <a href="#" className="text-emerald-300 text-sm hover:text-emerald-200 hover:underline">
              Forgot password?
            </a>
          </div>
          
          <button 
            type="submit" 
            className="py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold transition-all duration-300 hover:from-green-600 hover:to-teal-600 hover:shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5 mb-4 text-sm"
          >
            Sign In
          </button>
          
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-white/20"></div>
            <span className="px-3 text-white/70 text-xs">or</span>
            <div className="flex-grow h-px bg-white/20"></div>
          </div>
          
          <button 
            type="button" 
            className="py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5 mb-6 text-sm"
          >
            Sign in with Google
          </button>
          
            <p className="text-center text-white/80 text-xs">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-emerald-300 font-semibold hover:text-emerald-200 hover:underline"
              onClick={() => navigate("/")}
            >
              Sign up
            </button>
            </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;