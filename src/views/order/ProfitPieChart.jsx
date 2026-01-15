import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const ProfitPieChart = ({ online = 74000, cash = 42000 }) => {
    const total = online + cash;

    const data = [
        { name: "Online", value: online },
        { name: "Cash", value: cash },
    ];

    const COLORS = ["#6366F1", "#F59E0B"]; // blue & amber

    return (
        <div className="flex gap-7 items-end">
            <PieChart width={220} height={120}>
                <Pie
                    data={data}
                    cx={110}
                    cy={140}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                >
                    {data.map((entry, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className="flex flex-col justify-end gap-6 mt-3">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm font-medium">
                        Online <span className="font-bold">${online / 1000}K</span>
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-sm font-medium">
                        Cash <span className="font-bold">${cash / 1000}K</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfitPieChart;
