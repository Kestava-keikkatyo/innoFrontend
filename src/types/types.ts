import { compose } from "redux";

export enum roles {
  Worker = 'worker',
  Agency = 'agency',
  Business = 'business'
}

export type businessContractType = roles.Business | roles.Worker

export enum severity {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Success = 'success'
}

export enum fontSizes {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export enum inputTypes {
  number = 'number',
  text = 'text',
  date = 'date'
}

export interface BreadcrumbLink {
  name: string,
  link: string
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