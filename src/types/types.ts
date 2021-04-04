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

export enum questionTypes {
  Comment = 'comment',
  Text = 'text',
  Textarea = 'textarea',
  CheckBox = 'checkbox',
  CheckboxGroup = 'checkbox_group',
  RadiobuttonGroup = 'radiobutton_group',
  RadiobuttonGroupHorizontal = 'radiobutton_group_horizontal',
  ContactInformation = 'contact_information',
  DatePicker = 'date_picker',
  TimePicker = 'time_picker'
}

/**
 * @interface
 */
export interface Question {
  title: string
  ordering?: number
  questionType: string
  subTitle: string
  scaleOptionTitleLeft: string
  scaleOptionTitleCenter: string
  scaleOptionTitleRight: string
  answerMinLength: number
  answerMaxLength: number
  rows: number
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
  isPublic: boolean
  tags: string[]
  questions: Array<Question>
}