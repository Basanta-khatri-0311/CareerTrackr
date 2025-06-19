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

// import React, { useState, useEffect } from "react";

// const allBrands = [
//   { id: "1", brandName: "puma" },
//   { id: "2", brandName: "adidas" },
//   { id: "3", brandName: "nike" },
//   { id: "4", brandName: "fila" },
//   { id: "5", brandName: "reebok" },
// ];

// function App() {
//   const [search, setSearch] = useState("");
//   const [productAfterSearch, setProductAfterSearch] = useState([]);

//   const onSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const results = allBrands.filter((value) =>
//       value.brandName.toLowerCase().includes(search.toLowerCase())
//     );
//     setProductAfterSearch(results);
//     setSearch("");
//   };

//   return (
//     <div className="w-full min-h-screen bg-black text-white p-10">
//       <input
//         className="bg-gray-600 p-4"
//         value={search}
//         onChange={onSearchChange}
//         type="search"
//         name="search"
//         placeholder="Search products..."
//       />
//       <button
//         type="submit"
//         className="bg-gray-600 p-4 ml-4 rounded-xl cursor-pointer"
//         onClick={handleSearch}
//       >
//         Search
//       </button>

//       <div className="bg-green-600 mt-10 p-4 rounded">
//         <h2 className="text-xl font-bold mb-2">Searched products:</h2>
//         {productAfterSearch.length > 0 ? (
//           productAfterSearch.map((brand) => (
//             <p key={brand.id}>{brand.brandName}</p>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


