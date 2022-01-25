import jobService from "../services/jobService";
import {
  JOB_CREATED_FAILURE,
  JOB_CREATED_REQUEST,
  JOB_CREATED_SUCCESS,
  JOB_CURRENT_REQUEST,
  JOB_CURRENT_SUCCESS,
  JOB_DELETED_FAILURE,
  JOB_DELETED_SUCCESS,
  JOB_GETALL_FAILURE,
  JOB_GETALL_REQUEST,
  JOB_GETALL_SUCCESS,
} from "../types/state";
import { Job, severity } from "../types/types";
import { setAlert } from "./alertActions";

/**
 * @function
 * @desc Fetches all jobs.
 */
export const fetchAllJobs = () => async (dispatch: any) => {
  try {
    dispatch({
      type: JOB_GETALL_REQUEST,
    });
    const res = await jobService.fetchAllJobs();
    dispatch({ type: JOB_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({ type: JOB_GETALL_FAILURE, data: error && error.message });
  }
};

/**
 * @function
 * @desc Fetches all jobs for agency.
 */
export const fetchAllJobsForAgency = () => async (dispatch: any) => {
  try {
    const res = await jobService.fetchAllJobsForAgency();
    dispatch({ type: JOB_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({ type: JOB_GETALL_FAILURE, data: error && error.message });
  }
};

/**
 * @function
 * @desc Fetches jod by Id.
 */
export const fetchJobById = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: JOB_CURRENT_REQUEST,
    });
    const res = await jobService.fetchJobById(id);
    dispatch({ type: JOB_CURRENT_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: JOB_CREATED_FAILURE,
      data: error,
    });
    dispatch(setAlert("Failed to fetch the job: " + error, severity.Error, 15));
  }
};

/**
 * @function
 * @desc Delete job by Id
 */
export const DeleteJobById = (id: string) => async (dispatch: any) => {
  try {
    const data = await jobService.deleteJob(id);
    dispatch({ type: JOB_DELETED_SUCCESS, data: { id } });
    console.log("deleted data", data);
  } catch (error) {
    dispatch({ type: JOB_DELETED_FAILURE, data: error && error.message });
  }
};

/**
 * Create job
 * @function
 * @param {Object} job - Basic job information (title, cayegory, location...)
 * @param {string} role - Agency
 */
export const createJob = (job: Job) => async (dispatch: any) => {
  try {
    dispatch({
      type: JOB_CREATED_REQUEST,
      data: job,
    });

    const data = await jobService.createJob(job);
    dispatch({
      type: JOB_CREATED_SUCCESS,
      data: job,
    });
    dispatch(setAlert("Job created successfully!"));
    console.log("Created job", data);
  } catch (e) {
    dispatch({
      type: JOB_CREATED_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to create the job: " + e, severity.Error, 15));
  }
};
