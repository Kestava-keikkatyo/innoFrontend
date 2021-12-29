import jobService from "../services/jobService";
import {
  GETALLJOBS_FAILURE,
  GETALLJOBS_SUCCESS,
  SET_CURRENT_JOB,
} from "../types/state";

/**
 * @function
 * @desc Fetches all jobs.
 */
export const fetchAllJobs = () => async (dispatch: any) => {
  try {
    const res = await jobService.fetchAllJobs();
    dispatch({ type: GETALLJOBS_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({ type: GETALLJOBS_FAILURE, data: error && error.message });
  }
};

/**
 * @function
 * @desc Fetches all jobs for agency.
 */
export const fetchAllJobsForAgency = () => async (dispatch: any) => {
  try {
    const res = await jobService.fetchAllJobsForAgency();
    dispatch({ type: GETALLJOBS_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({ type: GETALLJOBS_FAILURE, data: error && error.message });
  }
};

/**
 * @function
 * @desc Fetches jod by Id.
 */
export const fetchJobById = (id: string) => async (dispatch: any) => {
  try {
    const data = await jobService.fetchJobById(id);
    console.log("job's data", data);
    dispatch({ type: SET_CURRENT_JOB, data: data });
  } catch (error) {
    console.log(error);
  }
};
