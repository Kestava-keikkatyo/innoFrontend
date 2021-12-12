/**
 * @module service/admin
 * @desc Admin requests to backend.
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
 * @param id
 * @returns
 */
const deleteUser = async (userId: string, userType: string) => {
  try {
    const res = await axios.delete(
      `${baseUrl}/admin/${userType.toLowerCase()}/${userId}`,
      authHeader()
    );
    console.log("delete res", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param id
 * @returns
 */
const setUserStatus = async (
  userId: string,
  userType: string,
  active: boolean
) => {
  try {
    const res = await axios.patch(
      `${baseUrl}/admin/${userType.toLowerCase()}/${userId}`,
      { active },
      authHeader()
    );
    console.log("activate res", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @function
 * @desc sends out create user request.
 * @param {User} user - Basic user information.
 * @param {roles} role - Account role to be created (admin).
 */
const createUser = async (
  name: string,
  email: string,
  userType: string,
  password: string
) => {
  try {
    return await axios.post(
      `${baseUrl}/admin/admin`,
      { name, email, userType, password },
      authHeader()
    );
  } catch (error) {
    console.log(error);
  }
};

export default {
  deleteUser,
  setUserStatus,
  createUser,
};
