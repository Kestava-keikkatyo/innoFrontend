/**
 * @module actions/file
 * @desc Redux file actions
 */
import fileService from "../services/fileService"
 import { SET_CURRENT_FILE} from "../types/state"
 import {File} from "../types/types"


 /**
  * @function
  * @desc This function posts a new file object.
  * @param {File} file
  */
 export const submitFile = (file: File) => async (dispatch: any) => {
   const res = await fileService.postFile(file)
   dispatch({ type: SET_CURRENT_FILE, data: res.data })
   console.log('File: res.data: ', res.data)
   /*
   if(res.status === 200)
     dispatch({ type: SET_CURRENT_FILE, data: res.data })
     console.log('File: res.data: ', res.data)
   */

 }