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
import MiniPieChart from './MiniPieChart'
export default function ProfitSummaryComponent({ summary }) {

   const { sales, cost, profit, margin, updated } = summary;
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 h-full flex flex-col justify-between">
      <div>
        <h4 className="text-md font-semibold">Profit Summary</h4>
        <div className="mt-4 grid grid-cols-1 gap-3">
          <div className="flex justify-between">
            <div className="text-sm text-gray-500">Total Sales</div>
            <div className="font-medium">${summary.sales.toLocaleString()}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-500">Total Cost</div>
            <div className="font-medium">${summary.cost.toLocaleString()}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-500">Total Profit</div>
            <div className="font-semibold text-green-600">${summary.profit.toLocaleString()}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-500">Profit Margin</div>
            <div className="font-medium">{summary.margin}%</div>
          </div>
        </div>

        <MiniPieChart sales={sales} cost={cost}  />
      </div>
      <div className="text-xs text-gray-400 mt-4">Updated: {summary.updated}</div>
    </div>
  );
}