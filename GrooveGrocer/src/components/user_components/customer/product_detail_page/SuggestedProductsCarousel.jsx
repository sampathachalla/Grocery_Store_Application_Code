// src/components/user_components/customer/product_detail_page/SuggestedProductsCarousel.jsx
import img2 from "../../../../assets/img2.jpg";
import img3 from "../../../../assets/img3.jpg";

const SuggestedProductsCarousel = () => {
  const suggested = [
    { id: 1, name: "Product 1", price: "$49.99", image: img2 },
    { id: 2, name: "Product 2", price: "$59.99", image: img3 },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-black mb-2">
        Suggested Products
      </h3>
      <div className="flex overflow-x-auto space-x-4">
        {suggested.map((item) => (
          <div
            key={item.id}
            className="min-w-[150px] bg-gray-100 rounded-lg p-2 flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <p className="text-black font-medium text-sm">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProductsCarousel;
