import { AgencyState, A_FETCH, AgencyActionTypes } from "../types/state"

const initialState: AgencyState = {
    agencies: [],
  }


const agencyReducer = (state: AgencyState = initialState, action: AgencyActionTypes) => {
    switch (action.type) {
      case A_FETCH:
        return {
          ...state,
          agencies: action.data
        }
      default:
        return state
    }
  }
  
  export default agencyReducer