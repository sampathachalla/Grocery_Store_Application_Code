import { useParams } from "react-router-dom";

const StaffDashboard = () => {
  const { userId } = useParams(); // Extract the user ID from the URL

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white">
        Welcome, Staff Member {userId}!
      </h1>
    </div>
  );
};

export default StaffDashboard;
