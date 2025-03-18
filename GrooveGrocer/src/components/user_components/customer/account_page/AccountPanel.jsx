import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaCog,
  FaBell,
  FaMapMarkerAlt,
  FaCreditCard,
  FaPowerOff,
  FaSignOutAlt,
} from "react-icons/fa";

import Orders from "./orders/Orders";
import AccountSettings from "./Account_settings/AccountSettings";
import NotificationSettings from "./Notification_Settings/NotificationSettings";
import Address from "./Address/Address";
import Payments from "./payments/Payments";
import Promos from "./promos/Promos";

const sections = [
  { name: "Orders", icon: <FaShoppingCart />, component: <Orders /> },
  { name: "Account Settings", icon: <FaCog />, component: <AccountSettings /> },
  {
    name: "Notification Settings",
    icon: <FaBell />,
    component: <NotificationSettings />,
  },
  { name: "Addresses", icon: <FaMapMarkerAlt />, component: <Address /> },
  { name: "Payments", icon: <FaCreditCard />, component: <Payments /> },
  { name: "Promos", icon: <FaPowerOff />, component: <Promos /> },
  { name: "Logout", icon: <FaSignOutAlt />, component: null },
];

const AccountPanel = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [closingPanel, setClosingPanel] = useState(false);
  const [isPanelMounted, setIsPanelMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const handleSectionClick = (sectionName) => {
    if (sectionName === "Logout") {
      console.log("Logging out...");
      return;
    }

    if (sectionName === activeSection) {
      // Close panel
      setAnimateIn(false);
      setTimeout(() => {
        setActiveSection(null);
        setIsPanelMounted(false);
      }, 500); // match duration
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

  const ActiveComponent = sections.find(
    (sec) => sec.name === activeSection
  )?.component;

  return (
    <div className="relative h-full bg-white text-black">
      {/* Sidebar */}
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

      {/* Slide-in Panel */}
      {isPanelMounted && ActiveComponent && (
        <div
          className={`absolute top-0 left-full h-full w-[40vw] bg-white p-6 border-l border-gray-200 overflow-y-auto z-10 transform transition-transform duration-500 ${
            animateIn ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {ActiveComponent}
        </div>
      )}
    </div>
  );
};

export default AccountPanel;
