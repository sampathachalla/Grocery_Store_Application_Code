const CardForm = () => {
  return (
    <form className="bg-gray-50 p-4 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">CVV</label>
          <input
            type="text"
            placeholder="123"
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          />
        </div>
      </div>
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        Save Card
      </button>
    </form>
  );
};

export default CardForm;
