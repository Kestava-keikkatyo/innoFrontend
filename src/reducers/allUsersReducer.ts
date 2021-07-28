import {
  FETCH_ALL_AGENCIES,
  FETCH_ALL_BUSINESSES,
  FETCH_ALL_WORKERS,
  AllUsersState,
  AllUsersActionTypes,
} from "../types/state"

const initialState: AllUsersState = {
    agencies: [],
    businesses: [],
    workers: []
  }


const allUsersReducer = (state: AllUsersState = initialState, action: AllUsersActionTypes) => {
    switch (action.type) {
      case FETCH_ALL_AGENCIES:
        return {
          ...state,
          agencies: action.data
        }
      case FETCH_ALL_BUSINESSES:
        return {
          ...state,
          businesses: action.data
        }
      case FETCH_ALL_WORKERS:
       return {
         ...state,
         workers: action.data
       }
      default:
        return state
    }
  }

  export default allUsersReducer