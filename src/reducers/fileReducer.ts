/**
 * @module reducer/file
 * @desc Redux file reducer
 */
import { SET_CURRENT_FILES, FileState, FileActionTypes } from '../types/state'

const initialState: FileState = {
  currentFiles: [null, null, null],
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
        currentFiles: action.data,
      }
    default:
      return state
  }
}

export default fileReducer
