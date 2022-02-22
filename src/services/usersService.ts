/**
 * @module service/uers
 * @desc Users requests to backend.
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
 * @desc Fetches all users with current token.
 */
const fetchAllUsers = async () => {
  const res = await axios.get(`${baseUrl}/user/allUsersForAdmin`, authHeader());
  return res;
};

/**
 * @function
 * @desc fetchUserById
 */
const fetchUserById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/user/any/${id}`, authHeader());
  return res;
};

/**
 * @param id
 * @returns
 */
const deleteUser = async (userId: string) => {
  try {
    const res = await axios.delete(
      `${baseUrl}/user/userDelete/${userId}`,
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
 * @desc Gets all workers.
 * @returns all workers.
 */
const fetchAllWorkers = async () => {
  const res = await axios.get(`${baseUrl}/user/workers`, authHeader());
  return res;
};

/**
 * @function
 * @desc fetchUserById
 */
const showMyProfile = async (id: string) => {
  const res = await axios.get(`${baseUrl}/me/`, authHeader());
  return res;
};

/**
 * @function
 * @desc Gets all agencies.
 * @returns all agencies.
 */
const fetchAllAgencies = async () => {
  const res = await axios.get(`${baseUrl}/user/agencies`, authHeader());
  return res;
};

export default {
  fetchAllUsers,
  fetchUserById,
  deleteUser,
  fetchAllWorkers,
  showMyProfile,
  fetchAllAgencies,
};
