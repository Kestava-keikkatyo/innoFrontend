/**
 * @module adminActions
 * @desc Redux admin actions
 */
import adminService from "../services/adminService";
import { USER_DELETED, UPDATE_USER_STATUS, USER_CREATED } from "../types/state";

/**
 * @function
 * @desc Delete user by Id
 */
export const DeleteUserById =
  (id: string, userType: string) => async (dispatch: any) => {
    const data = await adminService.deleteUser(id, userType);
    dispatch({ type: USER_DELETED, data: { id, userType } });
    console.log("deleted data", data);
  };

/**
 * @function
 * @desc Update user's status by Id
 */
export const updateUSerStatus =
  (id: string, userType: string, active: boolean) => async (dispatch: any) => {
    const data = await adminService.setUserStatus(id, userType, active);
    dispatch({ type: UPDATE_USER_STATUS, data: { id, userType, active } });
    console.log("deactivate data", data);
  };

/**
 * Create user
 * @function
 * @param {Object} user - Basic user information (name, email, password...)
 * @param {string} role - Admin
 */
export const createAdmin =
  (name: string, email: string, password: string) => async (dispatch: any) => {
    const data = await adminService.createUser(name, email, "admin", password);
    dispatch({
      type: USER_CREATED,
      data: { name, email, userType: "admin", password },
    });
    console.log("Created user", data);
  };
