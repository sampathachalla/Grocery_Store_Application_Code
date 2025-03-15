import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Dropdown icon
import { useNavigate } from "react-router-dom"; // Navigation

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  // Dynamic Welcome Message Based on Account Type Selection
  const getWelcomeMessage = () => {
    switch (formData.accountType) {
      case "customer":
        return "Shop fresh groceries and get them delivered to your doorstep!";
      case "vendor":
        return "Expand your business by selling groceries on GrooveGrocer!";
      case "delivery":
        return "Join us as a delivery partner and help customers get their groceries on time!";
      default:
        return "Sign up and start your grocery journey with us!";
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-[#0D0D0D] text-white overflow-hidden">
      {/* Left Section - Dynamic Branding Message */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 h-full px-12">
        <h1 className="text-4xl font-bold">Welcome to GrooveGrocer</h1>
        <p className="mt-4 text-lg text-center">{getWelcomeMessage()}</p>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-black text-center mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-lg bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-lg bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-lg bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-lg bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-lg bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Account Type Dropdown with Chevron Icon */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">
                Account Type
              </label>
              <div className="relative">
                <select
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black rounded-lg bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="customer">Customer</option>
                  <option value="vendor">Vendor</option>
                  <option value="delivery">Delivery</option>
                </select>
                <FaChevronDown className="absolute top-3 right-3 text-white pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 border-black"
                required
              />
              <label className="text-gray-700">
                I agree to the terms and conditions.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Sign Up
            </button>

            {/* Already have an account? Login Here */}
            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/")}
                className="text-blue-500 hover:underline"
              >
                Login here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
