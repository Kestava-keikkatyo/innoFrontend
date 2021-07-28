import { FETCH_ALL_AGENCIES, FETCH_ALL_BUSINESSES, FETCH_ALL_WORKERS } from '../types/state'
import allUsersService from '../services/allUsersService'


/**
 * @function
 * @desc Fetches all agencies
 */
export const fetchAllAgencies = () => async (dispatch: any) => {
  const res = await allUsersService.getAllAgencies()
  dispatch({ type: FETCH_ALL_AGENCIES, data: res.data })
}

/**
 * @function
 * @desc Fetches all the businesses.
 */
export const fetchAllBusinesses = () => async (dispatch: any) => {
  const res = await allUsersService.getAllBusinesses()
  dispatch({ type: FETCH_ALL_BUSINESSES, data: res.data })
}

/**
 * @function
 * @desc Fetches all workers.
 */
export const fetchAllWorkers = () => async (dispatch: any) => {
  const res = await allUsersService.getAllWorkers()
  dispatch({ type: FETCH_ALL_WORKERS, data: res.data })
}

/**
 * @function
 * @desc Fetches agencies by name.
 */
export const fetchAgencies = (input: string) => async (dispatch: any) => {
    const res = await allUsersService.searchAgencies(input)
    dispatch({ type: FETCH_ALL_AGENCIES, data: res.data })
}

/**
 * @function
 * @desc Fetches buisnesses by name.
 */
export const fetchBusinesses = (input: string) => async (dispatch: any) => {
    const res = await allUsersService.searchBusinesses(input)
    dispatch({ type: FETCH_ALL_BUSINESSES, data: res.data })
}

/**
 * @function
 * @desc Fetches workers by name.
 */
export const fetchWorkers = (input: string) => async (dispatch: any) => {
    const res = await allUsersService.searchWorkers(input)
    dispatch({ type: FETCH_ALL_WORKERS, data: res.data })
}