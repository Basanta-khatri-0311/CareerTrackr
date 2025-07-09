import React from "react";
import { useJobContext } from "../context/JobContext";

const JobList = ({ onEditClick }) => {
  const { jobs, deleteJob, setEditingJob, filter } = useJobContext();

  const filteredJobs =
    filter === "all" ? jobs : jobs.filter((job) => job.status === filter);

  if (filteredJobs.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-20 text-lg">
        No jobs to display.
      </div>
    );
  }

  return (
    <div className="w-full px-2 sm:px-8 md:px-16 overflow-x-auto mt-8">
      <table className="min-w-full table-auto border border-gray-700 text-white">
        <thead className="bg-gray-800 text-left">
          <tr>
            <th className="px-4 py-3 border-b border-gray-700">Company</th>
            <th className="px-4 py-3 border-b border-gray-700">Position</th>
            <th className="px-4 py-3 border-b border-gray-700">Status</th>
            <th className="px-4 py-3 border-b border-gray-700">Date</th>
            <th className="px-4 py-3 border-b border-gray-700 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job) => (
            <tr key={job.id} className="bg-gray-700 even:bg-gray-800 hover:bg-gray-600">
              <td className="px-4 py-3 border-b border-gray-700">{job.company}</td>
              <td className="px-4 py-3 border-b border-gray-700">{job.position}</td>
              <td
                className={`px-4 py-3 border-b border-gray-700 font-semibold ${
                  job.status === "rejected"
                    ? "text-red-400"
                    : job.status === "offer"
                    ? "text-green-400"
                    : job.status === "interviewed"
                    ? "text-yellow-300"
                    : "text-white"
                }`}
              >
                {job.status}
              </td>
              <td className="px-4 py-3 border-b border-gray-700">{job.date}</td>
              <td className="px-4 py-3 border-b border-gray-700 text-center space-x-3">
                <button
                  onClick={() => deleteJob(job.id)}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  <i className="ri-delete-bin-6-line text-white text-lg"></i>
                </button>
                <button
                  onClick={() => {
                    setEditingJob(job);
                    onEditClick(); // trigger form open
                  }}
                  className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  <i className="ri-pencil-line text-white text-lg"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
