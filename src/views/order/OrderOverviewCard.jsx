const OrderOverviewCard = () => {
  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm basis-[60%]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Order Overview</h2>

        <select className="border rounded-lg px-3 py-1 text-sm">
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </select>
      </div>

      {/* TOTAL ORDER */}
      <div>
        <p className="text-sm text-gray-500">Total Order</p>
        <div className="flex items-end gap-3">
          <h1 className="text-4xl font-bold">2,520</h1>
          <span className="text-green-600 font-semibold text-sm">
            +10.5%
          </span>
          <span className="text-gray-500 text-sm">Compared to last week</span>
        </div>
      </div>

      {/* STATUS ROW */}
      <div className="flex items-center gap-7 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <p className="text-sm font-medium">Active Order 123</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p className="text-sm font-medium">Order Item 107</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <p className="text-sm font-medium">Return Order 530</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sky-400"></div>
          <p className="text-sm font-medium">Fulfilled Orders 1710</p>
        </div>
      </div>

      {/* COLOR BAR */}
      <div className="mt-6 flex h-3 overflow-hidden rounded-full">
        <div className="bg-blue-500 w-[10%]"></div>
        <div className="bg-green-400 w-[14%]"></div>
        <div className="bg-orange-400 w-[20%]"></div>
        <div className="bg-sky-400 w-[60%]"></div>
      </div>
    </div>
  );
};

export default OrderOverviewCard;
