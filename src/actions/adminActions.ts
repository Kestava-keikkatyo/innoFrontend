/**
 * @module adminActions
 * @desc Redux admin actions
 */
 import adminService from '../services/adminService'
import { USER_DELETED } from '../types/state';


  /**
 * @function
 * @desc Delete user by Id
 */
 export const DeleteUserById = (id: string, userType: string) => async (dispatch: any) => {
  const data = await adminService.deleteUser(id, userType)
  dispatch({ type: USER_DELETED, data: {id, userType} })
  console.log("deleted data", data)

};
 
