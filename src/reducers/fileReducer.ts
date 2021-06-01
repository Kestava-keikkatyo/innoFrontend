

/**
 * @module reducer/file
 * @desc Redux file reducer
 */
 import { SET_CURRENT_FILE, FileState, FileActionTypes} from "../types/state"
 import {File} from "../types/types"

 const initialFile: File = {
    file:{}
 }
 const initialState: FileState = {
   currentFile: initialFile,
 }

 /**
  * @function
  * @desc Redux file reducer that controls the file state.
  * @param {FileState} state - initial state
  * @param {A} action - dispatched action
  */
 const fileReducer = (state: FileState = initialState, action: FileActionTypes) => {
    switch (action.type) {
      case SET_CURRENT_FILE:
        return {
          ...state,
          currentFile: {
            ...state.currentFile,
            ...action.data
          }
        }
      default:
        return state
    }
  }


 export default fileReducer