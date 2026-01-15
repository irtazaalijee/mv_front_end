export const customerTableFilters = [
    { label: "All Customers", count: 520 },
    { label: "Active", count: 430 },
    { label: "Inactive", count: 60 },
    { label: "Blocked", count: 30 },
];

export const customerTableSortingFilters = [
    "Newest First",
    "Oldest First",
    "Name: A to Z",
    "Name: Z to A",
    "Orders: High to Low",
];

export const customerColumn_Header_Keys = [
    { header: "Customer ID", key: "id" },
    {
        header: "Avatar",
        key: "avatar",
        tag: ({ value }) => (
            <img
                src={value}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
            />
        ),
    },
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Phone", key: "phone" },
    { header: "Orders", key: "orders" },
    { header: "Status", key: "status" },
    { header: "Joined At", key: "joinedAt" },
];
export const customerGridData = [
    {
        id: "CUST-1001",
        name: "Ali Raza",
        email: "ali.raza@gmail.com",
        phone: "+92 300 1234567",
        orders: 12,
        status: "Active",
        joinedAt: "2024-11-10",

        // 🔽 Expandable Row Data
        avatar: "https://thispersondoesnotexist.com/",
        address: "Karachi, Pakistan",
        city: "Karachi",
        totalSpent: "145,000 PKR",
        lastOrder: "2025-01-22",
        notes: "VIP customer",
    },
    {
        id: "CUST-1002",
        name: "Sara Khan",
        email: "sara.khan@gmail.com",
        phone: "+92 321 9876543",
        orders: 4,
        status: "Inactive",
        joinedAt: "2024-09-05",

        avatar: "https://thispersondoesnotexist.com/",
        address: "Lahore, Pakistan",
        city: "Lahore",
        totalSpent: "38,000 PKR",
        lastOrder: "2024-12-15",
        notes: "Low activity",
    },
];

// export const data_expandableRow = []
export function CustomerExpandableRow({ row }) {
    return (
        <td colSpan={14} className="p-0">
            <div className="p-5 bg-gray-50 border-t">
                <div className="bg-white rounded-xl border shadow-sm p-5">

                    <div className="flex flex-col md:flex-row gap-6">

                        {/* LEFT — AVATAR */}
                        <div className="flex justify-center items-center md:w-1/4">
                            <img
                                src={row.avatar}
                                alt={row.name}
                                className="w-32 h-32 rounded-full object-cover border"
                            />
                        </div>

                        {/* RIGHT — DETAILS */}
                        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:w-3/4">

                            {/* Column 1 */}
                            <div className="flex-1 min-w-[200px] space-y-3">
                                <DetailItem label="Customer Name" value={row.name} />
                                <DetailItem label="Customer ID" value={row.id} />
                                <DetailItem label="Email" value={row.email} />
                            </div>

                            {/* Column 2 */}
                            <div className="flex-1 min-w-[200px] space-y-3">
                                <DetailItem label="Phone" value={row.phone} />
                                <DetailItem label="City" value={row.city} />
                                <DetailItem label="Status" value={row.status} />
                            </div>

                            {/* Column 3 */}
                            <div className="flex-1 min-w-[200px] space-y-3">
                                <DetailItem label="Total Orders" value={row.orders} />
                                <DetailItem label="Total Spent" value={row.totalSpent} />
                                <DetailItem label="Last Order" value={row.lastOrder} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </td>
    );
}
const DetailItem = ({ label, value }) => (
    <div className="flex justify-between border-b pb-3">
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
);
