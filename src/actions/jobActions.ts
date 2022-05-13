import jobService from "../services/jobService";
import { jobType } from "../types/types";
import { Job, severity } from "../types/types";
import { setAlert } from "./alertActions";

/**
 * @function
 * @desc Fetches all jobs.
 */
export const fetchAllJobs = () => async (dispatch: any) => {
  try {
    dispatch({
      type: jobType.JOB_GETALL_REQUEST,
    });
    const res = await jobService.fetchAllJobs();
    dispatch({ type: jobType.JOB_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: jobType.JOB_GETALL_FAILURE,
      data: error && error.message,
    });
  }
};

/**
 * @function
 * @desc Fetches all jobs for agency.
 */
export const fetchAllJobsForAgency = () => async (dispatch: any) => {
  try {
    const res = await jobService.fetchAllJobsForAgency();
    dispatch({ type: jobType.JOB_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: jobType.JOB_GETALL_FAILURE,
      data: error && error.message,
    });
  }
};

/**
 * @function
 * @desc Fetches jod by Id.
 */
export const fetchJobById = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: jobType.JOB_CURRENT_REQUEST,
    });
    const res = await jobService.fetchJobById(id);
    dispatch({ type: jobType.JOB_CURRENT_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: jobType.JOB_CREATED_FAILURE,
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
    dispatch({ type: jobType.JOB_DELETED_SUCCESS, data: { id } });
    console.log("deleted data", data);
  } catch (error) {
    dispatch({
      type: jobType.JOB_DELETED_FAILURE,
      data: error && error.message,
    });
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
      type: jobType.JOB_CREATED_REQUEST,
      data: job,
    });

    const { data } = await jobService.createJob(job);
    dispatch({
      type: jobType.JOB_CREATED_SUCCESS,
      data,
    });
    dispatch(setAlert("Job created successfully!"));
    console.log("Created job", data);
  } catch (e) {
    dispatch({
      type: jobType.JOB_CREATED_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to create the job: " + e, severity.Error, 15));
  }
};
