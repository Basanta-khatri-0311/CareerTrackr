import React from "react";

function Stats() {
  const stats = [
    {
      label: "Total Applications",
      value: 12,
      icon: "📌",
      color: "bg-blue-600",
    },
    {
      label: "Interviews",
      value: 5,
      icon: "🎯",
      color: "bg-yellow-500",
    },
    {
      label: "Offers",
      value: 2,
      icon: "✅",
      color: "bg-green-600",
    },
    {
      label: "Rejected",
      value: 4,
      icon: "❌",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-36 py-8 flex flex-col gap-8">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-orange-600 underline underline-offset-8 decoration-orange-400">
        STATS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-5 rounded-xl shadow-md text-white ${stat.color}`}
          >
            <span
              className="text-3xl"
              role="img"
              aria-label={stat.label.toLowerCase()}
            >
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
}

export default Stats;
