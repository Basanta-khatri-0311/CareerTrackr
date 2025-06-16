import React from "react";

export default function JobList() {
  return (
    <div className="overflow-x-auto w-full md:px-36">
      <table className="min-w-full table-auto border border-gray-600 text-white">
        <thead className="bg-gray-700 text-left">
          <tr>
            <th className="px-4 py-2 border-b border-gray-600">Company</th>
            <th className="px-4 py-2 border-b border-gray-600">Position</th>
            <th className="px-4 py-2 border-b border-gray-600">Status</th>
            <th className="px-4 py-2 border-b border-gray-600">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-orange-600">
            <td className="px-4 py-2 border-b border-gray-700">Google</td>
            <td className="px-4 py-2 border-b border-gray-700">
              Frontend Developer
            </td>
            <td className="px-4 py-2 border-b border-gray-700 text-green-400">
              Interviewed
            </td>
            <td className="px-4 py-2 border-b border-gray-700">2025-06-16</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
