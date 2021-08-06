
import {
  SET_ALL_AGENCIES,
  SET_ALL_BUSINESSES,
  SET_ALL_WORKERS,
  SET_AGENCY_WORKERS
} from '../types/state'
import allUsersService from '../services/allUsersService'


/**
 * @function
 * @desc Fetches all agencies
 */
export const fetchAllAgencies = () => async (dispatch: any) => {
  const res = await allUsersService.getAllAgencies()
  dispatch({ type: SET_ALL_AGENCIES, data: res.data })
}

/**
 * @function
 * @desc Fetches all the businesses.
 */
export const fetchAllBusinesses = () => async (dispatch: any) => {
  const res = await allUsersService.getAllBusinesses()
  dispatch({ type: SET_ALL_BUSINESSES, data: res.data })
}

/**
 * @function
 * @desc Fetches all workers.
 */
export const fetchAllWorkers = () => async (dispatch: any) => {
  const res = await allUsersService.getAllWorkers()
  dispatch({ type: SET_ALL_WORKERS, data: res.data })
}

/**
 * @function
 * @desc Fetches agency workers.
 */
export const fetchAgencyWorkers = () => async (dispatch: any) => {
  const res = await allUsersService.getAgencyWorkers()
  dispatch({ type: SET_AGENCY_WORKERS, data: res.data })
}

/**
 * @function
 * @desc Fetches agencies by name.
 */
export const fetchAgencies = (input: string) => async (dispatch: any) => {
  const res = await allUsersService.searchAgencies(input)
  dispatch({ type: SET_ALL_AGENCIES, data: res.data })
}

/**
 * @function
 * @desc Fetches buisnesses by name.
 */
export const fetchBusinesses = (input: string) => async (dispatch: any) => {
  const res = await allUsersService.searchBusinesses(input)
  dispatch({ type: SET_ALL_BUSINESSES, data: res.data })
}

/**
 * @function
 * @desc Fetches workers by name.
 */
export const fetchWorkers = (input: string) => async (dispatch: any) => {
  const res = await allUsersService.searchWorkers(input)
  dispatch({ type: SET_ALL_WORKERS, data: res.data })
}