/**
 * @module service/user
 * @desc User requests to backend.
 */
import axios from "axios";
import { Credentials, roles, User } from "../types/types";
import { loadUser } from "../utils/storage";

import baseUrl from "../utils/baseUrl";

/**
 * helper function for setting up request header
 * @function
 */
const authHeader = () => {
  return {
    headers: { "x-access-token": `${loadUser().token}` },
  };
};

/**
 * @function
 * @desc sends out signup request.
 * @param {User} user - Basic user information.
 * @param {roles} role - Account role to be created (worker, agency, business).
 */
const register = async (user: User) => {
  try {
    return await axios.post(`${baseUrl}/authentication/register`, user);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

/**
 * @function
 * @desc Sends out login request
 * @param {Credentials} credentials - user's credentials ({email: ..., password: ...})
 * @param {roles} role - account role
 */
const signin = async (credentials: Credentials) => {
  try {
    return await axios.post(`${baseUrl}/authentication/signin`, credentials);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

const logout = async () => {
  return await axios.post(
    `${baseUrl}/authentication/logout`,
    null,
    authHeader()
  );
};

/**
 * @function
 * @desc Sends out me request that gets user profile information.
 * @param {roles} role - Account role.
 */
const me = async () => {
  try {
    return await axios.get(`${baseUrl}/user/me`, authHeader());
  } catch (error) {
    return Promise.reject(error.response);
  }
};

/**
 * @function
 * @desc sends out update request that replaces user's profile information with updateData values
 * @param {User} updateData - profile values to be updated
 * @param {roles} role - account role
 */
const update = async (updateData: User) => {
  try {
    return await axios.put(`${baseUrl}/user/me`, updateData, authHeader());
  } catch (error) {
    return Promise.reject(error.response);
  }
};

/**
 * @function
 * @desc Sends out password update request
 * @param {object} updateData - This object has two properties: currentPassword and
 * and newPassword
 */
const changePassword = async (updateData: object) => {
  try {
    return await axios.put(
      `${baseUrl}/authentication/changePassword`,
      updateData,
      authHeader()
    );
  } catch (error) {
    return error.response;
  }
};

export default {
  register,
  signin,
  me,
  update,
  changePassword,
  logout,
};
