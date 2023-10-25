import { ReactNode } from 'react'
import { Question, roles } from './types'

/**
 * @interface
 */
export interface PieChartProps {
  /**
   * Contains data to display in PieChart.
   */
  datasets: any
  /**
   * Child components that the component renders inside chart.
   */
  children: ReactNode
}

/**
 * @interface
 */
export interface GridFormPreviewProps {
  /**
   * Title to display.
   */
  formTitle: string
  /**
   * Description to display.
   */
  formDesc: string
  /** On click function */
  formId: string
}

export interface FormProps {
  currentForm: object
}

/**
 * @interface
 * Private routes props.
 */
export interface PrivateRouteProps {
  /**
   * List of roles (worker, business, agency). Required if private route is role specific.
   */
  roles?: roles[]
  /**
   * Child components that the route renders.
   */
  children: React.ReactNode
  /**
   * Private routes path name.
   */
  path: string
}

/**
 * @interface
 */
export interface FormComponentProps {
  /**
   * A question object
   * @see Question
   */
  question: Question
}

/**
 * @interface
 */
export interface FormHeaderProps {
  /**
   * Title of the form.
   */
  title: string
  /**
   * Description of the form.
   */
  description: string
}
