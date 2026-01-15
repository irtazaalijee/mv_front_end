

const TableData = {
  columns: [
    { Header: "Order ID", accessor: "id" },
    { Header: "Customer", accessor: "customer" },
    { Header: "Phone", accessor: "phone" },
    { Header: "Product", accessor: "product" },
    { Header: "Qty", accessor: "quantity" },
    { Header: "Date", accessor: "date" },
    { Header: "Amount", accessor: "amount" },
    { Header: "Status", accessor: "status" },
    { Header: "Payment Method", accessor: "paymentMethod" },
    { Header: "Payment Status", accessor: "paymentStatus" },
    { Header: "Shipping Method", accessor: "shippingMethod" },
    { Header: "Shipping Address", accessor: "shippingAddress" },
    { Header: "Tracking ID", accessor: "trackingId" },
    { Header: "Notes", accessor: "notes" },
  ],
  rows: [
    {
      id: "#10231",
      customer: "Ali Raza",
      phone: "0312-4567890",
      product: "Nike Air Max 270",
      quantity: 1,
      date: "2025-01-22 14:22",
      amount: "14,500 PKR",
      status: "Shipped",
      paymentMethod: "Visa **** 4242",
      paymentStatus: "Paid",
      shippingMethod: "Leopard Courier",
      shippingAddress: "House #22, Block H, North Nazimabad, Karachi",
      trackingId: "LCS93482342PK",
      notes: "Handle with care.",
    },
  ],

  
}


export const orderColumns = [
  { Header: "Order ID", accessor: "id" },
  { Header: "Customer", accessor: "customer" },
  { Header: "Phone", accessor: "phone" },
  { Header: "Product", accessor: "product" },
  { Header: "Qty", accessor: "quantity" },
  { Header: "Date", accessor: "date" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Payment Method", accessor: "paymentMethod" },
  { Header: "Payment Status", accessor: "paymentStatus" },
  { Header: "Shipping Method", accessor: "shippingMethod" },
  { Header: "Shipping Address", accessor: "shippingAddress" },
  { Header: "Tracking ID", accessor: "trackingId" },
  { Header: "Notes", accessor: "notes" },
  { Header: "Status", accessor: "status" }
];


export const orderRows = [
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
