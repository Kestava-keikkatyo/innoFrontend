/**
 * Redux breadcrumb actions
 * @module actions/breadcrumbActions
 */

import { BREADCRUMB_ADD, BREADCRUMB_SET } from "../types/state";
import { BreadcrumbLink } from "../types/types";

/**
 * Sets breadcrumb that is shown inside a {@link https://material-ui.com/components/breadcrumb/|MUI breadcrumb component}
 * @function
 */
export const setBreadcrumb = (links: BreadcrumbLink[]) => async (dispatch: any) => {
  console.log(links);
  
  dispatch({ type: BREADCRUMB_SET, data: links})
}

export const addToPath = (link: BreadcrumbLink) => async (dispatch: any) => {
  dispatch({ type: BREADCRUMB_ADD, data: link})
}