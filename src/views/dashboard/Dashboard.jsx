import React, { useEffect } from 'react'
import Row1Cards from './first row/Row1Cards.jsx';
import { CompositeChart, ProfitSummary } from './second row/Row2Main.jsx';
import OrdersTable from './third row/Row3Table.jsx';
import SuperGrid from '../../utilities/tableGridSuper/SuperGrid.jsx'
const Dashboard = () => {

  const sampleData = [
  {
    website: "www.thenewstack.io",
    visitors: 1214,
    status: "PPC",
    country: "CH",
    score: "84%",
    price: 1190,
    today: 1438,
    avg7: 1762,
    avg1: 1258,
  },
  {
    website: "www.dzone.com",
    visitors: 1209,
    status: "Purchased",
    country: "US",
    score: "91%",
    price: 3500,
    today: 1339,
    avg7: 1571,
    avg1: 1258,
  }
];

  // sample data (replace with API calls)
  const cardsData = [
    { title: 'Total Sales', value: '11,580', delta: 5.9, icon: <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" /></svg> },
    { title: 'Total Orders', value: '45,580', delta: 10.9, icon: <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3z" /></svg> },
    { title: 'Total Vendors', value: '8,580', delta: -3.9, icon: <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 100-10 5 5 0 000 10z" /></svg> },
    { title: 'Total Earnings', value: '$51,580', delta: 5.9, icon: <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 1v22" /></svg> },
  ];

  const chartData = [
  { month: 'Jan', sales: 400, cost: 800, profit: 1600 },
  { month: 'Feb', sales: 300, cost: 600, profit: 798 },
  { month: 'Mar', sales: 605, cost: 1000, profit: 2384 },
  { month: 'Apr', sales: 500, cost: 1200, profit: 2600 },
  { month: 'May', sales: 700, cost: 1500, profit: 2800 },
  { month: 'Jun', sales: 600, cost: 900, profit: 2300 },
];


  const summary = {
    sales: 42580,
    cost: 18000,
    profit: 24580,
    margin: 57,
    updated: '2 hours ago',
  };

  const sampleOrders = [
    { id: 'ORD-1001', customer: 'John Doe', total: 120.5, status: 'Pending', date: '2025-11-20' },
    { id: 'ORD-1002', customer: 'Jane Smith', total: 45.0, status: 'Shipped', date: '2025-11-19' },
    { id: 'ORD-1003', customer: 'Ali Khan', total: 220.99, status: 'Delivered', date: '2025-11-18' },
    { id: 'ORD-1004', customer: 'Sara Ali', total: 75.25, status: 'Pending', date: '2025-11-16' },
  ];

  return (
    <>
      <div className="p-0 min-h-screen">
        <div className=" mx-auto space-y-6">
          {/* Row 1 */}
          <Row1Cards data={cardsData} />

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-6">
            <div className="lg:col-span-2">
              <CompositeChart data={chartData} />
            </div>
            <div>
              <ProfitSummary summary={summary} />
            </div>
          </div>

          {/* Row 3 */}
          {/* <OrdersTable orders={sampleOrders} /> */}
          <SuperGrid data={sampleData} />

          {/* small footer / image preview of provided design */}
          <div className="mt-6 text-sm text-gray-500">
            <div>Design reference (uploaded):</div>
            <img src="/mnt/data/f8a098a6-422d-43a4-9f89-c2becb0c1c29.png" alt="design" className="mt-2 rounded-lg shadow-sm w-full" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard