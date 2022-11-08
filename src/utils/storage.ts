import { LoggedInUser } from '../types/state'
import jwt_decode from 'jwt-decode';
import { RentalWorkModel } from '../types/types';

/**
 * Stores, loads and removes user's information (email, name, token and role) from localStorage
 * @module utils/storage
 */
const userStorageKey = 'loggedInnoAppUser'
const rentalWorkModelStorageKey = 'loggedInnoAppRentalWorkModel'

/**
 * Stores user's information to localStorage
 * @function
 * @param {Object} user - user information containing (email, name, token and role)
 */
export const saveUser = (user: LoggedInUser) => {
  try {
    const serializedUser = JSON.stringify(user)
    localStorage.setItem(userStorageKey, serializedUser)
  } catch (err) {
    console.error('storage print\n', err)
  }
}

export const saveRentalWorkModel = (rentalWorkModel: RentalWorkModel) => {
  try {
    const serializedRentalWorkModel = JSON.stringify(rentalWorkModel)
    localStorage.setItem(rentalWorkModelStorageKey, serializedRentalWorkModel)
  } catch (err) {
    console.error('storage print\n', err)
  }
}

/**
 * Loads user's information from localStorage
 * @function
 */
export const loadUser = () => {
  try {
    const serializedUser = localStorage.getItem(userStorageKey)
    if (serializedUser === null) {
      return undefined
    }
    return JSON.parse(serializedUser)
  } catch (err) {
    localStorage.removeItem(userStorageKey)
    console.error('storage print\n', err)
    return undefined
  }
}

export const loadRentalWorkModel = () => {
  try {
    const serializedRentalWorkModel = localStorage.getItem(rentalWorkModelStorageKey)
    if (serializedRentalWorkModel === null) {
      return undefined
    }
    return JSON.parse(serializedRentalWorkModel)
  } catch (err) {
    localStorage.removeItem(rentalWorkModelStorageKey)
    console.error('storage print\n', err)
    return undefined
  }
}


export const getUserId = () => {
  return loadUser()._id
}

/**
 * Removes user's information from localStorage.
 * Used for loggin out user
 * @function
 */
export const logoutUser = () => {
  localStorage.removeItem(userStorageKey)
  localStorage.removeItem(rentalWorkModelStorageKey)
}