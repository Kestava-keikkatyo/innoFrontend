import usersService from "../services/usersService";
import { severity, UserInformation, usersType } from "../types/types";
import { setAlert } from "./alertActions";
import history from "../utils/history";
import fileService from "../services/fileService";

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
  } catch (e) {
    dispatch({
      type: usersType.USER_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to fetch users!: " + e, severity.Error, 15));
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
      type: usersType.USER_ACTION_FAILURE,
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
export const deleteUser = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: usersType.USER_DELETED_REQUEST,
    });
    const data = await usersService.deleteUser(id);
    dispatch({ type: usersType.USER_DELETED_SUCCESS, data: { id } });
    console.log("deleted data", data);
  } catch (e) {
    dispatch({
      type: usersType.USER_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to delete the user: " + e, severity.Error, 15));
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
  } catch (e) {
    dispatch({
      type: usersType.USER_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to fetch workers!: " + e, severity.Error, 15));
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
  } catch (e) {
    dispatch({
      type: usersType.USER_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to fetch agencies!: " + e, severity.Error, 15));
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
      type: usersType.USER_ACTION_FAILURE,
      data: error,
    });
    dispatch(
      setAlert("Failed to fetch user's profile: " + error, severity.Error, 15)
    );
  }
};

/**
 * @function
 * @desc update user.
 */
export const updateUser =
  (
    userId: string,
    userInformation: UserInformation,
    profilePhoto?: File,
    myProfile?: boolean
  ) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: usersType.USER_UPDATE_REQUEST,
      });
      console.log("stop here");
      if (profilePhoto) {
        const res = await fileService.postFile(profilePhoto as any);
        userInformation.profilePicture = res.data.fileUrl;
      } else if (profilePhoto === null) {
        userInformation.profilePicture = "";
      }

      const res = await usersService.updateUser(userId, userInformation);
      dispatch({ type: usersType.USER_UPDATE_SUCCESS, data: res.data });

      if (myProfile) {
        history.push("/profile");
      } else {
        history.push("/users");
      }
    } catch (error) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: error,
      });
      dispatch(setAlert("Failed to update user: " + error, severity.Error, 15));
    }
  };

/**
 * Create user
 * @function
 * @param {Object} user - Basic user information (name, email, password...)
 * @param {string} role - Admin
 */
export const createAdmin =
  (name: string, email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch({
        type: usersType.USER_CREATE_REQUEST,
        data: { name, email, userType: "admin", password },
      });

      const { data } = await usersService.createUser(
        name,
        email,
        "admin",
        password
      );
      dispatch({
        type: usersType.USER_CREATE_SUCCESS,
        data,
      });
      dispatch(setAlert("user created successfully!"));
      console.log("Created user", data);
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e,
      });
      dispatch(setAlert("Failed to create the user: " + e, severity.Error, 15));
    }
  };

/**
 * @function
 * @desc Update user's status by Id
 */
export const updateUSerStatus =
  (id: string, active: boolean) => async (dispatch: any) => {
    try {
      dispatch({
        type: usersType.USER_UPDATE_STATUS_REQUEST,
      });
      const data = await usersService.setUserStatus(id, active);
      dispatch({
        type: usersType.USER_UPDATE_STATUS_SUCCESS,
        data: { id, active },
      });
      console.log("deactivate data", data);
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e,
      });
      dispatch(
        setAlert("Failed to deactivate the user: " + e, severity.Error, 15)
      );
    }
  };
