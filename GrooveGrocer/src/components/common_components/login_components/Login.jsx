import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy Credentials
  const dummyUsers = {
    "staff@example.com": { password: "staff123", role: "staff", id: "staff_1" },
    "admin@example.com": {
      password: "admin123",
      role: "superAdmin",
      id: "admin_1",
    },
    "customer@example.com": {
      password: "customer123",
      role: "customer",
      id: "cust_1",
    },
    "vendor@example.com": {
      password: "vendor123",
      role: "vendor",
      id: "vendor_1",
    },
    "delivery@example.com": {
      password: "delivery123",
      role: "delivery",
      id: "del_1",
    },
  };

  const handleLogin = () => {
    if (dummyUsers[email] && dummyUsers[email].password === password) {
      setIsAuthenticated(true);
      setRole(dummyUsers[email].role);

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userId", dummyUsers[email].id);
      localStorage.setItem("role", dummyUsers[email].role);

      switch (dummyUsers[email].role) {
        case "staff":
          navigate(`/staff/dashboard/${dummyUsers[email].id}`);
          break;
        case "superAdmin":
          navigate(`/superAdmin/dashboard/${dummyUsers[email].id}`);
          break;
        case "customer":
          navigate(`/customer/dashboard/${dummyUsers[email].id}`);
          break;
        case "vendor":
          navigate(`/vendor/dashboard/${dummyUsers[email].id}`);
          break;
        case "delivery":
          navigate(`/delivery/dashboard/${dummyUsers[email].id}`);
          break;
        default:
          navigate("/");
      }
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-[#0D0D0D] text-white overflow-hidden">
      {/* Left Section - Branding Message */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 h-full px-12">
        <h1 className="text-4xl font-bold">Welcome Back to GrooveGrocer</h1>
        <p className="mt-4 text-lg text-center">
          Log in to access your account and manage your groceries seamlessly!
        </p>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-black text-center mb-6">
            Login
          </h2>

          <form className="space-y-4">
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
              type="button"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
              onClick={handleLogin}
            >
              Login
            </button>

            {/* Sign Up Redirect Button */}
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <button
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
