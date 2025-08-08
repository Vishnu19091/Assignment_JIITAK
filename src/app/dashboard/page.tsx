"use client";

import { Card } from "./components/card";
import GenderAgeChart from "./components/chart";

const data = [
  {
    ageGroup: "less than 10",
    male: 80,
    female: 100,
    other: 20,
    noAnswer: 30,
  },
  {
    ageGroup: "10 >",
    male: 100,
    female: 120,
    other: 30,
    noAnswer: 40,
  },
  {
    ageGroup: "20 >",
    male: 180,
    female: 200,
    other: 50,
    noAnswer: 60,
  },
  {
    ageGroup: "30 >",
    male: 200,
    female: 220,
    other: 60,
    noAnswer: 70,
  },

  {
    ageGroup: "40 >",
    male: 300,
    female: 420,
    other: 20,
    noAnswer: 40,
  },
  {
    ageGroup: "50 >",
    male: 100,
    female: 220,
    other: 30,
    noAnswer: 50,
  },
  {
    ageGroup: "60 >",
    male: 150,
    female: 120,
    other: 50,
    noAnswer: 60,
  },
  {
    ageGroup: "70 >",
    male: 150,
    female: 120,
    other: 50,
    noAnswer: 60,
  },
  {
    ageGroup: "80 >",
    male: 150,
    female: 120,
    other: 50,
    noAnswer: 60,
  },
  {
    ageGroup: "90 >",
    male: 150,
    female: 120,
    other: 50,
    noAnswer: 60,
  },
];

function NavBar() {
  return (
    <aside className="w-60 bg-white shadow-md min-h-screen">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-orange-500">LookMeal</h1>
      </div>
      <nav className="mt-6 space-y-2 text-sm">
        <a
          href="#"
          className="block px-6 py-3 bg-orange-100 text-orange-600 font-medium"
        >
          Dashboard
        </a>
        <a href="#" className="block px-6 py-3 hover:bg-gray-100">
          Registered Users
        </a>
        <a href="#" className="block px-6 py-3 hover:bg-gray-100">
          Winners
        </a>
        <a href="#" className="block px-6 py-3 hover:bg-gray-100">
          Admin
        </a>
      </nav>
    </aside>
  );
}

function MenuBar() {
  return (
    <div className="bg-white w-full h-fit flex justify-end px-3 py-2.5">
      <p className="cursor-pointer hover:scale-115 transition-all duration-300 ease-in-out">
        {/* User Icon SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#676562"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#676562"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 20.662V19C7 18.4696 7.21071 17.9609 7.58579 17.5858C7.96086 17.2107 8.46957 17 9 17H15C15.5304 17 16.0391 17.2107 16.4142 17.5858C16.7893 17.9609 17 18.4696 17 19V20.662"
            stroke="#676562"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>
    </div>
  );
}

// Main
function Main() {
  return (
    <main className="grid grid-rows-3 w-[95%] mx-auto p-8 space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card
          title="Total Registered Users"
          date="2024/2/1 - 2024/2/5"
          value="450"
          note="400 last month"
          diff="↑ 12.5%"
        />
        <Card
          title="Active Users"
          date="2024/2/1 - 2024/2/5"
          value="50/month"
          note="12 last month"
          diff="↑ 316.6%"
        />
        <Card
          title="Retention Rate"
          date="2024/2/1 - 2024/2/5"
          value="10%"
          note="12% last month"
          diff="↓ 16.6%"
          red
        />
        <Card
          title="Avg. Search Count"
          date="2024/2/1 - 2024/2/5"
          value="4/month"
          note="2 last month"
          diff="↑ 100%"
        />

        {/* Chart Area*/}
        {/* <div className="bg-white p-6 rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Gender & Age Distribution</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <button>{"<"}</button>
              <span>2024年 01月</span>
              <button>{">"}</button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400">
            [Bar Chart Placeholder: gender-age stack bars per month]
          </div>
          <div className="mt-4 flex space-x-4 text-sm">
            <span className="text-orange-500">■ Male</span>
            <span className="text-orange-300">■ Female</span>
            <span className="text-yellow-300">■ Other</span>
            <span className="text-gray-400">■ No Answer</span>
          </div>
        </div> */}

        <GenderAgeChart
          data={data}
          year={2024}
          month="05"
          onNext={() => console.log("next")}
          onPrev={() => console.log("prev")}
        />

        <Card
          title="Usage Count"
          date="2024/2/1 - 2024/2/5"
          value="125/month"
          note="85 last month"
          diff="↑ 47%"
        />
        <Card
          title="Account Deletions"
          date="2024/2/1 - 2024/2/5"
          value="10/month"
          note="8 last month"
          diff="↑ 25%"
        />
      </div>
    </main>
  );
}

export default function Dashboard() {
  return (
    <div className="flex flex-rows gap-[1.5px]">
      <NavBar />
      <div className="flex flex-col w-full">
        <MenuBar />
        <Main />
      </div>
      {/* <Dashboard /> */}
    </div>
  );
}

// #ff770091
