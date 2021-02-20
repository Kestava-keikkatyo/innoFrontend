/**
 * Redux feeling actions
 * @module actions/feelingActions
 */

import feelingService from "../services/feelingService"

/**
 * 
 * @function
 */
export const fetchFeelings = () => async (dispatch) => {
  const res = await feelingService.getFeelings()
  dispatch({ type: 'FETCH_FEELINGS', data: res.data})
}

export const updateFeeling = (data) => async (dispatch) => {
  dispatch({ type: 'SET_CURRENT_FEELING', data})
}

export const submitFeeling = (feeling) => async (dispatch) => {
  const res = await feelingService.postFeeling(feeling)
  if(res.status === 200)
    dispatch({ type: 'CLEAR_CURRENT_FEELING'})
}