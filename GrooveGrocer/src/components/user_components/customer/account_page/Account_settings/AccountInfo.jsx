import { useState } from "react";

const AccountInfo = () => {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("password123");

  const handleEmailSave = () => setIsEditingEmail(false);
  const handlePasswordSave = () => setIsEditingPassword(false);

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-black">
        Account Information
      </h3>

      {/* Email */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700">Email Address</p>
          {isEditingEmail ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full mt-1"
            />
          ) : (
            <p className="text-sm text-black-700">{email}</p>
          )}
        </div>
        {isEditingEmail ? (
          <div className="space-x-2 ml-4">
            <button
              onClick={handleEmailSave}
              className="text-sm px-3 py-1 rounded-full bg-black text-white hover:bg-gray-800"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditingEmail(false)}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditingEmail(true)}
            className="bg-gray-100 text-sm rounded-full px-3 py-1 hover:bg-gray-200 transition"
          >
            Change
          </button>
        )}
      </div>

      {/* Password */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700">Password</p>
          {isEditingPassword ? (
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full mt-1"
            />
          ) : (
            <p className="text-sm text-black-700">••••••••</p>
          )}
        </div>
        {isEditingPassword ? (
          <div className="space-x-2 ml-4">
            <button
              onClick={handlePasswordSave}
              className="text-sm px-3 py-1 rounded-full bg-black text-white hover:bg-gray-800"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditingPassword(false)}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditingPassword(true)}
            className="bg-gray-100 text-sm rounded-full px-3 py-1 hover:bg-gray-200 transition"
          >
            Change
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
