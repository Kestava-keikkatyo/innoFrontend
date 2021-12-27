import { JobsAction } from "../types/types";
import jobService from "../services/jobService";

/**
 * @function
 * @desc Fetches all jobs.
 */
export const fetchAllJobs = () => async (dispatch: any) => {
  try {
    const res = await jobService.fetchAllJobs();
    dispatch({ type: JobsAction.GETALLJOBS_SUCCESS, data: res.data });
  } catch (error) {
    console.log(error);
  }
};
