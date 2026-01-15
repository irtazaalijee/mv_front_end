export const orderTableFilters = [
    { label: "All Orders", count: 2220 },
    { label: "Pending", count: 80 },
    { label: "Payment Confirmation", count: 22 },
    { label: "Confirmed", count: 200 },
    { label: "Process", count: 67 },
    { label: "Delivered", count: 1450 },
    { label: "Cancel", count: 230 },
];

export const orderTableSortingFilters = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
    "Oldest First",
];

export const orderColumn_Header_Keys = [
    { header: "Order ID", key: "id" },
    { header: "Customer", key: "customer" },
    { header: "Phone", key: "phone" },
    { header: "Product", key: "product" },
    { header: "Qty", key: "quantity" },
    { header: "Date", key: "date" },
    { header: "Amount", key: "amount" },
    { header: "Status", key: "status" },
];


export const orderGridData = [
    {
        id: "#10231",
        customer: "Ali Raza",
        phone: "0312-4567890",
        product: "Nike Air Max 270",
        quantity: 1,
        date: "2025-01-22 14:22",
        amount: "14,500 PKR",
        paymentMethod: "Visa **** 4242",
        paymentStatus: "Paid",
        shippingMethod: "Leopard Courier",
        shippingAddress: "House #22, Block H, North Nazimabad, Karachi",
        trackingId: "LCS93482342PK",
        notes: "Handle with care.",
        status: "Shipped"
    },

    {
        id: "#10232",
        customer: "Sara Khan",
        phone: "0331-9876543",
        product: "Adidas Hoodie",
        quantity: 2,
        date: "2025-01-23 10:05",
        amount: "9,000 PKR",
        paymentMethod: "COD",
        paymentStatus: "Pending",
        shippingMethod: "TCS",
        shippingAddress: "Street 4, DHA Phase 5, Karachi",
        trackingId: "TCS32940323PK",
        notes: "Deliver after 5 PM.",
        status: "Processing"
    },

    {
        id: "#10233",
        customer: "Hamza Nadeem",
        phone: "0301-1234567",
        product: "Apple AirPods Pro 2",
        quantity: 1,
        date: "2025-01-25 12:40",
        amount: "54,000 PKR",
        paymentMethod: "Mastercard **** 1121",
        paymentStatus: "Paid",
        shippingMethod: "BlueEx",
        shippingAddress: "Flat 402, Gulshan-e-Iqbal Block 13D, Karachi",
        trackingId: "BX5549302PK",
        notes: "Call before delivery.",
        status: "Delivered"
    },

    {
        id: "#10234",
        customer: "Zohaib Ali",
        phone: "0345-9988776",
        product: "Gaming Mouse (Logitech G502)",
        quantity: 1,
        date: "2025-01-26 16:55",
        amount: "12,800 PKR",
        paymentMethod: "JazzCash",
        paymentStatus: "Paid",
        shippingMethod: "Leopard Courier",
        shippingAddress: "Street 9, Gulberg Town, Lahore",
        trackingId: "LCS99843212PK",
        notes: "Fragile.",
        status: "Shipped"
    },

    {
        id: "#10235",
        customer: "Ayesha Noor",
        phone: "0309-2211445",
        product: "Skin Care Combo Pack",
        quantity: 3,
        date: "2025-01-26 09:10",
        amount: "6,500 PKR",
        paymentMethod: "Easypaisa",
        paymentStatus: "Paid",
        shippingMethod: "TCS",
        shippingAddress: "Bahria Town Phase 8, Rawalpindi",
        trackingId: "TCS442390123",
        notes: "Gift wrap required.",
        status: "Delivered"
    }
];


// export const data_expandableRow = []

