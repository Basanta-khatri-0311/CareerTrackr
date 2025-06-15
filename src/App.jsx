import React from "react";

function App() {
  return (
    <div className="w-full h-[100vh] bg-[#1c1c1c] text-white p-3 flex flex-col gap-24">  
      <h1 className="text-5xl underline font-bold text-center ">Track my Jobs</h1>
      <div className="flex  justify-around items-center text-xl">
        <button className="border-none rounded-xl px-7 py-4 bg-gray-500 cursor-pointer">
          + Add New Job
        </button>
        <div className="flex gap-5 items-center">
          <label htmlFor="filter">Filter: </label>
          <select
            name=""
            id=""
            className="bg-gray-500 px-7 py-1 border-none outline-none rounded-xl"
          >
            <option value="all">All</option>
          </select>
        </div>
      </div>
      <div className="">

      </div>
    </div>
  );
}

export default App;
