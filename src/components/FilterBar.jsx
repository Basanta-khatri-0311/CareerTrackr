import React from "react";
import { useJobContext } from "../context/JobContext";

const FilterBar = () => {
  const { filter, setFilter } = useJobContext();

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
      <label
        htmlFor="filter"
        className="text-base sm:text-lg font-semibold text-orange-300"
      >
        Filter:
      </label>

      <div className="relative">
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-800 appearance-none text-white px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
        >
          <option value="all">All</option>
          <option value="applied">Applied</option>
          <option value="interviewed">Interviewed</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
        <div className="absolute right-3 top-2 pointer-events-none text-white">
          ▼
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
