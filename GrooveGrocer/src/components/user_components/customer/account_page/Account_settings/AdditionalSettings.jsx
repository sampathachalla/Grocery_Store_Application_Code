const AdditionalSettings = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-md font-semibold">Additional Settings</h3>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-700">Language Preference</p>
        <button className="bg-gray-100 text-sm rounded-full px-3 py-1 hover:bg-gray-200 transition">
          Change
        </button>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-700">Deactivate Account</p>
        <button className="bg-gray-100 text-sm rounded-full px-3 py-1 hover:bg-gray-200 transition text-red-600">
          Manage
        </button>
      </div>
    </div>
  );
};

export default AdditionalSettings;
