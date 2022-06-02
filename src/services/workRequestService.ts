/**
 * @module service/workRequest
 * @desc WorkRequest requests to backend.
 */
import axios from "axios";
import { WorkRequest } from "../types/types";
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
 * @desc send work request.
 * @param {Topic} topic - Basic work request information.
 */
const sendWorkRequest = async (workRequest: WorkRequest) => {
  return await axios.post(`${baseUrl}/workRequest/`, workRequest, authHeader());
};

export default {
  sendWorkRequest,
};