export  function Data_expandableRow({ row }) {
  return (
    <td colSpan={14} className="p-0">
                                        <div className="p-5 bg-gray-50 border-t border-gray-200">

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                                {/* LEFT: ORDER SUMMARY */}
                                                <div className="bg-white p-0 rounded-xl border shadow-sm overflow-hidden">

                                                    {/* Header */}
                                                    <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
                                                        <h4 className="text-sm font-semibold tracking-wide">Order Summary</h4>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-4 space-y-4">

                                                        {/* PRODUCT */}
                                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                            <div className="w-12 h-12 bg-white rounded-md border flex items-center justify-center">
                                                                🛍️
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500">Product</p>
                                                                <p className="text-sm font-medium">{row.product}</p>
                                                            </div>
                                                        </div>

                                                        {/* QUANTITY */}
                                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                            <div className="w-12 h-12 bg-white rounded-md border flex items-center justify-center">
                                                                🔢
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500">Quantity</p>
                                                                <p className="text-sm font-medium">{row.quantity}</p>
                                                            </div>
                                                        </div>

                                                        {/* AMOUNT */}
                                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                            <div className="w-12 h-12 bg-white rounded-md border flex items-center justify-center">
                                                                💰
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500">Amount</p>
                                                                <p className="text-sm font-medium">{row.amount}</p>
                                                            </div>
                                                        </div>

                                                        {/* CUSTOMER */}
                                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                            <div className="w-12 h-12 bg-white rounded-md border flex items-center justify-center">
                                                                👤
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500">Customer</p>
                                                                <p className="text-sm font-medium">{row.customer}</p>
                                                            </div>
                                                        </div>

                                                        {/* PHONE */}
                                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                            <div className="w-12 h-12 bg-white rounded-md border flex items-center justify-center">
                                                                📞
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500">Phone</p>
                                                                <p className="text-sm font-medium">{row.phone}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                {/* MIDDLE: ORDER CONTROLS */}
                                                <div className="bg-white p-0 rounded-xl border shadow-sm overflow-hidden">
                                                    <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
                                                        <h4 className="text-sm font-semibold tracking-wide">Order Controls</h4>
                                                    </div>
                                                    <div className="p-4 space-y-4">

                                                        <div>
                                                            <label className="block text-xs text-gray-500 mb-1">Order Status</label>
                                                            <select className="w-full border p-2 rounded-md text-sm bg-gray-50">
                                                                <option>Pending</option>
                                                                <option>Processing</option>
                                                                <option>Shipped</option>
                                                                <option>Delivered</option>
                                                                <option>Completed</option>
                                                                <option>Cancelled</option>
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label className="block text-xs text-gray-500 mb-1">Payment Status</label>
                                                            <select className="w-full border p-2 rounded-md text-sm bg-gray-50">
                                                                <option>Paid</option>
                                                                <option>Pending</option>
                                                                <option>Refunded</option>
                                                                <option>Unpaid</option>
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label className="block text-xs text-gray-500 mb-1">Shipping Method</label>
                                                            <select className="w-full border p-2 rounded-md text-sm bg-gray-50">
                                                                <option>Leopard Courier</option>
                                                                <option>TCS</option>
                                                                <option>BlueEx</option>
                                                                <option>DHL</option>
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label className="block text-xs text-gray-500 mb-1">Tracking ID</label>
                                                            <input
                                                                className="w-full border p-2 rounded-md text-sm bg-gray-50"
                                                                placeholder="Enter tracking..."
                                                            />
                                                        </div>

                                                        <div>
                                                            <label className="block text-xs text-gray-500 mb-1">Admin Notes</label>
                                                            <textarea
                                                                className="w-full border p-2 rounded-md text-sm bg-gray-50 h-20"
                                                                placeholder="Write internal notes..."
                                                            />
                                                        </div>

                                                        <div className="flex gap-2 pt-2">
                                                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm">
                                                                Save Changes
                                                            </button>
                                                            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 text-sm">
                                                                Cancel Order
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                {/* QUICK ACTIONS */}
                                                <div className="bg-white rounded-xl border shadow-sm overflow-hidden">

                                                    {/* Header */}
                                                    <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
                                                        <h4 className="text-sm font-semibold tracking-wide">Quick Actions</h4>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="p-4 space-y-4">

                                                        {/* Print Invoice */}
                                                        <button className="w-full flex items-center gap-3 p-3 bg-gray-50 border rounded-lg hover:bg-gray-100 transition">
                                                            <span className="text-xl">📄</span>
                                                            <span className="text-sm font-medium">Print Invoice</span>
                                                        </button>

                                                        {/* Download PDF */}
                                                        <button className="w-full flex items-center gap-3 p-3 bg-gray-50 border rounded-lg hover:bg-gray-100 transition">
                                                            <span className="text-xl">⬇️</span>
                                                            <span className="text-sm font-medium">Download PDF</span>
                                                        </button>

                                                        {/* Send Email */}
                                                        <button className="w-full flex items-center gap-3 p-3 bg-gray-50 border rounded-lg hover:bg-gray-100 transition">
                                                            <span className="text-xl">✉️</span>
                                                            <span className="text-sm font-medium">Send Email</span>
                                                        </button>

                                                        {/* Bottom Timeline */}
                                                        <div className="pt-4 border-t">
                                                            <h5 className="text-sm font-semibold mb-2 text-gray-700">Order Timeline</h5>

                                                            <p className="text-sm text-gray-600">
                                                                <strong className="font-medium">Placed:</strong> {row.date}
                                                            </p>

                                                            <p className="text-sm text-gray-600">
                                                                <strong className="font-medium">Status:</strong> {row.status}
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </td>
  );
}
