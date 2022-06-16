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
    case usersType.USER_GET_ALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case usersType.USER_GET_ALL_SUCCESS: {
      return {
        ...state,
        users: action.data,
        loading: false,
      };
    }
    case usersType.USER_ACTION_FAILURE: {
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
    case usersType.USER_CREATED_REQUEST: {
      return {
        ...state,
        currentUser: action.data,
        loading: true,
      };
    }
    case usersType.USER_CREATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: [...state.users, action.data],
      };
    }
    case usersType.USER_DELETED_REQUEST: {
      return {
        ...state,
        currentUser: action.data,
        loading: true,
      };
    }
    case usersType.USER_DELETED_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item._id !== action.data._id),
      };
    }
    case usersType.USER_UPDATE_STATUS_REQUEST: {
      return {
        ...state,
        currentUser: action.data,
        loading: true,
      };
    }
    case usersType.USER_UPDATE_STATUS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: state.users.map((u) => {
          if (u._id === action.data.id) {
            const updatedItem = {
              ...u,
              active: action.data.active,
            };
            return updatedItem;
          }
          return u;
        }),
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
