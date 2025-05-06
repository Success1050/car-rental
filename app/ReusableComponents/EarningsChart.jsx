import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Defs,
  linearGradient,
} from "recharts";

const data = [
  { name: "May", uv: 300000, pv: 180000 },
  { name: "Jun", uv: 250000, pv: 200000 },
  { name: "Jul", uv: 200000, pv: 180000 },
  { name: "Aug", uv: 270000, pv: 210000 },
  { name: "Sep", uv: 260000, pv: 220000 },
  { name: "Oct", uv: 280000, pv: 190000 },
];

export default function EarningsChart() {
  return (
    <div className="w-[900px] h-[286px] flex flex-col justify-self-center rounded-md border box shadow_box bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-medium text-gray-700">Earning Summary</h2>
        <div className="text-sm text-gray-500">Mar 2022 – Oct 2022</div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* Gradient Fill */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            height={36}
            payload={[
              {
                value: "Last 6 months",
                type: "circle",
                id: "uv",
                color: "#3b82f6",
              },
              {
                value: "Same period last year",
                type: "circle",
                id: "pv",
                color: "#9ca3af",
              },
            ]}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorUv)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#9ca3af"
            strokeDasharray="4 4"
            fill="none"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
