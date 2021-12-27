/**
 * @module reducer/job
 * @desc Redux job reducer
 */
import { JobState, JobsActionTypes } from "./../types/state";
import { JobsAction, Job } from "../types/types";

export const initialJob: Job = {
  jobTitle: "",
  jobCategory: "",
  details: "",
  requirements: "",
};

const initialState: JobState = {
  currentJob: initialJob,
  jobs: [],
};

/**
 * @function
 * @desc job reducer that controls job state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const jobReducer = (state = initialState, action: JobsActionTypes) => {
  switch (action.type) {
    case JobsAction.GETALLJOBS_SUCCESS: {
      return {
        ...state,
        jobs: action.data,
      };
    }
    case JobsAction.GETALLJOBS_FAILURE: {
      return {
        error: action.error,
      };
    }
    default:
      return state;
  }
};
export default jobReducer;
