import React, { useEffect, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import Stats from "./components/Stats";

function App() {
  const [addJob, setAddJob] = useState(false);

  useEffect

  const handelAddJob = (e) => {
    e.preventDefault();
    setAddJob(!addJob);
  };
  return (
    <>
      <div
        className={`${
          addJob ? "hidden" : "flex"
        } w-full min-h-screen text-white p-3 flex flex-col gap-9`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold  text-center underline underline-offset-8 decoration-orange-400">
          Track My Jobs
        </h1>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center text-base  gap-6 sm:gap-10 w-full px-4">
          <button
            className="flex gap-5 items-center border-none outline-none rounded-xl px-6 py-3 w-full sm:text-xl md:text-2xl lg:4xl sm:w-auto bg-gray-500 hover:bg-gray-600 transition-all duration-300"
            onClick={handelAddJob}
          >
            <span>+</span> Add New Job
          </button>
          <FilterBar />
        </div>
        <JobList />
        <Stats />
      </div>
      <JobForm setAddJob={setAddJob} addJobs={addJob} />
    </>
  );
}

export default App;
