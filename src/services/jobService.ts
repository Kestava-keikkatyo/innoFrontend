/**
 * @module service/worker
 * @desc Worker requests to backend.
 */
import axios from "axios";
import { Job } from "../types/types";
import baseUrl from "../utils/baseUrl";
import { loadUser } from "../utils/storage";

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
  return {
    headers: { "x-access-token": `${loadUser().token}` },
  };
};

/**
 * @function
 * @desc Fetches all jobs avaible with current token.
 */
const fetchAllJobs = async () => {
  const res = await axios.get(`${baseUrl}/job/allJobsForWorker`, authHeader());
  return res;
};

/**
 * @function
 * @desc Fetches all jobs avaible with current token.
 */
const fetchAllJobsForAgency = async () => {
  const res = await axios.get(`${baseUrl}/job/allJobsForAgency`, authHeader());
  return res;
};

/**
 * @function
 * @desc fetchJobById
 */
const fetchJobById = async (id: string) => {
  const res = await axios.get(
    `${baseUrl}/job/jobForWorker/${id}`,
    authHeader()
  );
  return res;
};

/**
 * @param id
 * @returns
 */
const deleteJob = async (jobId: string) => {
  try {
    const res = await axios.delete(
      `${baseUrl}/job/jobDelete/${jobId}`,
      authHeader()
    );
    console.log("delete res", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @function
 * @desc sends out create job request.
 * @param {Job} job - Basic job information.
 */
const createJob = async (job: Job) => {
  return await axios.post(`${baseUrl}/job`, job, authHeader());
};
export default {
  fetchAllJobs,
  fetchJobById,
  fetchAllJobsForAgency,
  deleteJob,
  createJob,
};
