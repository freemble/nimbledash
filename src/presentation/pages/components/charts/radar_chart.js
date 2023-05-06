import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Model 1",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Model 2",
    A: 98,
    fullMark: 150,
  },
  {
    subject: "Model 3",
    A: 86,
    fullMark: 150,
  },
  {
    subject: "Model 4",
    A: 99,
    fullMark: 150,
  },
  {
    subject: "Model 5",
    A: 85,
    fullMark: 150,
  },
  {
    subject: "Model 6",
    A: 65,
    fullMark: 150,
  },
];

export default class AnalyticsRadarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
