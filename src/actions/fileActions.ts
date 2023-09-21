/**
 * @module actions/file
 * @desc Redux file actions
 */
import fileService from '../services/fileService'
import { SET_CURRENT_FILES } from '../types/state'
//import {File} from "../types/types"

/**
 * @function
 * @desc This function posts a new file object.
 * @param {Files} file
 */
export const submitFile = (file: any) => async (dispatch: any) => {
  const res = await fileService.postFile(file)
  //dispatch({ type: SET_CURRENT_FILES, data: res.data })
  console.log('File: res.data: ', res)
}

export const setFiles = (files: any) => (dispatch: any) => {
  console.log('fileActions:setFiles:files:', files)
  dispatch({ type: SET_CURRENT_FILES, data: files })
}
