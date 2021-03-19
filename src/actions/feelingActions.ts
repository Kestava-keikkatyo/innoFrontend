/**
 * @module actions/feeling
 * @desc Redux feeling actions
 */
import feelingService from "../services/feelingService"
import { ADD_FEELING, FETCH_FEELINGS, SET_CURRENT_FEELING, UPDATE_FEELING_DATASET } from "../types/state"
import { Feeling } from "../types/types"

/**
 * @function
 * @desc Fetches all the feelings.
 */
export const fetchFeelings = () => async (dispatch: any) => {
  const res = await feelingService.getFeelings()
  dispatch({ type: FETCH_FEELINGS, data: res.data})
}

/**
 * @function
 * @desc Updates the feelings.
 * @deprecated
 */
export const updateFeeling = (data: any) => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_FEELING, data})
}

/**
 * @function
 * @desc Updates the feelings dataset.
 */
export const updateDataSet = () => async (dispatch: any) => {
  dispatch({ type: UPDATE_FEELING_DATASET })
}

/**
 * @function
 * @desc This function posts a new feeling entry.
 * @param {Feeling} feeling 
 * @todo post feeling palauttaa koko käyttäjä objektin,
 * muuta tämä palauttamaan vain postattu feeling objekti
 */
export const submitFeeling = (feeling: Feeling) => async (dispatch: any) => {
  const res = await feelingService.postFeeling(feeling)
  if(res.status === 200)
    dispatch({ type: ADD_FEELING, data: res.data.feelings })
}