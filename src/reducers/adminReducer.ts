/**
 * @module reducer/user
 * @desc Redux user reducer
 */
 import { loadUser } from '../utils/storage'
 import { AdminAction } from '../types/state'
import { AdminActionType } from '../types/types'

 
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
 const adminReducer = (state = initialState, action: AdminAction) => {
   switch (action.type) {
       case AdminActionType.ADMINS_FETCH:
       return {
         ...state,
         data: state.data
       }
    
   }
 }
 
 export default adminReducer