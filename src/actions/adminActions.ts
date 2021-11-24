/**
 * @module adminActions
 * @desc Redux admin actions
 */
import adminService from '../services/adminService'
import { USER_DELETED, UPDATE_USER_STATUS } from '../types/state';


  /**
 * @function
 * @desc Delete user by Id
 */
 export const DeleteUserById = (id: string, userType: string) => async (dispatch: any) => {
  const data = await adminService.deleteUser(id, userType)
  dispatch({ type: USER_DELETED, data: {id, userType} })
  console.log("deleted data", data)

};

/**
 * @function
 * @desc Update user's status by Id
 */
 export const updateUSerStatus = (id: string, userType: string, active: boolean) => async (dispatch: any) => {
  const data = await adminService.setUserStatus(id, userType, active)
  dispatch({ type: UPDATE_USER_STATUS, data: {id, userType, active} })
  console.log("deactivate data", data)

};