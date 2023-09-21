/**
 * @module actions/feeling
 * @desc Redux feeling actions
 */
import { Dispatch } from 'react'
import feelingService from '../services/feelingService'
import {
  ADD_FEELING,
  ADD_FEELINGS,
  FETCH_FEELINGS,
  FeelingActionFailure,
  FeelingGetAllRequest,
  FeelingGetAllSuccess,
  SET_CURRENT_FEELING,
  UPDATE_FEELING_DATASET,
} from '../types/state'
import { Feeling, feelingType, severity } from '../types/types'
import { setAlert } from './alertActions'

/**
 * @function
 * @desc Fetches all the feelings.
 */
export const fetchFeelings = () => async (dispatch: any) => {
  const data = await feelingService.getAllFeelings() // getFeelings returns array of all feelings
  //console.log("feelings data", data)
  dispatch({ type: FETCH_FEELINGS, data: data })
}

/**
 * @function
 * @desc Updates the feelings.
 *
 */
export const updateFeeling = (data: any) => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_FEELING, data })
}

/**
 * @function
 * @desc Add feelings to the feelings list of agency feeling stats.
 */
export const addFeelings = (data: any) => async (dispatch: any) => {
  console.log('ADD FEELING: ' + data)
  dispatch({ type: ADD_FEELINGS, data: data })
}

/**
 * @function
 * @desc Updates the feelings dataset.
 */
export const updateDataSet = () => async (dispatch: any) => {
  const data = await feelingService.getFeelings() // getFeelings returns array of all feelings
  console.log('updateDataSet data:', data)
  dispatch({ type: UPDATE_FEELING_DATASET, data: data })
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
  console.log('###Feeling: res: ', res)
  if (res.status === 200) dispatch({ type: ADD_FEELING, data: res.data })
  console.log('Feeling: res.data: ', res.data)
}
