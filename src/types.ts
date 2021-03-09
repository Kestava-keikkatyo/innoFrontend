import { compose } from "redux";

export enum roles {
  Worker = 'worker',
  Agency = 'agency',
  Business = 'business'
}

export interface User {
  name: string,
  email: string,
}

export interface SignUpUser extends User {
  password: string
}

export interface Credentials {
  email: string,
  password: string
}

export interface Question {
  name: string,
  type: string,
  subTitle: string,
  scaleOptionTitleLeft: string,
  scaleOptionTitleCenter: string,
  scaleOptionTitleRight: string,
  minLen: number,
  maxLen: number,
  rowHeight: number,
  scale: number,
  optional: boolean,
  options: string[],
  comment: string
}

export interface FormComponentProps {
  question: Question
}

export interface PrivateRouteProps {
  loggedIn?: boolean,
  role?: string,
  roles?: roles[],
  children: React.ReactNode,
  path: string | string[] | undefined,
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const LOGIN = 'USER_LOGIN'
export const LOGOUT = 'USER_LOGOUT'
export const USER_REQUEST = 'USER_REQUEST'
export const USER_FAILURE = 'USER_FAILURE'
export const USER_PROFILE = 'USER_PROFILE'

interface UserProfileAction {
  type: typeof USER_PROFILE
  data: any
}

interface LoginAction {
  type: typeof LOGIN
  data: any
}

interface UserFailureAction {
  type: typeof USER_FAILURE
  data: any
}

interface UserRequestAction {
  type: typeof USER_REQUEST
  data: any
}

interface LogoutAction {
  type: typeof LOGOUT
  data: any
}

export type UserActionTypes = LoginAction | LogoutAction | UserProfileAction | UserRequestAction | UserFailureAction