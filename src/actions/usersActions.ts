import usersService from '../services/usersService'
import { roles, severity, User, usersType } from '../types/types'
import { setAlert } from './alertActions'
import history from '../utils/history'
import fileService from '../services/fileService'
import { Dispatch } from 'redux'
import {
  UserAction,
  UserActionFailure,
  UserGetAll,
  UserGetAllSuccess,
  UserGetCurrentRequest,
  UserGetCurrentSuccess,
  UserUpdateStatus,
} from '../types/state'
import i18next from 'i18next'

/**
 * @function
 * @desc Fetches all users.
 */
export const fetchAllUsers =
  () => async (dispatch: Dispatch<UserGetAll | UserGetAllSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_ALL_REQUEST,
      })
      const res = await usersService.fetchAllUsers()
      dispatch({ type: usersType.USER_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch users!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches user by Id.
 */
export const fetchUserById =
  (id: string) =>
  async (dispatch: Dispatch<UserGetCurrentRequest | UserGetCurrentSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_CURRENT_REQUEST,
      })
      const res = await usersService.fetchUserById(id)
      dispatch({ type: usersType.USER_GET_CURRENT_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch the user: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches user by name.
 */
export const searchUserByName =
  (input: string) =>
  async (dispatch: Dispatch<UserGetCurrentRequest | UserGetCurrentSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_CURRENT_REQUEST,
      })
      const res = await usersService.searchUserByName(input)
      dispatch({ type: usersType.USER_GET_CURRENT_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch the user: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Delete user by Id
 */
export const deleteUser =
  (user: User) => async (dispatch: Dispatch<UserAction | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_DELETED_REQUEST,
        data: user,
      })
      const responseData = await usersService.deleteUser(user._id as string)
      dispatch({ type: usersType.USER_DELETED_SUCCESS, data: user })
      await setAlert('User deleted successfully!')
      console.log('deleted data', responseData)
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to delete the user: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches all workers.
 */
export const fetchAllWorkers =
  () => async (dispatch: Dispatch<UserGetAll | UserGetAllSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_ALL_REQUEST,
      })
      const res = await usersService.fetchAllWorkers()
      dispatch({ type: usersType.USER_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch workers!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches latest joined workers.
 */
export const fetchLatestJoinedWorkers =
  () => async (dispatch: Dispatch<UserGetAll | UserGetAllSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_ALL_REQUEST,
      })
      const res = await usersService.fetchLatestJoinedWorkers()
      dispatch({ type: usersType.USER_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch workers!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches all agencies.
 */
export const fetchAllAgencies =
  () => async (dispatch: Dispatch<UserGetAll | UserGetAllSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_ALL_REQUEST,
      })
      const res = await usersService.fetchAllAgencies()
      dispatch({ type: usersType.USER_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch agencies!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches all agencies.
 */
export const fetchAllBusinesses =
  () => async (dispatch: Dispatch<UserGetAll | UserGetAllSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_ALL_REQUEST,
      })
      const res = await usersService.fetchAllBusinesses()
      dispatch({ type: usersType.USER_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch businesses!: ' + e, severity.Error, 15)(dispatch)
    }
  }

  /**
   * @function
   * @desc Fetches all agencies.
   */
export const fetchAllBusinessesAndAgencies =
  () => async (dispatch: Dispatch<UserGetAll | UserGetAllSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_ALL_REQUEST,
      })
      const res = await usersService.fetchAllBusinessesAndAgencies()
      dispatch({ type: usersType.USER_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch all agencies or businesses!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches user's profile.
 */
export const showMyProfile =
  (id: string) =>
  async (dispatch: Dispatch<UserGetCurrentRequest | UserGetCurrentSuccess | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_GET_CURRENT_REQUEST,
      })
      const res = await usersService.showMyProfile(id)
      dispatch({ type: usersType.USER_GET_CURRENT_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to fetch user profile: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc update user.
 */
export const updateUser =
  (user: User, profilePhoto?: File, myProfile?: boolean) =>
  async (dispatch: Dispatch<UserAction | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_UPDATE_REQUEST,
        data: user,
      })

      if (profilePhoto) {
        const res = await fileService.postFile(profilePhoto)
        user.profilePicture = res.data.fileUrl
      } else if (profilePhoto === null) {
        user.profilePicture = ''
      }

      const res = await usersService.updateUser(user)
      dispatch({ type: usersType.USER_UPDATE_SUCCESS, data: res.data })

      if (myProfile) {
        history.push('/profile')
      } else {
        history.push('/users')
      }
    } catch (error) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: error as string,
      })
      await setAlert('Failed to update user: ' + error, severity.Error, 15)(dispatch)
    }
  }

/**
 * Create user
 * @function
 * @param {Object} user - Basic user information (name, email, password...)
 * @param {string} role - Admin
 */
export const createAdmin =
  (name: string, email: string, password: string) =>
  async (dispatch: Dispatch<UserAction | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_CREATED_REQUEST,
        data: { name, email, userType: roles.Admin, password, active: true },
      })

      const { data } = await usersService.createUser(name, email, 'admin', password)
      dispatch({
        type: usersType.USER_CREATED_SUCCESS,
        data,
      })
      await setAlert('user created successfully!')(dispatch)
      history.push('/userList')
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to create the user: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Update user's status by Id
 */
export const updateUSerStatus =
  (user: User, active: boolean) =>
  async (dispatch: Dispatch<UserUpdateStatus | UserActionFailure>) => {
    try {
      dispatch({
        type: usersType.USER_UPDATE_STATUS_REQUEST,
        data: { user, active },
      })
      const data = await usersService.setUserStatus(user._id as string, active)
      dispatch({
        type: usersType.USER_UPDATE_STATUS_SUCCESS,
        data: { user, active },
      })
      if (active === false) {
        await setAlert('User deactivated successfully!')(dispatch)
      } else await setAlert('User activated successfully!')(dispatch)
      console.log('deactivate data', data)
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert('Failed to deactivate the user: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Update user's password
 */
export const changePassword =
  (newPassword: string, currentPassword: string) =>
  async (dispatch: Dispatch<UserAction | UserActionFailure>) => {
    try {
      await usersService.changePassword(newPassword, currentPassword)
      await setAlert(i18next.t('change_password_password_was_changed_successfully'))(dispatch)
      history.push('/home')
    } catch (e) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: e as string,
      })
      await setAlert(
        i18next.t('change_password_failed_to_change_password') + e,
        severity.Error,
        15,
      )(dispatch)
    }
  }
