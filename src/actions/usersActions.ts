import usersService from "../services/usersService";
import { severity, usersType } from "../types/types";
import { setAlert } from "./alertActions";

/**
 * @function
 * @desc Fetches all users.
 */
export const fetchAllUsers = () => async (dispatch: any) => {
  try {
    dispatch({
      type: usersType.USER_GETALL_REQUEST,
    });
    const res = await usersService.fetchAllUsers();
    dispatch({ type: usersType.USER_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: usersType.USER_GETALL_FAILURE,
      data: error && error.message,
    });
  }
};

/**
 * @function
 * @desc Fetches jod by Id.
 */
export const fetchUserById = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: usersType.USER_CURRENT_REQUEST,
    });
    const res = await usersService.fetchUserById(id);
    dispatch({ type: usersType.USER_CURRENT_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: usersType.USER_CURRENT_FAILURE,
      data: error,
    });
    dispatch(
      setAlert("Failed to fetch the user: " + error, severity.Error, 15)
    );
  }
};

/**
 * @function
 * @desc Delete job by Id
 */
export const DeleteUser = (id: string) => async (dispatch: any) => {
  try {
    const data = await usersService.deleteUser(id);
    dispatch({ type: usersType.USER_DELETE_SUCCCESS, data: { id } });
    console.log("deleted data", data);
  } catch (error) {
    dispatch({
      type: usersType.USER_DELETE_FAILURE,
      data: error && error.message,
    });
  }
};

/**
 * @function
 * @desc Fetches all workers.
 */
export const fetchAllWorkers = () => async (dispatch: any) => {
  try {
    dispatch({
      type: usersType.USER_GETALL_REQUEST,
    });
    const res = await usersService.fetchAllWorkers();
    dispatch({ type: usersType.USER_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: usersType.USER_GETALL_FAILURE,
      data: error && error.message,
    });
  }
};

/**
 * @function
 * @desc Fetches all agencies.
 */
export const fetchAllAgencies = () => async (dispatch: any) => {
  try {
    dispatch({
      type: usersType.USER_GETALL_REQUEST,
    });
    const res = await usersService.fetchAllAgencies();
    dispatch({ type: usersType.USER_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: usersType.USER_GETALL_FAILURE,
      data: error && error.message,
    });
  }
};

/**
 * @function
 * @desc Fetches user's profile.
 */
export const showMyProfile = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: usersType.USER_CURRENT_REQUEST,
    });
    const res = await usersService.showMyProfile(id);
    dispatch({ type: usersType.USER_CURRENT_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: usersType.USER_CURRENT_FAILURE,
      data: error,
    });
    dispatch(
      setAlert("Failed to fetch user's profile: " + error, severity.Error, 15)
    );
  }
};
