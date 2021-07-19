

/**
 * @module reducer/file
 * @desc Redux file reducer
 */
 import { SET_CURRENT_FILES,ADD_FILE, FileState, FileActionTypes} from "../types/state"
 import {File} from "../types/types"

 const initialFiles: File = {
    files: [null,null,null]

 }
 const initialState: FileState = {
   currentFiles: initialFiles,
   fileUrls: ['', '', '']
 }

 /**
  * @function
  * @desc Redux file reducer that controls the file state.
  * @param {FileState} state - initial state
  * @param {A} action - dispatched action
  */
 const fileReducer = (state: FileState = initialState, action: FileActionTypes) => {
    switch (action.type) {
      case SET_CURRENT_FILES:
       return {
         ...state,
         currentFiles:{
           files: action.data
         }
       }
      case ADD_FILE:
        return {
          ...state,
          currentFiles: {
            ...state.currentFiles,
            files:[...state.currentFiles.files, action.data]
          }
        }
      default:
        return state
    }
  }

 export default fileReducer