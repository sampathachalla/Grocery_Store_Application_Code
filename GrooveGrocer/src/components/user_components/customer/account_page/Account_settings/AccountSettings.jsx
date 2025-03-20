import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
import AdditionalSettings from "./AdditionalSettings";

const AccountSettings = () => {
  return (
    <div className="p-4 space-y-6 text-black">
      <h2 className="text-lg font-semibold text-center">Account Settings</h2>

      <AccountInfo />
      <PersonalInfo />
      <AdditionalSettings />
    </div>
  );
};

export default AccountSettings;
