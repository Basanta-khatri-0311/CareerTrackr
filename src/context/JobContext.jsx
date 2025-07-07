import React, { createContext, useContext, useReducer, useEffect, useCallback } from "react";
import { jobReducer, initialState } from "../reducer/jobReducer";

const JobContext = createContext();

export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState, (initial) => {
    const stored = localStorage.getItem("jobs");
    return stored ? { ...initial, jobs: JSON.parse(stored) } : initial;
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(state.jobs));
  }, [state.jobs]);

  const addJob = useCallback((job) => {
    dispatch({ type: "ADD_JOB", payload: job });
  }, []);

  const deleteJob = useCallback((id) => {
    dispatch({ type: "DELETE_JOB", payload: id });
  }, []);

  const updateJob = useCallback((updatedJob) => {
    dispatch({ type: "UPDATE_JOB", payload: updatedJob });
  }, []);

  const setEditingJob = useCallback((job) => {
    dispatch({ type: "SET_EDIT_JOB", payload: job });
  }, []);

  const setFilter = useCallback((value) => {
    dispatch({ type: "SET_FILTER", payload: value });
  }, []);

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        editingJob: state.editingJob,
        filter: state.filter,
        addJob,
        deleteJob,
        updateJob,
        setEditingJob,
        setFilter,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
