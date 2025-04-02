import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "", // Not used in DB but can be used later
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/users/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        accountType: formData.accountType,
      });

      alert("Signup Successful!");
      navigate("/"); // Redirect to login
    } catch (err) {
      alert(err.response?.data?.error || "Signup Failed");
    }
  };

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
    <div className="min-h-screen w-screen bg-[#0D0D0D] text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth md:overflow-hidden md:flex md:flex-row">
      <div className="block md:hidden snap-start h-screen flex flex-col justify-center items-center bg-black p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to GrooveGrocer</h1>
        <p className="mt-2 text-sm">{getWelcomeMessage()}</p>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 lg:w-2/3 px-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to GrooveGrocer</h1>
          <p className="mt-4 text-lg">{getWelcomeMessage()}</p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3 p-4 snap-start h-screen">
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
                  required
                >
                  <option value="">Select an option</option>
                  <option value="customer">Customer</option>
                  <option value="vendor">Vendor</option>
                  <option value="delivery">Delivery Agent</option>
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
