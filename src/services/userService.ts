/**
 * @module service/user
 * @desc User requests to backend.
 */
import axios from 'axios';
import { Credentials, roles } from '../types/types';
import { User } from '../types/state';
import { loadUser } from '../utils/storage';

import baseUrl from '../utils/baseUrl';

/**
 * helper function for setting up request header
 * @function
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` },
  };
};

/**
 * @function
 * @desc sends out signup request.
 * @param {User} user - Basic user information.
 * @param {roles} role - Account role to be created (worker, agency, business).
 */
const signup = async (user: User, role: roles) => {
  try {
    switch (role) {
      case roles.Worker:
        return await axios.post(`${baseUrl}/workers`, user);
      case roles.Agency:
        return await axios.post(`${baseUrl}/agencies`, user);
      case roles.Business:
        return await axios.post(`${baseUrl}/businesses`, user);
      default:
        // Unsuitable role selected return Promise.reject.
        return Promise.reject({ message: 'Unsuitable role selected' });
    }
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
const login = async (credentials: Credentials, /*role: roles*/) => {
  try {
   /* switch (role) {
      case roles.Worker:
        return await axios.post(`${baseUrl}/login/worker`, credentials);
      case roles.Agency:
        return await axios.post(`${baseUrl}/login/agency`, credentials);
      case roles.Business:
        return await axios.post(`${baseUrl}/login/business`, credentials);
      default:
        // Unsuitable role selected return Promise.reject.
        return Promise.reject({ message: 'Unsuitable role selected' });
    }*/
    return await axios.post("testi", credentials)
  } catch (error) {
    return Promise.reject(error.response);
  }
};

/**
 * @function
 * @desc Sends out me request that gets user profile information.
 * @param {roles} role - Account role.
 */
const me = async (role: roles) => {
  try {
    switch (role) {
      case roles.Worker:
        return await axios.get(`${baseUrl}/workers/me`, authHeader());
      case roles.Agency:
        return await axios.get(`${baseUrl}/agencies/me`, authHeader());
      case roles.Business:
        return await axios.get(`${baseUrl}/businesses/me`, authHeader());
      default:
        // If user changes localstorages role value to something not mentioned above,
        // return status code 500 to logout user (handled in userActions.js statusHandler).
        return Promise.reject({ status: 500 });
    }
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
const update = async (updateData: User, role: roles) => {
  try {
    switch (role) {
      case roles.Worker:
        return await axios.put(`${baseUrl}/workers`, updateData, authHeader());
      case roles.Agency:
        return await axios.put(`${baseUrl}/agencies`, updateData, authHeader());
      case roles.Business:
        return await axios.put(
          `${baseUrl}/businesses`,
          updateData,
          authHeader()
        );
      default:
        return Promise.reject({ status: 500 });
    }
  } catch (error) {
    return Promise.reject(error.response);
  }
};

/**
 * @function
 * @desc Sends out password update request
 * @param {object} updateData - This object has two properties: currentPassword and
 * and newPassword
 * @param {roles} role - account role
 */
const updatePassword = async (updateData: object, role: roles) => {
  try {
    switch (role) {
      case roles.Worker:
        return await axios.put(
          `${baseUrl}/workers/update-password`,
          updateData,
          authHeader()
        );
      case roles.Agency:
        return await axios.put(
          `${baseUrl}/agencies/update-password`,
          updateData,
          authHeader()
        );
      case roles.Business:
        return await axios.put(
          `${baseUrl}/businesses/update-password`,
          updateData,
          authHeader()
        );
      default:
        return Promise.reject({ status: 500 });
    }
  } catch (error) {
    return error.response;
  }
};

export default {
  signup,
  login,
  me,
  update,
  updatePassword,
};
