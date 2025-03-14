import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Extended Dummy Credentials
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

    // Added More Users for Testing
    "customer2@example.com": {
      password: "cust456",
      role: "customer",
      id: "cust_2",
    },
    "customer3@example.com": {
      password: "cust789",
      role: "customer",
      id: "cust_3",
    },
    "vendor2@example.com": {
      password: "vend456",
      role: "vendor",
      id: "vendor_2",
    },
    "vendor3@example.com": {
      password: "vend789",
      role: "vendor",
      id: "vendor_3",
    },
    "delivery2@example.com": {
      password: "del456",
      role: "delivery",
      id: "del_2",
    },
    "delivery3@example.com": {
      password: "del789",
      role: "delivery",
      id: "del_3",
    },
    "staff2@example.com": {
      password: "staff456",
      role: "staff",
      id: "staff_2",
    },
    "admin2@example.com": {
      password: "admin456",
      role: "superAdmin",
      id: "admin_2",
    },
  };

  const handleLogin = () => {
    if (dummyUsers[email] && dummyUsers[email].password === password) {
      setIsAuthenticated(true);
      setRole(dummyUsers[email].role);

      // Store authentication info in localStorage for persistence
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userId", dummyUsers[email].id);
      localStorage.setItem("role", dummyUsers[email].role);

      // Redirect based on role and unique user ID
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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold text-center mb-4">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
