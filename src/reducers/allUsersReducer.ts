import {
  SET_ALL_AGENCIES,
  SET_ALL_BUSINESSES,
  SET_ALL_WORKERS,
  SET_AGENCY_WORKERS,
  AllUsersState,
  AllUsersActionTypes,
  USER_DELETED,
  USER_DEACTIVATED,
} from "../types/state"
import { roles } from "../types/types"

const initialState: AllUsersState = {
  agencies: [],
  businesses: [],
  workers: [],
  agencyWorkers: [],
  admins: []
}


const allUsersReducer = (state: AllUsersState = initialState, action: AllUsersActionTypes) => {
  let nextState = {...state};
  switch (action.type) {
    case SET_ALL_AGENCIES:
      return {
        ...state,
        agencies: action.data
      }
    case SET_ALL_BUSINESSES:
      return {
        ...state,
        businesses: action.data
      }
    case SET_ALL_WORKERS:
      return {
        ...state,
        workers: action.data
      }
    case SET_AGENCY_WORKERS:
      return {
        ...state,
        agencyWorkers: action.data
      }
    case USER_DELETED:
      switch(action.data.userType.toLowerCase()){
        case roles.Worker: 
          nextState.workers = state.workers.filter(u => u._id !== action.data.id);
          break;
        case roles.Business:
          nextState.businesses = state.businesses.filter(u => u._id !== action.data.id);
          break;  
        case roles.Agency: 
          nextState.agencies = state.agencies.filter(u => u._id !== action.data.id);
          break;
        case roles.Admin: 
          nextState.admins = state.admins.filter(u => u._id !== action.data.id);
          break;
      }
      return nextState
    case USER_DEACTIVATED:
      switch(action.data.userType.toLowerCase()){
        case roles.Worker: 
        nextState.workers = state.workers.map(u => {
          if(u._id === action.data.id) {
            const updatedItem = {
              ...u,
              active: false,
            };
            return updatedItem;
          }
          return u;
        });
        break;
        case roles.Business:
          nextState.businesses = state.businesses.map(u => {
            if(u._id === action.data.id) {
              const updatedItem = {
                ...u,
                active: false,
              };
              return updatedItem;
            }
            return u;
          });
          break;  
        case roles.Agency: 
        nextState.agencies = state.agencies.map(u => {
          if(u._id === action.data.id) {
            const updatedItem = {
              ...u,
              active: false,
            };
            return updatedItem;
          }
          return u;
        });
          break;
        case roles.Admin: 
        nextState.admins = state.admins.map(u => {
          if(u._id === action.data.id) {
            const updatedItem = {
              ...u,
              active: false,
            };
            return updatedItem;
          }
          return u;
        });
      }
     return nextState  
    default:
      return state
  }
}

export default allUsersReducer