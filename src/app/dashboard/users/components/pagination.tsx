import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

import { DataProp } from "./table";

export function TablePagination({
  onSetCurrentPage,
  currentPage,
  data,
  itemsPerPage,
}: {
  onSetCurrentPage: (page: number) => void;
  currentPage: number;
  data: DataProp[];
  itemsPerPage: number;
}) {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push("ellipsis");

      const start = Math.max(2, currentPage - 2);
      const end = Math.min(totalPages - 1, currentPage + 2);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination className="justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="bg-white"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onSetCurrentPage(currentPage - 1);
            }}
          />
        </PaginationItem>

        {getPageNumbers().map((page, idx) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSetCurrentPage(page);
                }}
                className={`px-3 py-1 rounded-md border transition-colors ${
                  currentPage === page
                    ? "bg-orange-500 text-white border-orange-500 hover:bg-white"
                    : "bg-white text-black  hover:bg-orange-400"
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-white"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                onSetCurrentPage(currentPage + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
