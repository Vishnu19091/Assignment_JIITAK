"use client";

import { data } from "./components/data";

import { useState } from "react";
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
    key: "nickname",
    direction: "ascending",
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

  const filteredData = data.filter((item) =>
    item.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen px-10 py-6 flex flex-col gap-8">
      <TitleandQueryBox
        onSearch={setSearchEmail}
        setCurrentPage={setCurrentPage}
      />

      <div className="overflow-x-auto rounded-xl shadow-md">
        <Table
          currentItems={currentItems}
          startIndex={indexOfFirstItem}
          onSort={handleSort}
          sortConfig={sortConfig}
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
