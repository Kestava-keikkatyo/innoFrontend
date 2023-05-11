import { LoggedInUser } from "../types/state"
//import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import { Token } from "../types/types";

/**
 * Stores, loads and removes user's information (email, name, token and role) from localStorage
 * @module utils/storage
 */
const storageKey = 'loggedInnoAppUser'
const storageContactsKey = 'contacts'
const resetPasswordToken = 'token'

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
 * Stores token to localStorage
 * @function
 * @param {Object} token - server given token
 */
export const saveToken = (token: Token) => {
  try {
    const serializedUser = JSON.stringify(token)
    localStorage.setItem(resetPasswordToken, serializedUser)
  } catch (err) {
    console.error('storage print\n', err)
  }
}

/**
 * Inserts new user information to localStorage
 * @function
 * @param {Object} data - user information containing (email, name, token and role)
 */
export const insertUserData = (user: string) => {
  try {
    const serializedUser = JSON.stringify(user)
    localStorage.setItem(storageKey, serializedUser)
  } catch (err) {
    console.error('storage print\n', err)
  }
}

/**
 * Loads user's information
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

/**
 * Loads token
 * @function
 */
export const loadToken = () => {
  try {
    const serializedUser = localStorage.getItem(resetPasswordToken)
    if (serializedUser === null) {
      return undefined
    }
    return JSON.parse(serializedUser)
  } catch (err) {
    localStorage.removeItem(resetPasswordToken)
    console.error('storage print\n', err)
    return undefined
  }
}

/**
 * Inserts data of user's contacts into localStorage
 * @function
 * @param {Object} data - information to be added in stringified JSON format
 */
export const insertContactData = (data: any) => {
  try {
    let contactData = loadContacts()
    const strData = JSON.stringify(data)
    const contacts = JSON.parse(strData)

    if (!contactData) {
      localStorage.setItem(storageContactsKey, JSON.stringify(contacts))
      return
    }
    else if (!(contactData instanceof Array)) {
      contactData = [contactData];
    }

    contactData.push(contacts)
    localStorage.setItem(storageContactsKey, JSON.stringify(contactData))

  } catch (err) {
    console.error('storage print\n', err)
  }
}

/**
 * Removes a single contact from localStorage
 * @param id id of the User to be removed
 */
export const removeContactDataById = (id: string) => {
  const contacts = loadContacts()
  let index = contacts.indexOf(id)
  console.log(index)
  console.log(contacts)
  // if contact is found
  if (index !== -1) {
    contacts.splice(index, 1)
    console.log(contacts)
    localStorage.removeItem(storageContactsKey)
    localStorage.setItem(storageContactsKey, contacts)
  }
}

export const removeContactData = () => {
  localStorage.removeItem(storageContactsKey)
}

/**
 * Loads user's contact information
 * @function
 */
export const loadContacts = () => {
  try {
    const serializedContacts = localStorage.getItem(storageContactsKey)
    if (serializedContacts === null) {
      return undefined
    }
    return JSON.parse(serializedContacts)
  } catch (err) {
    localStorage.removeItem(storageContactsKey)
    console.error('storage print\n', err)
    return undefined
  }
}


export const getUserId = () => {

  // token
  const token: any = loadUser().token
  if (!token) {
    return null;
  }
  // decoded token
  // const decodedToken: any = jwt.decode(token)
  const decodedToken: any = jwt_decode(token)
  return decodedToken.id
}

/**
 * Removes user's information from localStorage.
 * Used for loggin out user
 * @function
 */
export const logoutUser = () => {
  localStorage.removeItem(storageKey)
  localStorage.removeItem(storageContactsKey)
}

/**
 * Removes token generated for password reset from localStorage.
 * @function
 */
export const removeToken = () => {
  localStorage.removeItem(resetPasswordToken)
}