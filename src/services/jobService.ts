/**
 * @module service/worker
 * @desc Worker requests to backend.
 */
import axios from "axios";
import { is } from "date-fns/locale";
import { object } from "prop-types";
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

export default {
  fetchAllJobs,
  fetchJobById,
  fetchAllJobsForAgency,
};
