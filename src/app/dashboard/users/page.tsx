"use client";

import { data } from "./components/data";

import { useEffect, useState } from "react";
import { DataProp, Table } from "./components/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TablePagination } from "./components/pagination";
import { TitleandQueryBox } from "./components/querybox";

export default function Users() {
  const itemsPerPage: number = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof DataProp;
    direction: "ascending" | "descending";
  }>({
    key: "registrationDate",
    direction: "descending",
  });

  const handleSort = (key: keyof DataProp) => {
    setSortConfig((prev) => {
      if (prev.key === key && prev.direction === "ascending") {
        return { key, direction: "descending" };
      }
      return { key, direction: "ascending" };
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [searchEmail, setSearchEmail] = useState<string>("");

  // filter data when querying
  const filteredData = data.filter((item) =>
    item.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  // Sort the filtered data whether ascending or descending order
  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  // Store the sorted data
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await new Promise((res) => setTimeout(res, 1000));
      setLoading(false);
    };
    fetchData();
  }, [searchEmail]);

  return (
    <div className="min-h-screen px-10 py-6 flex flex-col gap-8">
      <TitleandQueryBox
        onSearch={setSearchEmail}
        setCurrentPage={setCurrentPage}
      />

      <div className="overflow-x-auto rounded-xl shadow-md">
        {/* Loading State added */}
        <Table
          currentItems={currentItems}
          startIndex={indexOfFirstItem}
          onSort={handleSort}
          sortConfig={sortConfig}
          loading={loading}
        />
      </div>

      <div className="flex justify-end mt-4">
        <TablePagination
          onSetCurrentPage={setCurrentPage}
          currentPage={currentPage}
          data={filteredData}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
}
