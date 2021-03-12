import { RemoveFromQueueTwoTone } from "@material-ui/icons"
import { compose } from "redux"

export enum roles {
  Worker = "worker",
  Agency = "agency",
  Business = "business",
}

export enum fontSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum inputTypes {
  number = "number",
  text = "text",
  date = "date",
}

export interface User {
  name: string
  email: string
  type: roles.Agency | roles.Business | roles.Business
}

export interface SignUpUser extends User {
  password: string
}

export interface LoggedInUser extends User {
  token: string
}

export interface Credentials {
  email: string
  password: string
}

export interface Question {
  name: string
  type: string
  subTitle: string
  scaleOptionTitleLeft: string
  scaleOptionTitleCenter: string
  scaleOptionTitleRight: string
  minLen: number
  maxLen: number
  rowHeight: number
  scale: number
  optional: boolean
  options: string[]
  comment: string
}

export interface FormComponentProps {
  question: Question
}

export interface PrivateRouteProps {
  loggedIn?: boolean
  role?: string
  roles?: roles[]
  children: React.ReactNode
  path: string | string[] | undefined
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export interface FormQuestion {
  question: string
  options: any
}

export interface Form {
  title: string
  description: string
  questions: Array<FormQuestion>
}

export const SET_CURRENT_FORM = "SET_CURRENT_FORM"
export const UPDATE_TITLE = "UPDATE_TITLE"
export const SET_DESCRIPTION = "SET_DESCRIPTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"
export const UPDATE_QUESTION_OPTION = "UPDATE_QUESTION_OPTION"
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const REMOVE_OPTION = "REMOVE_OPTION"
export const SET_QUESTIONS = "SET_QUESTIONS"
export const CLEAR_CURRENT_FORM = "CLEAR_CURRENT_FORM"

interface SetCurrentFormAction {
  type: typeof SET_CURRENT_FORM
  data: any
}

interface UpdateTitleAction {
  type: typeof UPDATE_TITLE
  data: any
}

interface SetDescriptionAction {
  type: typeof SET_DESCRIPTION
  data: any
}

interface AddQuestionAction {
  type: typeof ADD_QUESTION
  data: any
}

interface UpdateQuestionAction {
  type: typeof UPDATE_QUESTION
  data: any
}

interface UpdateQuestionOptionAction {
  type: typeof UPDATE_QUESTION_OPTION
  data: any
}

interface RemoveQuestionAction {
  type: typeof REMOVE_QUESTION
  data: any
}

interface RemoveOptionAction {
  type: typeof REMOVE_OPTION
  data: any
}

interface SetQuestionsAction {
  type: typeof SET_QUESTIONS
  data: any
}

interface ClearCurrenFormAction {
  type: typeof CLEAR_CURRENT_FORM
  data: any
}

export type FormActionTypes =
  | SetCurrentFormAction
  | UpdateTitleAction
  | SetDescriptionAction
  | AddQuestionAction
  | UpdateQuestionAction
  | UpdateQuestionOptionAction
  | RemoveQuestionAction
  | RemoveOptionAction
  | SetQuestionsAction
  | ClearCurrenFormAction

export const LOGIN = "USER_LOGIN"
export const LOGOUT = "USER_LOGOUT"
export const USER_REQUEST = "USER_REQUEST"
export const USER_FAILURE = "USER_FAILURE"
export const USER_PROFILE = "USER_PROFILE"

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

export type UserActionTypes =
  | LoginAction
  | LogoutAction
  | UserProfileAction
  | UserRequestAction
  | UserFailureAction
