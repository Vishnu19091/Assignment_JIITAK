"use client";

import { usePathname } from "next/navigation";
import { Card } from "./components/card";
import GenderAgeChart from "./components/chart";
import Link from "next/link";
import { useState } from "react";

const data = [
  {
    ageGroup: "< 10",
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

// empty data
const data_v1 = [
  {
    ageGroup: "< 10",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
  {
    ageGroup: "10 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
  {
    ageGroup: "20 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
  {
    ageGroup: "30 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },

  {
    ageGroup: "40 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
  {
    ageGroup: "50 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
  {
    ageGroup: "60 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
  {
    ageGroup: "70 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
  {
    ageGroup: "80 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
  {
    ageGroup: "90 >",
    male: 0,
    female: 0,
    other: 0,
    noAnswer: 0,
  },
];

interface NavBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavBar({ isOpen, onClose }: NavBarProps) {
  const pathname = usePathname();
  const active = "bg-orange-100 text-orange-600 border-r-4 font-bold";

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: "./assets/dashboard.svg" },
    {
      href: "/dashboard/users",
      label: "Registered Users",
      icon: "./assets/users.svg",
    },
    { href: "/dashboard/winners", label: "Winners", icon: "./assets/gift.svg" },
    { href: "/dashboard/admin", label: "Admin", icon: "./assets/admin.svg" },
  ];

  return (
    <>
      {/* Sidebar / Drawer */}
      <aside
        className={`fixed tablet:static top-0 left-0 min-h-screen w-[18rem] bg-white shadow-md z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} tablet:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h1 className="text-xl font-bold text-orange-500">LookMeal</h1>
          <button className="tablet:hidden" onClick={onClose}>
            <img src="./assets/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>

        <nav className="mt-6 space-y-2 text-sm">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-row gap-4 items-center px-6 py-3 text-lg ${
                pathname === href ? active : "hover:bg-gray-100"
              }`}
              onClick={onClose}
            >
              <span>
                <img src={icon} alt={label} height="24" width="24" />
              </span>
              <p>{label}</p>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 tablet:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}

export function MenuBar() {
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
        <GenderAgeChart data={data} />

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

export function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/dashboard" && <Main />}
      {children}
    </>
  );
}
