// components/MiniPieChart.jsx
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export default function MiniPieChart({ sales, cost }) {
  const profit = Math.max(0, sales - cost);
  const data = [
    { name: 'Cost', value: cost },
    { name: 'Profit', value: profit },
  ];

  const total = data.reduce((s, d) => s + d.value, 0);
  const costPct = ((cost / total) * 100);
  const profitPct = ((profit / total) * 100);

  // Colors: cost neutral, profit highlight (you can switch profit to yellow)
  const COLORS = ['#94A3B8', '#10B981']; // gray-blue and green
  // If you want yellow highlight use: ['#94A3B8', '#FFD60A']

  return (
    <div style={{ width: '100%', height: 140 }} className="mt-4">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={36}
            outerRadius={56}
            paddingAngle={3}
            startAngle={90}
            endAngle={-270}
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend verticalAlign="bottom" height={24} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 text-xs text-gray-500 flex justify-between px-4">
        <div>Cost: ${cost.toLocaleString()} ({costPct.toFixed(1)}%)</div>
        <div>Profit: ${profit.toLocaleString()} ({profitPct.toFixed(1)}%)</div>
      </div>
    </div>
  );
}
