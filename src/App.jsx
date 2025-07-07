import React, { useState } from "react";
import { JobProvider } from "./context/JobContext";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import Stats from "./components/Stats";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <JobProvider>
      <div className="min-h-screen bg-[#1c1c1c] text-white font-sans">
        {/* Header */}
        <header className="text-center py-8 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold underline underline-offset-8 decoration-orange-400">
            Track My Jobs
          </h1>
        </header>

        {/* Add Job Button + Filter */}
        {!showForm && (
          <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-6 px-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              + Add New Job
            </button>
            <FilterBar />
          </div>
        )}

        {/* Job Form */}
        {showForm && (
          <JobForm onClose={() => setShowForm(false)} />
        )}

        {/* Job List + Stats */}
        {!showForm && (
          <>
            <JobList onEditClick={() => setShowForm(true)} />
            <Stats />
          </>
        )}
      </div>
    </JobProvider>
  );
}

export default App;
