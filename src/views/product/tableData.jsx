export const productTableFilters = [
    { label: "All Products", count: 320 },
    { label: "Active", count: 260 },
    { label: "Out of Stock", count: 40 },
    { label: "Draft", count: 20 },
];

export const productTableSortingFilters = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
    "Oldest First",
    "Stock: Low to High",
];


export const prductColumn_Header_Keys = [
    { header: "Product ID", key: "id" },
    {
        header: "Product Image", key: "images", tag: ({ value }) => {
            return (<>
                <img src={value} alt={value} width="20px" height='20px' />

            </>)
        }
    },
    { header: "Product", key: "name" },
    { header: "Category", key: "category" },
    { header: "SKU", key: "sku" },
    { header: "Price", key: "price" },
    { header: "Stock", key: "stock" },
    { header: "Status", key: "status" },
    { header: "Created At", key: "createdAt" },
];


export const productGridData = [
    {
        id: "PRD-1001",
        name: "Nike Air Max 270",
        category: "Footwear",
        sku: "NK-AM-270",
        price: "14,500 PKR",
        stock: 32,
        status: "Active",
        createdAt: "2025-01-20",

        // 🔽 Expandable Row Data
        description: "Lightweight running shoes with breathable mesh.",
        brand: "Nike",
        images: "/images/nike-1.png",
        weight: "900g",
        dimensions: "30 x 20 x 12 cm",
        supplier: "Nike Pakistan",
        notes: "Top selling product",
    },

    {
        id: "PRD-1002",
        name: "Adidas Hoodie",
        category: "Clothing",
        sku: "ADS-HDY-22",
        price: "4,500 PKR",
        stock: 0,
        status: "Out of Stock",
        createdAt: "2025-01-18",

        description: "Warm fleece hoodie for winter season.",
        brand: "Adidas",
        images: "/images/hoodie.png",
        weight: "600g",
        dimensions: "35 x 25 x 5 cm",
        supplier: "Adidas Lahore",
        notes: "Restock required",
    },

    {
        id: "PRD-1003",
        name: "Apple AirPods Pro 2",
        category: "Electronics",
        sku: "APL-APP2",
        price: "54,000 PKR",
        stock: 15,
        status: "Active",
        createdAt: "2025-01-15",

        description: "Noise cancelling wireless earbuds.",
        brand: "Apple",
        images: "/images/airpods.png",
        weight: "250g",
        dimensions: "10 x 10 x 5 cm",
        supplier: "Apple Authorized Dealer",
        notes: "High margin product",
    },
];


// export const data_expandableRow = []

export function Data_expandableRow({ row }) {
    return (
        <td colSpan={14} className="p-0">
            <div className="p-5 bg-gray-50 border-t">

                <div className="bg-white rounded-xl border shadow-sm p-5">

                    <div className="flex flex-col md:flex-row gap-6">

                        {/* LEFT — IMAGE */}
                        <div className="flex justify-center items-center md:w-1/4">
                            <img
                                src={row.image}
                                alt={row.name}
                                className="w-32 h-32 object-contain rounded-lg border"
                            />
                        </div>

                        {/* RIGHT — DETAILS */}
                        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:w-3/4">

                            {/* Column 1 */}
                            <div className="flex-1 min-w-[200px] space-y-3">
                                <DetailItem label="Model Name" value={row.name} />
                                <DetailItem label="ID" value={row.id} />
                                <DetailItem label="Brand" value={row.brand} />
                            </div>

                            {/* Column 2 */}
                            <div className="flex-1 min-w-[200px] space-y-3">
                                <DetailItem label="Price" value={row.price} />
                                <DetailItem label="Purchase Year" value={row.year} />
                                <DetailItem label="Stock" value={row.stock} />
                            </div>

                            {/* Column 3 */}
                            <div className="flex-1 min-w-[200px] space-y-3">
                                <DetailItem label="Color" value={row.color} />
                                <DetailItem label="Form Factor" value={row.formFactor} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </td>
    );
}

// 🔹 Small sub-component to keep UI clean
const DetailItem = ({ label, value }) => (
    <div className="flex justify-between border-b pb-4">
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
);