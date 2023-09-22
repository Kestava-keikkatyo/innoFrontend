/**
 * @module reducer/feeling
 * @desc Redux feeling reducer
 */
import {
  ADD_FEELING,
  ADD_FEELINGS,
  CLEAR_CURRENT_FEELING,
  FeelingActionTypes,
  FeelingState,
  FETCH_FEELINGS,
  SET_CURRENT_FEELING,
  UPDATE_FEELING_DATASET,
} from '../types/state'
import { Feeling } from '../types/types'
//import { formatDate } from "../utils/dateUtils"

const initialDataset = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
      //fill: false,
      //lineTension: 0.5,
    },
  ],
}

const initialFeeling: Feeling = {
  value: 0,
  note: '',
  fileUrl: '',
  isPrivate: false,
}
const initialState: FeelingState = {
  currentFeeling: initialFeeling,
  feelingDataSet: initialDataset,
  feelings: [],
}

/**
 * @function
 * @desc Redux feeling reducer that controls the feeling state.
 * @param {FeelingState} state - initial state
 * @param {FeelingActionTypes} action - dispatched action
 */
const feelingReducer = (state: FeelingState = initialState, action: FeelingActionTypes) => {
  switch (action.type) {
    case FETCH_FEELINGS:
      return {
        ...state,
        feelings: action.data,
      }
    case SET_CURRENT_FEELING:
      return {
        ...state,
        currentFeeling: {
          ...state.currentFeeling,
          ...action.data,
        },
      }
    case ADD_FEELINGS:
      console.log('action.data', action.data)
      return {
        ...state,
        feelings: [...state.feelings, ...action.data],
      }
    case ADD_FEELING:
      console.log('action.data', action.data)
      return {
        ...state,
        feelings: {
          ...state.feelings,
          ...action.data,
        },
        currentFeeling: initialFeeling,
      }
    case CLEAR_CURRENT_FEELING:
      return {
        ...state,
        currentFeeling: initialFeeling,
      }
    case UPDATE_FEELING_DATASET:
      console.log('feeling reducer: data: ', action.data)
      let tempLabels: any = []
      //let tempData: any = []
      console.log('€€€ state', state)
      /*
      state.feelings.map((f: any) => {
        tempLabels.push(formatDate(f.createdAt))
        return tempData.push(f.value)
      })
      */

      return {
        ...state,
        feelingDataSet: {
          ...state.feelingDataSet,
          labels: tempLabels,
          datasets: [
            {
              ...state.feelingDataSet.datasets[0],
              data: state.feelings,
            },
          ],
        },
      }
    default:
      return state
  }
}

export default feelingReducer
