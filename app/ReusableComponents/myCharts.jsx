import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react"; // for arrows

const data = [
  {
    name: "Total Hired",
    value: 400,
    color: "#0088FE",
    change: "up",
    percent: 54,
  },
  {
    name: "Total Canceled",
    value: 300,
    color: "#00C49F",
    change: "up",
    percent: 20,
  },
  {
    name: "Total Pending",
    value: 300,
    color: "#FF8042",
    change: "down",
    percent: 26,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <PieChart width={140} height={140}>
          <Pie
            data={data}
            cx={70}
            cy={70}
            innerRadius={30}
            outerRadius={45}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div>
          {data.map((item, index) => (
            <div
              key={index}
              style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: item.color,
                  borderRadius: "50%",
                  marginRight: 8,
                }}
              />
              <span style={{ marginRight: 8 }}>{item.name}</span>
              <strong style={{ marginRight: 4 }}>{item.percent}%</strong>
              {item.change === "up" ? (
                <ArrowUpRight size={16} color="green" />
              ) : (
                <ArrowDownRight size={16} color="red" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
