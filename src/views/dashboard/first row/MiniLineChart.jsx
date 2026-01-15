import { LineChart, Line, ResponsiveContainer } from "recharts";

const MiniLineChart = ({ data, strokeColor = "#6366F1" }) => {
  return (
    <div className="w-full h-14 mt-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={strokeColor}
            strokeWidth={2}
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniLineChart;
