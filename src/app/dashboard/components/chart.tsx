import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { CustomTooltip } from "./tooltip";

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
  female: "#ff8904", // Orange-300
  male: "#ff770091", // Orange-500
  other: "#fde68a", // Yellow-300
  noAnswer: "#f5490050", // Gray-300
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
  month: string;
  year: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function GenderAgeChart({
  data,
  month,
  year,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="bg-white p-6 rounded shadow-md col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Gender & Age Distribution
        </h2>
        <div className="flex items-center space-x-2">
          <span>{year}</span>
          <button onClick={onPrev} className="text-lg">
            &#8592;
          </button>
          <span>{month}</span>
          <button onClick={onNext} className="text-lg">
            &#8594;
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={25} barGap={10}>
          <XAxis dataKey="ageGroup" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="female"
            stackId="a"
            fill={colors.female}
            name="Female"
          />
          <Bar dataKey="male" stackId="a" fill={colors.male} name="Male" />
          <Bar dataKey="other" stackId="a" fill={colors.other} name="Other" />
          <Bar
            dataKey="noAnswer"
            stackId="a"
            fill={colors.noAnswer}
            name="No Answer"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
