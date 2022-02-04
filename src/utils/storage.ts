import { LoggedInUser } from "../types/state"
import jwt from 'jsonwebtoken';
//import jwt_decode from 'jwt-decode';

/**
 * Stores, loads and removes user's information (email, name, token and role) from localStorage
 * @module utils/storage
 */
const storageKey = 'loggedInnoAppUser'

/**
 * Stores user's information to localStorage
 * @function
 * @param {Object} user - user information containing (email, name, token and role)
 */
export const saveUser = (user: LoggedInUser) => {
  try {
    const serializedUser = JSON.stringify(user)
    localStorage.setItem(storageKey, serializedUser)
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
    const serializedUser = localStorage.getItem(storageKey)
    if (serializedUser === null) {
      return undefined
    }
    return JSON.parse(serializedUser)
  } catch (err) {
    localStorage.removeItem(storageKey)
    console.error('storage print\n', err)
    return undefined
  }
}


export const getUserId = () => {

  // token
  const token :any = loadUser().token
  if(!token){
    return null;
  }
  // decoded token
  const decodedToken: any = jwt.decode(token)
  //const decodedToken: any = jwt_decode(token)
  return decodedToken.id
}

/**
 * Removes user's information from localStorage.
 * Used for loggin out user
 * @function
 */
export const logoutUser = () =>
  localStorage.removeItem(storageKey)