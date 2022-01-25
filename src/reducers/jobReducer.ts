/**
 * @module reducer/job
 * @desc Redux job reducer
 */
import {
  JobState,
  JobActions,
  JOB_GETALL_FAILURE,
  JOB_DELETED_SUCCESS,
  JOB_DELETED_FAILURE,
  JOB_CREATED_SUCCESS,
  JOB_CREATED_FAILURE,
  JOB_CREATED_REQUEST,
  JOB_CURRENT_SUCCESS,
  JOB_CURRENT_FAILURE,
  JOB_CURRENT_REQUEST,
  JOB_GETALL_SUCCESS,
  JOB_GETALL_REQUEST,
} from "./../types/state";
import { Job } from "../types/types";

const initialState: JobState = {
  currentJob: undefined,
  loading: false,
  jobs: [],
};

/**
 * @function
 * @desc job reducer that controls job state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const jobReducer = (state = initialState, action: JobActions) => {
  switch (action.type) {
    case JOB_GETALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case JOB_GETALL_SUCCESS: {
      return {
        ...state,
        jobs: action.data,
        loading: false,
      };
    }
    case JOB_GETALL_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
        loading: false,
      };
    }
    case JOB_CURRENT_REQUEST: {
      return {
        ...state,
        currentJob: action.data,
        loading: true,
      };
    }
    case JOB_CURRENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentJob: action.data,
      };
    }
    case JOB_CURRENT_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    case JOB_DELETED_SUCCESS: {
      return {
        ...state,
        jobs: state.jobs.filter((item) => item._id !== action.data.id),
      };
    }
    case JOB_DELETED_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
      };
    }
    case JOB_CREATED_REQUEST: {
      return {
        ...state,
        currentJob: action.data,
        loading: true,
      };
    }
    case JOB_CREATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        jobs: [...state.jobs, action.data],
      };
    }
    case JOB_CREATED_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    default:
      return state;
  }
};
export default jobReducer;
