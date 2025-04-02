import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaCog,
  FaBell,
  FaMapMarkerAlt,
  FaCreditCard,
  FaPowerOff,
  FaSignOutAlt,
  FaArrowLeft,
} from "react-icons/fa";

import Orders from "./orders/Orders";
import AccountSettings from "./Account_settings/AccountSettings";
import NotificationSettings from "./Notification_Settings/NotificationSettings";
import Address from "./Address/Address";
import Payments from "./payments/Payments";
import Promos from "./promos/Promos";

const AccountPanel = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isPanelMounted, setIsPanelMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Track screen width to decide mobile vs. desktop behavior
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionClick = (sectionName) => {
    if (sectionName === "Logout") {
      console.log("Logging out...");
      return;
    }

    if (sectionName === activeSection) {
      // Close sub-panel
      setAnimateIn(false);
      setTimeout(() => {
        setActiveSection(null);
        setIsPanelMounted(false);
      }, 500); // match CSS duration
    } else if (activeSection) {
      // Close current, then open new panel
      setAnimateIn(false);
      setTimeout(() => {
        setActiveSection(sectionName);
        setIsPanelMounted(true);
        setTimeout(() => setAnimateIn(true), 10); // slight delay to trigger animation
      }, 500);
    } else {
      // First open
      setActiveSection(sectionName);
      setIsPanelMounted(true);
      setTimeout(() => setAnimateIn(true), 10);
    }
  };

  // Define sections and pass onClose to components that support a top-right close icon.
  const sections = [
    {
      name: "Orders",
      icon: <FaShoppingCart />,
      component: <Orders onClose={() => handleSectionClick("Orders")} />,
    },
    {
      name: "Account Settings",
      icon: <FaCog />,
      component: (
        <AccountSettings
          onClose={() => handleSectionClick("Account Settings")}
        />
      ),
    },
    {
      name: "Notification Settings",
      icon: <FaBell />,
      component: (
        <NotificationSettings
          onClose={() => handleSectionClick("Notification Settings")}
        />
      ),
    },
    {
      name: "Addresses",
      icon: <FaMapMarkerAlt />,
      component: <Address onClose={() => handleSectionClick("Addresses")} />,
    },
    {
      name: "Payments",
      icon: <FaCreditCard />,
      component: <Payments onClose={() => handleSectionClick("Payments")} />,
    },
    {
      name: "Promos",
      icon: <FaPowerOff />,
      // Updated: pass onClose for Promos as well.
      component: <Promos onClose={() => handleSectionClick("Promos")} />,
    },
    { name: "Logout", icon: <FaSignOutAlt />, component: null },
  ];

  const ActiveComponent = sections.find(
    (sec) => sec.name === activeSection
  )?.component;

  return (
    <div className="relative h-full bg-white text-black">
      {/* Main Account Sidebar */}
      <div className="w-full h-full p-4 pt-16 flex flex-col space-y-3 overflow-y-auto">
        {sections.map((sec) => (
          <button
            key={sec.name}
            onClick={() => handleSectionClick(sec.name)}
            className={`flex items-center space-x-3 px-4 py-2 rounded-full transition ${
              activeSection === sec.name && isPanelMounted
                ? "bg-black text-white font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <span>{sec.icon}</span>
            <span>{sec.name}</span>
          </button>
        ))}
      </div>

      {/* Slide-in Sub-panel */}
      {isPanelMounted && ActiveComponent && (
        <div
          className={`
            absolute top-0 h-full bg-white p-6 overflow-y-auto z-10
            transform transition-transform duration-500
            w-full sm:w-[40vw]
            border-l border-gray-200 sm:border-l-0
            ${
              // On mobile (<640px): sub-panel covers the main panel (left:0 when open)
              // On desktop (>=640px): sub-panel slides in from the right.
              screenWidth < 640
                ? animateIn
                  ? "left-0"
                  : "-left-full"
                : "left-full " +
                  (animateIn ? "translate-x-0" : "-translate-x-full")
            }
          `}
        >
          {/* Back Button for Mobile (visible only on mobile) */}
          {screenWidth < 640 && (
            <div className="sm:hidden mb-4">
              <button
                onClick={() => handleSectionClick(activeSection)}
                className="flex items-center space-x-2 text-gray-800"
              >
                <FaArrowLeft size={20} />
                <span>Back</span>
              </button>
            </div>
          )}
          {ActiveComponent}
        </div>
      )}
    </div>
  );
};

export default AccountPanel;
