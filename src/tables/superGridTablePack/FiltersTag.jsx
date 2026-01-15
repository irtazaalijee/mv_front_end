import React, { useState } from "react";

const orders = [
  { label: "All Order", count: 2220 },
  { label: "Pending", count: 80 },
  { label: "Payment Confirmation", count: 22 },
  { label: "Confirmed", count: 200 },
  { label: "Process", count: 67 },
  { label: "Delivered", count: 1450 },
  { label: "Cancel", count: 230 },
];

export default function FiltersTag({data}){
  const [active, setActive] = useState(data[0]?.label);

  return (
    <div className="flex justify-center gap-3 overflow-x-auto py-3">
      {data.map((o) => {
        const isActive = active === o.label;

        return (
          <button
            key={o.label}
            onClick={() => setActive(o.label)}
            className={`
              flex items-center text-xs gap-2 px-3 py-2 rounded-full border 
              whitespace-nowrap transition-all
              ${isActive 
                ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                : "bg-gray-50 text-gray-600 border-gray-200"
              }
            `}
          >
            <span className="font-medium">{o.label}</span>
            <span className={`
              text-sm px-2 py-0.5 rounded-full 
              ${isActive 
                ? "bg-white text-blue-600" 
                : "bg-gray-200 text-gray-700"
              }
            `}>
              {o.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
