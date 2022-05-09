/**
 * @module reducer/users
 * @desc Redux users reducer
 */
import { UsersState, UsersAction } from "./../types/state";
import { usersType } from "../types/types";

const initialState: UsersState = {
  currentUser: undefined,
  loading: false,
  users: [],
};

/**
 * @function
 * @desc users reducer that controls users state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const usersReducer = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case usersType.USER_GETALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case usersType.USER_GETALL_SUCCESS: {
      return {
        ...state,
        users: action.data,
        loading: false,
      };
    }
    case usersType.USER_GETALL_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
        loading: false,
      };
    }
    case usersType.USER_CURRENT_REQUEST: {
      return {
        ...state,
        currentUser: action.data,
        loading: true,
      };
    }
    case usersType.USER_CURRENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.data,
      };
    }
    case usersType.USER_CURRENT_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    case usersType.USER_UPDATE_REQUEST: {
      return {
        ...state,
        currentUser: action.data,
        loading: true,
      };
    }
    case usersType.USER_UPDATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.data,
      };
    }
    case usersType.USER_UPDATE_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    case usersType.USER_CREATE_REQUEST: {
      return {
        ...state,
        currentUser: action.data,
        loading: true,
      };
    }
    case usersType.USER_CREATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: [...state.users, action.data],
      };
    }
    case usersType.USER_CREATE_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
