import { compose } from "redux"

export enum roles {
  Worker = "worker",
  Agency = "agency",
  Business = "business",
}

export type businessContractType = roles.Business | roles.Worker

export enum severity {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Success = 'success'
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

export interface BreadcrumbLink {
  name: string,
  link: string
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

export interface Feeling {
  value: 0 | 1 | 2 | 3,
  note: string,
  isPrivate: boolean
}

/**
 * @interface
 */
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