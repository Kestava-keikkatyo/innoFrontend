/**
 * @module service/admin
 * @desc Admin requests to backend.
 */
 import axios from 'axios'
 import baseUrl from '../utils/baseUrl'
 import { loadUser } from '../utils/storage'

 /**
  * @function
  * @desc Helper function for setting up request header.
  */
  const authHeader = () => {
    return {
      headers: { 'x-access-token': `${loadUser().token}` }
    }
  }

 /**
 * @param id
 * @returns
 */
  const deleteUser = async (userId:string, userType: string) => {
    try {
      const res = await axios.delete(`${baseUrl}/admin/${userType.toLowerCase()}/${userId}`, authHeader())
      console.log("delete res", res)
      return res
    } catch (error) {
      console.log(error);
    }
  }

/**
 * @param id
 * @returns
 */
 const deactivateUser = async (userId:string, userType: string) => {
  try {
    const res = await axios.patch(`${baseUrl}/admin/${userType.toLowerCase()}/${userId}`, {active: false}, authHeader())
    console.log("deactivate res", res)
    return res
  } catch (error) {
    console.log(error);
  }
}

 export default {
   deleteUser,
   deactivateUser
 }
