import React, { useReducer, useRef, useEffect } from "react";
import { useJobContext } from "../context/JobContext";

const initialFormState = {
  company: { value: "", error: "" },
  position: { value: "", error: "" },
  status: { value: "", error: "" },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: {
          value: action.payload,
          error: action.payload.trim() === "" ? `${action.field} is required` : "",
        },
      };
    case "RESET":
      return initialFormState;
    default:
      return state;
  }
};

const JobForm = ({ onClose }) => {
  const { addJob, editingJob, updateJob } = useJobContext();

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const companyRef = useRef();
  const positionRef = useRef();
  const statusRef = useRef();

  // Pre-fill form when editing
  useEffect(() => {
    if (editingJob) {
      dispatch({ type: "UPDATE_FIELD", field: "company", payload: editingJob.company });
      dispatch({ type: "UPDATE_FIELD", field: "position", payload: editingJob.position });
      dispatch({ type: "UPDATE_FIELD", field: "status", payload: editingJob.status });
    }
  }, [editingJob]);

  const handleChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { company, position, status } = formState;

    if (!company.value.trim()) return companyRef.current.focus();
    if (!position.value.trim()) return positionRef.current.focus();
    if (!status.value.trim()) return statusRef.current.focus();

    const job = {
      id: editingJob ? editingJob.id : Date.now(),
      company: company.value,
      position: position.value,
      status: status.value,
      date: new Date().toLocaleDateString("en-GB"),
    };

    if (editingJob) {
      updateJob(job);
    } else {
      addJob(job);
    }

    dispatch({ type: "RESET" });
    onClose(); // closes the form
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col gap-10">
      <h1 className="text-4xl font-bold text-center underline underline-offset-8 decoration-orange-400">
        {editingJob ? "Edit Job" : "Add New Job"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full mx-auto bg-gray-800 p-10 rounded-2xl shadow-lg flex flex-col gap-8 text-lg"
      >
        {/* Company Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-orange-300 font-semibold">
            Company Name
          </label>
          <input
            id="company"
            ref={companyRef}
            value={formState.company.value}
            onChange={(e) => handleChange("company", e.target.value)}
            type="text"
            placeholder="Enter company name"
            className="bg-gray-700 text-white px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formState.company.error && (
            <span className="text-red-400 text-sm">{formState.company.error}</span>
          )}
        </div>

        {/* Position Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="position" className="text-orange-300 font-semibold">
            Position
          </label>
          <input
            id="position"
            ref={positionRef}
            value={formState.position.value}
            onChange={(e) => handleChange("position", e.target.value)}
            type="text"
            placeholder="Enter job position"
            className="bg-gray-700 text-white px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formState.position.error && (
            <span className="text-red-400 text-sm">{formState.position.error}</span>
          )}
        </div>

        {/* Status Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="status" className="text-orange-300 font-semibold">
            Status
          </label>
          <select
            id="status"
            ref={statusRef}
            value={formState.status.value}
            onChange={(e) => handleChange("status", e.target.value)}
            className="bg-gray-700 text-white px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select status</option>
            <option value="applied">Applied</option>
            <option value="interviewed">Interviewed</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
          {formState.status.error && (
            <span className="text-red-400 text-sm">{formState.status.error}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300"
          >
            {editingJob ? "Update Job" : "Save Job"}
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "RESET" });
              onClose();
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
