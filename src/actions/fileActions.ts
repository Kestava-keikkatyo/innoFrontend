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
 export const submitFile = (file: any) => async (dispatch: any) => {
   const res = await fileService.postFile(file)
   dispatch({ type: SET_CURRENT_FILE, data: res.data })
   console.log('File: res.data: ', res.data)

 }

 export const setFile = (file: any) => (dispatch:any) => {
   console.log("fileActions:setFile:file:", file)
   dispatch({type: SET_CURRENT_FILE, data: file})
 }