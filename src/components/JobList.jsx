import React from "react";
import { useJobContext } from "./DataContext";
export default function JobList() {
  const handelDelete = () => {};

  const { jobs, deleteJob, editJob } = useJobContext();

  return (
    <div className="overflow-x-auto w-full md:px-24">
      <table className="min-w-full table-auto border border-gray-600 text-white">
        <thead className="bg-gray-700 text-left">
          <tr>
            <th className="px-4 py-2 border-b border-gray-600">Company</th>
            <th className="px-4 py-2 border-b border-gray-600">Position</th>
            <th className="px-4 py-2 border-b border-gray-600">Status</th>
            <th className="px-4 py-2 border-b border-gray-600">Date</th>
            <th className="px-4 py-2 border-b border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => {
            return (
              <tr key={job.id} className="bg-orange-600 ">
                <td className="px-4 py-2 border-b border-gray-700">
                  {job.company}
                </td>
                <td className="px-4 py-2 border-b border-gray-700">
                  {job.position}
                </td>
                <td className="px-4 py-2 border-b border-gray-700 text-green-400">
                  {job.status}
                </td>
                <td className="px-4 py-2 border-b border-gray-700">
                  {job.date}
                </td>
                <td className="px-4 py-2 border-b border-gray-700 flex gap-2">
                  <button
                    onClick={() => deleteJob(job.id)}
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                  >
                    <i className="ri-delete-back-2-fill"></i>
                  </button>
                  <button
                    onClick={() => {
                      setAddJob(true);
                      setEditingJob(job);
                    }}
                    className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    <i className="ri-edit-circle-line"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
