import { Loader } from "@/components/svgs";
import { useState } from "react";

export interface DataProp {
  nickname: string;
  email: string;
  year_month: string;
  gender: string;
  prefecture: string;
  registrationDate: string;
}

interface TableProps {
  currentItems: DataProp[];
  startIndex: number; // so row numbers are correct across pages
  onSort: (key: keyof DataProp) => void; // sorting is controlled in parent
  sortConfig: {
    key: keyof DataProp;
    direction: "ascending" | "descending";
  };
  loading: boolean;
}

/**
 * @param ' currentItems, startIndex, onSort, sortConfig, loading,
 * @returns **Reusable table component**
 */
export function Table({
  currentItems,
  startIndex,
  onSort,
  sortConfig,
  loading,
}: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl border-separate border-spacing-0 shadow-sm desktop:text-xl">
        {/* Table Headers */}
        <thead>
          <tr className="bg-gray-50/35 text-gray-600 text-sm uppercase">
            <th
              className="py-4 px-6 text-left border-b border-gray-200 cursor-pointer"
              onClick={() => onSort("nickname")}
            >
              No.{" "}
              {sortConfig.key === "nickname" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </th>
            <th
              className="py-4 px-6 text-left border-b border-gray-200 cursor-pointer"
              onClick={() => onSort("nickname")}
            >
              Nickname{" "}
              {sortConfig.key === "nickname" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </th>

            <th
              className="py-4 px-6 text-left border-b border-gray-200 cursor-pointer"
              onClick={() => onSort("email")}
            >
              Email{" "}
              {sortConfig.key === "email" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </th>

            <th
              className="py-4 px-6 text-left border-b border-gray-200 cursor-pointer"
              onClick={() => onSort("year_month")}
            >
              Year & Month{" "}
              {sortConfig.key === "year_month" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </th>

            <th className="py-4 px-6 text-left border-b border-gray-200">
              Gender
            </th>
            <th className="py-4 px-6 text-left border-b border-gray-200">
              Prefecture
            </th>
            <th
              className="py-4 px-6 text-left border-b border-gray-200 cursor-pointer"
              onClick={() => onSort("registrationDate")}
            >
              Registration Date{" "}
              {sortConfig.key === "registrationDate" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>

        {/* if Loading(querying) state is true show loader; else show table data */}
        {loading ? (
          <tbody>
            <tr>
              <td>
                <div className="absolute mobile:top-[50%] mobile:left-[50%] mobile:-translate-y-[50%] tablet:top-[50%] tablet:left-[50%]">
                  <span>
                    <Loader className="h-6 w-6 animate-spin" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {/* Table Data */}
            {currentItems.map((val, idx) => (
              <tr
                key={startIndex + idx}
                className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-150"
              >
                <td className="py-4 px-6 border-b border-gray-200">
                  {startIndex + idx + 1}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {val.nickname}
                </td>
                <td
                  className="py-4 px-6 border-b border-gray-200"
                  title={val.email}
                >
                  {val.email.length > 15
                    ? `${val.email.slice(0, 15)}...`
                    : `${val.email}`}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {val.year_month}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {val.gender}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {val.prefecture}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {val.registrationDate}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {/* Show no data if data not found */}
      {currentItems.length === 0 && !loading && (
        <p className="text-center absolute mobile:top-[50%] mobile:left-[50%] mobile:-translate-x-[50%] tablet:top-[50%] tablet:left-[50%]">
          No Data found
        </p>
      )}
    </div>
  );
}
