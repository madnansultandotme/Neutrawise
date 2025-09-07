import React, { useState } from "react";

// Define props type
interface SignupProps {
  Email?: string; // optional since you default it
}

const Signup: React.FC<SignupProps> = ({ Email }) => {
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
    e.preventDefault();
    if (validate()) {
      alert("Signup successful!");
    }
  };

  return (
    <div className="w-full items-center justify-start flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <form
        className="w-[90%] md:w-[50%] flex flex-col pb-10 justify-center items-center"
        onSubmit={handleSubmit}
      >
        {/* UI content remains the same */}
        <div className="flex flex-row justify-center items-center mt-6">
          <img src="Icon1.png" height={65} width={65} alt="Logo" />
          <div className="font-dmsans">
            <h1 className="text-4xl font-black bg-gradient-to-r from-[#81C82B] to-[#4595D1] bg-clip-text text-transparent">
              Neutrawise
            </h1>
          </div>
        </div>

        <div className="flex mt-10">
          <p className="font-dmsans text-center font-black text-2xl mt-5 ml-2">
            Climate action starts here
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

        <div className="w-full flex justify-center ">
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
