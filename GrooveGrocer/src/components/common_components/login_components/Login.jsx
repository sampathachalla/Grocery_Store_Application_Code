import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsAuthenticated, setRole, setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });

      const user = res.data.user;

      // Set Global State
      setIsAuthenticated(true);
      setRole(user.role);
      setUserId(user.user_id);

      // Save in Local Storage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userId", user.user_id);
      localStorage.setItem("role", user.role);

      // Navigate to respective dashboard
      switch (user.role) {
        case "staff":
          navigate(`/staff/dashboard/${user.user_id}`);
          break;
        case "superAdmin":
          navigate(`/superAdmin/dashboard/${user.user_id}`);
          break;
        case "customer":
          navigate(`/customer/dashboard/${user.user_id}`);
          break;
        case "vendor":
          navigate(`/vendor/dashboard/${user.user_id}`);
          break;
        case "delivery":
        case "delivery_agent":
          navigate(`/delivery/dashboard/${user.user_id}`);
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[#0D0D0D] text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth md:overflow-hidden md:flex md:flex-row">
      {/* Mobile Header */}
      <div className="block md:hidden snap-start h-screen flex flex-col justify-center items-center bg-black p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome Back to GrooveGrocer</h1>
        <p className="mt-2 text-sm">
          Log in to access your account and manage your groceries seamlessly!
        </p>
      </div>

      {/* Left Branding Section */}
      <div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 lg:w-2/3 px-12">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Welcome Back to GrooveGrocer
          </h1>
          <p className="mt-4 text-base lg:text-lg">
            Log in to access your account and manage your groceries seamlessly!
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3 p-4 snap-start h-screen">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-black text-center mb-6">
            Login
          </h2>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-black rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-black rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Login
            </button>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-blue-500 hover:underline"
              >
                Sign up here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
