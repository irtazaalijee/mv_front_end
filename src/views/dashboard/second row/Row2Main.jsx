
// components/Row2Main.jsx
import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
  Line,
  Area,
  Legend,
} from 'recharts';
import ProfitSummaryComponent from './ProfitSummaryComponent'



export function CompositeChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <div className="flex items-center justify-between px-2 py-1">
        <h3 className="text-lg font-semibold">Revenue Report</h3>
        <select className="border rounded px-3 py-1 text-sm">
          <option>6 Month</option>
          <option>1 Month</option>
          <option>1 Year</option>
        </select>
      </div>
      <div style={{ width: '100%', height: 320 }} className="mt-3">
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />  {/* cleaner */}

            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            {/* Bars for sales */}
            <Bar dataKey="sales" barSize={18} radius={[4, 4, 0, 0]} />

            {/* Line for profit */}
            <Line type="monotone" dataKey="profit" stroke="#16a34a" strokeWidth={2} />

            {/* Area for cost */}
            <Area
              type="monotone"
              dataKey="cost"
              fill="rgba(59,130,246,0.15)"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </ComposedChart>

        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function ProfitSummary({ summary }) {
  return (
    <ProfitSummaryComponent summary={summary} />
  );
}

