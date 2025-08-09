import { useState } from "react";

interface Prop {
  onSearch: (par: string) => void;
  setCurrentPage: (par: number) => void;
}

export function TitleandQueryBox({ onSearch, setCurrentPage }: Prop) {
  return (
    <div className="w-full mx-auto flex mobile:flex-col tablet:flex-row mobile:gap-4 tablet:gap-0 items-center justify-between">
      <h2 className="text-4xl tablet:text-6xl font-bold">Users</h2>

      <div className="relative w-full tablet:w-[24rem]2">
        <img
          src="./assets/search.svg"
          height="24"
          width="24"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          placeholder="Search Email"
          type="text"
          className="w-full border border-gray-300 bg-white pl-10 pr-4 py-3 rounded-2xl focus:border-amber-400 focus:outline-none"
          onChange={(e) => {
            onSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
}
