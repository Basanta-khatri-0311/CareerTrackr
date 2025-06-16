import { useContext, createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export const useJobContext = () => useContext(JobContext);

export const JobContextProvider = ({ children }) => {
  const [editingJob, setEditingJob] = useState(null)
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const editJob = (id, updatedJob) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, ...updatedJob } : job))
    );
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        addJob,
        deleteJob,
        editJob,
        setEditingJob,
        editingJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
