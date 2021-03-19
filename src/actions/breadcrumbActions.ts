/**
 * @module actions/breadcrumb
 * @desc Redux breadcrumb actions
 */
import { BREADCRUMB_ADD, BREADCRUMB_SET } from "../types/state";
import { BreadcrumbLink } from "../types/types";

/**
 * @function
 * @desc Sets breadcrumb that is shown inside a {@link https://material-ui.com/components/breadcrumb/|MUI breadcrumb component}
 */
export const setBreadcrumb = (links: BreadcrumbLink[]) => async (dispatch: any) => {
  dispatch({ type: BREADCRUMB_SET, data: links})
}

/**
 * @function
 * @desc Adds link to the path.
 */
export const addToPath = (link: BreadcrumbLink) => async (dispatch: any) => {
  dispatch({ type: BREADCRUMB_ADD, data: link})
}