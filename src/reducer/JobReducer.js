export const initialState = {
  jobs: [],
  editingJob: null,
  filter: "all",
};

export const jobReducer = (state, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, action.payload] };

    case "DELETE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };

    case "UPDATE_JOB":
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        ),
        editingJob: null,
      };

    case "SET_EDIT_JOB":
      return { ...state, editingJob: action.payload };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
