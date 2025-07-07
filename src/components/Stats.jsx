import React from "react";
import { useJobContext } from "../context/JobContext";

const Stats = () => {
  const { jobs } = useJobContext();

  const total = jobs.length;
  const interviewed = jobs.filter((job) => job.status === "interviewed").length;
  const offers = jobs.filter((job) => job.status === "offer").length;
  const rejected = jobs.filter((job) => job.status === "rejected").length;

  const stats = [
    {
      label: "Total Applications",
      value: total,
      icon: "📌",
      color: "bg-blue-600",
    },
    {
      label: "Interviewed",
      value: interviewed,
      icon: "🎯",
      color: "bg-yellow-500",
    },
    {
      label: "Offers",
      value: offers,
      icon: "💼",
      color: "bg-green-600",
    },
    {
      label: "Rejected",
      value: rejected,
      icon: "❌",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-400 underline underline-offset-8 mb-10">
        Job Stats
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-5 rounded-xl shadow-md text-white ${stat.color}`}
          >
            <span className="text-3xl" role="img" aria-label={stat.label}>
              {stat.icon}
            </span>
            <div>
              <p className="text-sm text-gray-200">{stat.label}</p>
              <h4 className="text-2xl font-bold">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
