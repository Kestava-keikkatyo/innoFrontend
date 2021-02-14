/**
 * Redux breadcrumb actions
 * @module actions/breadcrumbActions
 */

/**
 * Sets breadcrumb that is shown inside a {@link https://material-ui.com/components/breadcrumb/|MUI breadcrumb component}
 * @function
 */
export const setBreadcrumb = (links) => async (dispatch) => {
  dispatch({ type: 'SET', data: links})
}

export const addToPath = (link) => async (dispatch) => {
  dispatch({ type: 'ADD', data: link})
}