import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { CustomTooltip } from "./tooltip";
import { useState } from "react";

const ageGroups = [
  "<10",
  "10s",
  "20s",
  "30s",
  "40s",
  "50s",
  "60s",
  "70s",
  "80s",
  "90+",
];

const colors = {
  female: "#ff9a00",
  male: "#ffb647",
  noAnswer: "#ffd799",
  other: "#ffebcc",
};

type UserData = {
  ageGroup: string;
  male: number;
  female: number;
  other: number;
  noAnswer: number;
};

interface Props {
  data: UserData[];
}

export default function GenderAgeChart({ data }: Props) {
  const [count, setcount] = useState<number>(0);

  const current: Date = new Date();

  const year = current.getFullYear();
  const month = current.getMonth();

  const newMonth = month + count;
  const displayYear = year + Math.floor(newMonth / 12);
  const displayMonth = (((newMonth % 12) + 12) % 12) + 1; // 1–12 format

  console.log(displayMonth);

  function handlePrevious() {
    setcount((count) => count - 1);
  }

  function handleNext() {
    setcount((count) => count + 1);
  }

  return (
    <div className="bg-white p-6 rounded shadow-md col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Gender & Age Distribution
        </h2>
        <div className="flex items-center space-x-2">
          <span>{displayYear}</span>
          <button onClick={handlePrevious} className="text-xl">
            &#8592;
          </button>
          <span>{displayMonth}</span>
          <button onClick={handleNext} className="text-xl">
            &#8594;
          </button>
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height={window.innerWidth < 640 ? 250 : 400} // smaller height on mobile
      >
        <BarChart
          className="text-black font-black"
          data={data}
          barSize={window.innerWidth < 640 ? 25 : 35} // thinner bars on mobile
          barGap={window.innerWidth < 640 ? 5 : 10}
        >
          <CartesianGrid strokeDasharray="0 0" vertical={false} />
          <XAxis
            dataKey="ageGroup"
            tick={{
              fontSize: window.innerWidth < 640 ? 10 : 12,
              color: "black",
            }}
          />
          <YAxis
            domain={[0, 1000]}
            tickCount={10}
            interval={0}
            tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Legend */}
          <Legend
            wrapperStyle={{
              fontSize: window.innerWidth < 640 ? 10 : 12,
              fill: "#000",
              color: "#000",
            }}
            formatter={(value) => (
              <span style={{ color: "#000" }}>{value}</span>
            )}
          />

          <Bar
            dataKey="female"
            stackId="a"
            fill={colors.female}
            name="Female"
          />
          <Bar dataKey="male" stackId="a" fill={colors.male} name="Male" />
          <Bar
            dataKey="noAnswer"
            stackId="a"
            fill={colors.noAnswer}
            name="No Answer"
          />
          <Bar dataKey="other" stackId="a" fill={colors.other} name="Other" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
