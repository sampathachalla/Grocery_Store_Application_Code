import { FaTimes } from "react-icons/fa";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
import AdditionalSettings from "./AdditionalSettings";

const AccountSettings = ({ onClose }) => {
  return (
    <div className="relative p-4 space-y-6 text-black">
      {/* Close Icon in the top right corner */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black focus:outline-none"
        >
          <FaTimes size={20} />
        </button>
      )}

      <h2 className="text-lg font-semibold text-center">Account Settings</h2>
      <AccountInfo />
      <PersonalInfo />
      <AdditionalSettings />
    </div>
  );
};

export default AccountSettings;
