import React, { useState } from "react";

const JobForm = ({ setAddJob, addJob }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

  const handleSaveJob = (e) => {
    e.preventDefault();
    if (!name || !position || !status) {
      alert("Please fill all the fields");
      return;
    }
    setAddJob(false);
    setName("");
    setPosition("");
    setStatus("");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setAddJob(false);
    setName("");
    setPosition("");
    setStatus("");
  };
  return (
    <div
      className={`${
        addJob ? "flex" : "hidden"
      } min-h-screen  text-white p-6 flex flex-col gap-16`}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-center underline underline-offset-8 decoration-orange-400">
        Add New Job
      </h1>

      <form className="max-w-3xl w-full mx-auto bg-transparent bg-opacity-10 p-10 rounded-2xl border border-orange-400 shadow-lg flex flex-col gap-8 text-lg sm:text-xl">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-orange-300 font-semibold">
            Company Name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Enter company name"
            className="bg-gray-300/20 backdrop-blur-sm text-white px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="position" className="text-orange-300 font-semibold">
            Position
          </label>
          <input
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            id="position"
            placeholder="Enter position"
            className="bg-gray-300/20 backdrop-blur-sm text-white px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="status" className="text-orange-300 font-semibold">
            Status
          </label>
          <input
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            type="text"
            id="status"
            placeholder="Enter status"
            className="bg-gray-300/20 backdrop-blur-sm text-white px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex justify-evenly sm:gap-4 sm:justify-end sm:items-center mt-6">
          <button
            onClick={handleSaveJob}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer"
          >
            Save Job
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
