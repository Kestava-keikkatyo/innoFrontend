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
  try {
    const res = await axios.get(`${baseUrl}/jobvacancies/`, authHeader());
    return res;
  } catch (error) {
    return Promise.reject(error.response);
  }
};

export default {
  fetchAllJobs,
};
