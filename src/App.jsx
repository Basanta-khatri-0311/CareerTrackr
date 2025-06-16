import React, { useState } from "react";
import JobForm from "./components/JobForm";

function App() {
  const [addJob, setAddJob] = useState(false);

  const handelAddJob = (e) => {
    e.preventDefault();
    setAddJob(!addJob);
  };
  return (
    <>
      <div
        className={`${
          addJob ? "hidden" : "flex"
        } w-full min-h-screen text-white p-3 flex flex-col gap-24`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center underline underline-offset-8 decoration-orange-400">
          Track My Jobs
        </h1>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center text-base  gap-6 sm:gap-10 w-full px-4">
          <button
            className="flex gap-5 items-center border-none outline-none rounded-xl px-6 py-3 w-full sm:text-xl md:text-2xl lg:4xl sm:w-auto bg-gray-500 hover:bg-gray-600 transition-all duration-300"
            onClick={handelAddJob}
          >
            <span>+</span> Add New Job
          </button>
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
                className="appearance-none bg-gray-700 text-white text-base sm:text-xl md:text-2xl px-5 py-2 pr-10 rounded-xl border border-gray-600 outline-none w-full cursor-pointer"
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
        </div>
      </div>

      <JobForm setAddJob={setAddJob} addJob={addJob} />
    </>
  );
}

export default App;
