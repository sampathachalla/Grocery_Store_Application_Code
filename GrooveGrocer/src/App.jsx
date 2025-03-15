import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

// Common Components
import Login from "./components/common_components/login_components/Login";
import Signup from "./components/common_components/login_components/Signup"; // Added Signup Page

// Admin Components
import StaffDashboard from "./components/admin_components/staff/StaffDashboard";
import SuperAdminDashboard from "./components/admin_components/superAdmin/SuperAdminDashboard";

// User Components
import CustomerDashboard from "./components/user_components/customer/CustomerDashboard";
import VendorDashboard from "./components/user_components/vendor/VendorDashboard";
import DeliveryDashboard from "./components/user_components/delivery/DeliveryDashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);

  // Load authentication state from localStorage on app load
  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    const storedUserId = localStorage.getItem("userId");
    const storedRole = localStorage.getItem("role");

    setIsAuthenticated(auth);
    setUserId(storedUserId);
    setRole(storedRole);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
              setRole={setRole}
              setUserId={setUserId}
            />
          }
        />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Render respective dashboards based on role & userId */}
        <Route
          path="/staff/dashboard/:userId"
          element={
            isAuthenticated && role === "staff" ? (
              <StaffDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/superAdmin/dashboard/:userId"
          element={
            isAuthenticated && role === "superAdmin" ? (
              <SuperAdminDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/customer/dashboard/:userId"
          element={
            isAuthenticated && role === "customer" ? (
              <CustomerDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/vendor/dashboard/:userId"
          element={
            isAuthenticated && role === "vendor" ? (
              <VendorDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/delivery/dashboard/:userId"
          element={
            isAuthenticated && role === "delivery" ? (
              <DeliveryDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
