/**
 * @module service/worker
 * @desc Worker requests to backend.
 */
import axios from "axios";
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
  const res = await axios.get(`${baseUrl}/jobvacancies/`, authHeader());
  return res;
};

/**
 * @function
 * @desc Fetches all jobs avaible with current token.
 */
const fetchAllJobsForAgency = async () => {
  const res = await axios.get(`${baseUrl}/jobvacancies/mine`, authHeader());
  return res;
};

/**
 * @function
 * @desc fetchJobById
 */
const fetchJobById = async (id: string) => {
  try {
    const res = await axios.get(
      `${baseUrl}/jobvacancies/job/${id}`,
      authHeader()
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.response);
  }
};

/**
 * @param id
 * @returns
 */
const deleteJob = async (jobId: string) => {
  try {
    const res = await axios.delete(
      `${baseUrl}/jobvacancies/mine/${jobId}`,
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
const createJob = async (
  category: string,
  title: string,
  jobType: string,
  salary: string,
  location: {
    street: string;
    zipCode: string;
    city: string;
  },
  requirements: string,
  desirableSkills: string,
  benefits: string,
  details: string
) => {
  try {
    return await axios.post(
      `${baseUrl}/job`,
      {
        category,
        title,
        jobType,
        salary,
        location,
        requirements,
        desirableSkills,
        benefits,
        details,
      },
      authHeader()
    );
  } catch (error) {
    console.log(error);
  }
};
export default {
  fetchAllJobs,
  fetchJobById,
  fetchAllJobsForAgency,
  deleteJob,
  createJob,
};
