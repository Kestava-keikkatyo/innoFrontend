/**
 * @module adminActions
 * @desc Redux admin actions
 */
import adminService from '../services/adminService'
import { USER_DELETED, USER_DEACTIVATED } from '../types/state';


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
 * @desc Deactivate user by Id
 */
 export const DeactivateUserById = (id: string, userType: string) => async (dispatch: any) => {
  const data = await adminService.deactivateUser(id, userType)
  dispatch({ type: USER_DEACTIVATED, data: {id, userType} })
  console.log("deactivate data", data)

};
