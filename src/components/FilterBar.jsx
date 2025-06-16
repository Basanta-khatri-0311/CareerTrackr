import React from "react";

function FilterBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center w-full sm:w-auto">
      <label
        htmlFor="filter"
        className="text-base sm:text-xl md:text-2xl font-semibold text-white"
      >
        Filter:
      </label>

      <div className="relative w-full sm:w-auto">
        <select
          id="filter"
          className="appearance-none bg-gray-500 text-white text-base sm:text-xl md:text-2xl px-5 py-2 pr-10 rounded-xl border-none outline-none w-full cursor-pointer"
        >
          <option value="all">All</option>
          <option value="interviewed">Interviewed</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white text-lg">
          ▼
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
