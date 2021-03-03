import { formatDate } from "../utils/dateUtils"

/**
 * Redux feeling reducer
 * @module
 */
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

const initialFeeling = {
  value: 0,
  note: "",
  isPrivate: false,
}
const initialState = {
  currentFeeling: initialFeeling,
  feelingDataSet: initialDataset,
  feelings: [],
}

const feelingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FEELINGS":
      return {
        ...state,
        feelings: action.data
      }
    case "SET_CURRENT_FEELING":
      return {
        ...state,
        currentFeeling: {
          ...state.currentFeeling,
          ...action.data
        }
      }
    case "SUBMIT_FEELING":
      return {
        ...state,
        feelings: action.data,
        currentFeeling: initialFeeling
      }
    case "CLEAR_CURRENT_FEELING":
      return {
        ...state,
        currentFeeling: initialFeeling
      }
    case "UPDATE_DATA_SET":
      let tempLabels = []
      let tempData = []
      state.feelings.map(f => {
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
