/**
 * @module reducer/feeling
 * @desc Redux feeling reducer
 */
import { ADD_FEELING, CLEAR_CURRENT_FEELING, FeelingActionTypes, FeelingState, FETCH_FEELINGS, SET_CURRENT_FEELING, UPDATE_FEELING_DATASET } from "../types/state"
import { Feeling } from "../types/types"
import { formatDate } from "../utils/dateUtils"

const initialDataset = {
  labels: [ ],
  datasets: [
    {
      label: 'Mood',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [ ]
    }
  ]
}

const initialFeeling: Feeling = {
  value: 0,
  note: "",
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
        feelings: action.data
      }
    case SET_CURRENT_FEELING:
      return {
        ...state,
        currentFeeling: {
          ...state.currentFeeling,
          ...action.data
        }
      }
    case ADD_FEELING:
      return {
        ...state,
        feelings: [
          ...state.feelings,
          action.data
        ],
        currentFeeling: initialFeeling
      }
    case CLEAR_CURRENT_FEELING:
      return {
        ...state,
        currentFeeling: initialFeeling
      }
    case UPDATE_FEELING_DATASET:
      let tempLabels: any = []
      let tempData: any = []
      state.feelings.map((f: any) => {
        tempLabels.push(formatDate(f.createdAt))
        return tempData.push(f.value)
      })
      return {
        ...state,
        feelingDataSet: {
          ...state.feelingDataSet,
          labels: tempLabels,
          datasets: [
            {
              ...state.feelingDataSet.datasets[0],
              data: tempData
            }
          ]
        }
      }
    default:
      return state
  }
}

export default feelingReducer
