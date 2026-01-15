// components/Row1Cards.jsx
import React from 'react';
import MiniLineChart from './MiniLineChart'
const miniData = [
  { value: 100 },
  { value: 120 },
  { value: 90 },
  { value: 160 },
  { value: 140 },
  { value: 180 },
];

const StatCard = ({ title, value, delta, icon }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-start">
            <div>
                <div className="text-2xl font-semibold">{value}</div>
                <div className="text-sm text-gray-500 mt-1">{title}</div>
                {typeof delta !== 'undefined' && (
                    <div className={`mt-3 inline-block text-sm font-medium ${delta >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {delta >= 0 ? `+${delta}%` : `${delta}%`}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-3">  
                
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                    {icon}
                </div>
                
                <div className="w-12 h-12 flex items-center justify-center">
                    <MiniLineChart data={miniData} strokeColor="#FACC15"  />
                </div>
                
            </div>
            
        </div>
    );
};

export default function Row1Cards({ data }) {
    // data = [{title, value, delta, icon}, ...]
    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6">
            {data.map((d, i) => (
                <StatCard key={i} {...d} />
            ))}
        </div>
    );
}