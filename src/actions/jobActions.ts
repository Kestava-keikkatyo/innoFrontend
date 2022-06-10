import jobService from "../services/jobService";
import { jobType } from "../types/types";
import { Job, severity } from "../types/types";
import { setAlert } from "./alertActions";
import history from "../utils/history";

/**
 * @function
 * @desc Fetches all jobs.
 */
export const fetchAllJobs = () => async (dispatch: any) => {
  try {
    dispatch({
      type: jobType.JOB_GET_ALL_REQUEST,
    });
    const res = await jobService.fetchAllJobs();
    dispatch({ type: jobType.JOB_GET_ALL_SUCCESS, data: res.data });
  } catch (e) {
    dispatch({
      type: jobType.JOB_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to fetch jobs!: " + e, severity.Error, 15));
  }
};

/**
 * @function
 * @desc Fetches all jobs for agency.
 */
export const fetchAllJobsForAgency = () => async (dispatch: any) => {
  try {
    dispatch({
      type: jobType.JOB_GET_ALL_REQUEST,
    });
    const res = await jobService.fetchAllJobsForAgency();
    dispatch({ type: jobType.JOB_GET_ALL_SUCCESS, data: res.data });
  } catch (e) {
    dispatch({
      type: jobType.JOB_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to fetch jobs!: " + e, severity.Error, 15));
  }
};

/**
 * @function
 * @desc Fetches jod by Id.
 */
export const fetchJobById = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: jobType.JOB_GET_CURRENT_REQUEST,
    });
    const res = await jobService.fetchJobById(id);
    dispatch({ type: jobType.JOB_GET_CURRENT_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: jobType.JOB_ACTION_FAILURE,
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
    dispatch({
      type: jobType.JOB_DELETED_REQUEST,
    });
    const data = await jobService.deleteJob(id);
    dispatch({ type: jobType.JOB_DELETED_SUCCESS, data: { id } });
  } catch (e) {
    dispatch({
      type: jobType.JOB_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to delete the job: " + e, severity.Error, 15));
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
      type: jobType.JOB_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to create the job: " + e, severity.Error, 15));
  }
};

/**
 * @function
 * @desc update job.
 */
export const updateJob = (jobId: string, job: Job) => async (dispatch: any) => {
  try {
    dispatch({
      type: jobType.JOB_UPDATED_REQUEST,
    });

    const res = await jobService.updateJob(jobId, job);
    dispatch({ type: jobType.JOB_UPDATED_SUCCESS, data: res.data });

    history.push("/job?tab=my");
  } catch (error) {
    dispatch({
      type: jobType.JOB_ACTION_FAILURE,
      data: error,
    });
    dispatch(setAlert("Failed to update user: " + error, severity.Error, 15));
  }
};
