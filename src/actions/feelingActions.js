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

export const updateDataSet = () => async (dispatch) => {
  dispatch({ type: 'UPDATE_DATA_SET'})
}

/**
 * @todo post feeling palauttaa koko käyttäjä objektin,
 * muuta tämä palauttamaan vain postattu feeling objekti
 * @param {*} feeling 
 */
export const submitFeeling = (feeling) => async (dispatch) => {
  const res = await feelingService.postFeeling(feeling)
  if(res.status === 200)
    dispatch({ type: 'SUBMIT_FEELING', data: res.data.feelings })
}