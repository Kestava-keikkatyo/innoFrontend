import {
  SET_ALL_AGENCIES,
  SET_ALL_BUSINESSES,
  SET_ALL_WORKERS,
  SET_AGENCY_WORKERS,
  AllUsersState,
  AllUsersActionTypes,
} from '../types/state'

const initialState: AllUsersState = {
  agencies: [],
  businesses: [],
  workers: [],
  agencyWorkers: [],
  admins: [],
}

const allUsersReducer = (state: AllUsersState = initialState, action: AllUsersActionTypes) => {
  switch (action.type) {
    case SET_ALL_AGENCIES:
      return {
        ...state,
        agencies: action.data,
      }
    case SET_ALL_BUSINESSES:
      return {
        ...state,
        businesses: action.data,
      }
    case SET_ALL_WORKERS:
      return {
        ...state,
        workers: action.data,
      }
    case SET_AGENCY_WORKERS:
      return {
        ...state,
        agencyWorkers: action.data,
      }
    default:
      return state
  }
}

export default allUsersReducer
