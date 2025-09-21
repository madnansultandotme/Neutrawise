import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Define props type
interface SignupProps {
  Email?: string; // optional since you default it
}

const Signup: React.FC<SignupProps> = ({ Email }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>(Email || "");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    const newErrors: { email?: string; password?: string; confirmPassword?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (
      password.length < 8 ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[^A-Za-z0-9]/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters and include lowercase, uppercase, number, and symbol";
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {

      // Then at the placeholder:
      navigate('/codeVerification', { state: { Email: email } });
    
  };

  return (
    <div className="w-full items-center relative justify-start flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <div className='absolute justify-end items-end z-0 w-full h-full flex'>

                <img src="vector_tr1.png" className='h-full hidden sm:flex sm:w-[45%] lg:w-[55%] max-w-2xl' alt="image" />
                <img src="vector_br1.png" className='absolute left-0 hidden sm:flex sm:w-[25%] h-[60%] lg:w-[35%] max-w-2xl' alt="" />
            </div>
      <form
        className="w-[90%] md:w-[50%] flex flex-col z-10 pb-10 justify-center items-center"
        onSubmit={handleSubmit}
      >
        {/* UI content remains the same */}
        <div className="flex flex-row justify-center items-center mt-6">
          <img src="Icon1.png" height={80} width={80} alt="Logo" />
          <div className="font-dmsans">
            <h1 className="text-5xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent">
              Neutrawise
            </h1>
          </div>
        </div>

        <div className="flex mt-8">
          <p className="font-dmsans text-center font-black text-2xl mb-4 ml-2">
            Your journey to net zero starts here.
          </p>
        </div>

        <div>
          <p className="font-dmsans text-center font-black mt-5">Email Address</p>
        </div>

        <div className="w-full flex justify-center">
          <input
            type="email"
            className="w-[60%] border-2 max-w-96 border-gray-300 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

        <div>
          <p className="font-dmsans text-center font-black mt-5">Password</p>
        </div>
        <div>
          <p className="font-dmsans text-center font-light text-xs mt-2">
            Password must be a minimum of 8 characters, including lowercase, uppercase, a number and
            symbol.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <input
            type="password"
            className="w-[60%] border-2 max-w-96 border-gray-300 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

        <div>
          <p className="font-dmsans text-center font-black mt-5">Confirm Password</p>
        </div>

        <div className="w-full flex justify-center">
          <input
            type="password"
            className="w-[60%] border-2 border-gray-300 max-w-96 rounded-full px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#81C82B]"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
        )}

        <div className="w-full flex mb-10 justify-center ">
          <button
            type="submit"
            className="w-[60%] max-w-96 bg-gradient-to-r from-[#81C82B] to-[#4595D1] text-white font-dmsans font-black px-6 py-3 rounded-full mt-10 hover:scale-105 transition-transform duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>

    </div>
  );
};

export default Signup;
