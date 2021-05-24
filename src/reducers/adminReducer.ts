/**
 * @module reducer/user
 * @desc Redux user reducer
 */
 import { loadUser } from '../utils/storage'
 import { AdminActionTypes, AGENCY_FETCH, AGENCY_UPDATE,USERCOMPANY_FETCH, USERCOMPANY_UPDATE ,WORKERS_FETCH, WORKER_UPDATE } from '../types/state'
 
 const userData = loadUser()
 const initialState = { 
   loggedIn: !!userData,
   data: userData || {} 
 }
 
 /**
  * @function
  * @desc user reducer that controls user state
  * @param {Object} state - current state
  * @param {UserActionTypes} action - dispatched action
  */
 const adminReducer = (state = initialState, action: AdminActionTypes) => {
   switch (action.type) {
       case WORKERS_FETCH:
       return {
         ...state,
         data: state.data
       }
    
   }
 }
 
 export default adminReducer