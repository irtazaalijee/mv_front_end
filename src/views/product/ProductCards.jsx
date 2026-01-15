import React from 'react'


const ProductCards = () => {
  // 🔹 Dummy data (later API se replace kar dena)
  const stats = [
    {
      title: "Total Products",
      value: 1245,
      subtitle: "All listed products",
      color: "indigo",
    },
    {
      title: "Active Products",
      value: 980,
      subtitle: "Live on store",
      color: "emerald",
    },
    {
      title: "Out of Stock",
      value: 120,
      subtitle: "Needs restock",
      color: "red",
    },
    {
      title: "Low Stock",
      value: 85,
      subtitle: "Below threshold",
      color: "amber",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border shadow-sm p-4 hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-1">
                {item.value}
              </h2>
              <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
            </div>

            {/* Right Indicator */}
            <div
              className={`w-12 h-12 rounded-lg bg-${item.color}-100 flex items-center justify-center`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-${item.color}-500`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
