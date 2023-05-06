import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

function AnalyticsLineChart(props) {
  const model1 = Array.from({ length: 20 }, () => Math.random() * 25);
  const model2 = Array.from({ length: 20 }, () => Math.random() * 25);
  const [data, setData] = useState([]);
  var counter = 0;

  useEffect(() => {
    var temp = [];
    for (var index = 0; index < 20; index++) {
      temp.push({
        Cloud: model1[index],
        NimbleEdge: model2[index],
        unit: "Millis ",
      });
    }
    setData(temp);
  }, []);

  return (
    <ResponsiveContainer debounce={300} width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 64,
          right: 72,
          left: 20,
          bottom: 64,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis unit=" millls" width={100} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="NimbleEdge"
          stroke="#F3AD84"
          strokeWidth={3}
          activeDot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="Cloud"
          stroke="#343441"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AnalyticsLineChart;
