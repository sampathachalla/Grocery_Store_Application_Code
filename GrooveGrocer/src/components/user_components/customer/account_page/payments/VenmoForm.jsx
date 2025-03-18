const VenmoForm = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <p className="text-gray-700 text-sm">
        You'll be redirected to Venmo to complete the payment.
      </p>
      <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        Connect Venmo
      </button>
    </div>
  );
};

export default VenmoForm;
