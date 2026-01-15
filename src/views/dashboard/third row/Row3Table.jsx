// components/Row3Table.jsx
import React from 'react';

export default function OrdersTable({ orders }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Orders</h3>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Search..." className="border rounded px-3 py-1 text-sm" />
          <select className="border rounded px-3 py-1 text-sm">
            <option>10 Row</option>
            <option>25 Row</option>
            <option>50 Row</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="text-xs text-gray-500 uppercase">
            <tr>
              <th className="py-2 px-3">Order ID</th>
              <th className="py-2 px-3">Customer</th>
              <th className="py-2 px-3">Order Total</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="py-3 px-3">{o.id}</td>
                <td className="py-3 px-3">{o.customer}</td>
                <td className="py-3 px-3">${o.total.toFixed(2)}</td>
                <td className="py-3 px-3"><span className={`px-2 py-1 rounded-full text-xs ${o.status === 'Delivered' ? 'bg-green-100 text-green-700' : o.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{o.status}</span></td>
                <td className="py-3 px-3">{o.date}</td>
                <td className="py-3 px-3"> <button className="text-sm text-blue-600">View</button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}