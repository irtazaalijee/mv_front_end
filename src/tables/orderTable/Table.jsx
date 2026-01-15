import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { orderRows } from "./data";

export default function Table() {
    const [openRow, setOpenRow] = useState(null);

    const toggleRow = (index) => {
        setOpenRow(openRow === index ? null : index);
    };

    return (
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th></th>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
            {orderRows.map((row, index) => (
            <>
            {/* MAIN ROW */}
            <tr key={index} className="table-row">
                <td className="icon-cell" onClick={() => toggleRow(index)}>
                    {openRow === index ? (
                        <FaChevronUp size={14} />
                    ) : (
                        <FaChevronDown size={14} />
                    )}
                </td>

                <td>{row.id}</td>
                <td>{row.customer}</td>
                <td>{row.phone}</td>
                <td>{row.product}</td>
                <td>{row.quantity}</td>
                <td>{row.date}</td>
                <td>{row.amount}</td>
                <td>{row.status}</td>
            </tr>

            {/* EXPANDABLE ROW */}
            <AnimatePresence>
                {openRow === index && (
                    <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="expand-row"
                    >
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
                    </motion.tr>
                )}
            </AnimatePresence>

            </>
            ))}
            </tbody>
        </table>
    );
}
