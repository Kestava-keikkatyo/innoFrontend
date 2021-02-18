/**
 * Redux breadcrumb actions
 * @module actions/breadcrumbActions
 */

/**
 * Sets breadcrumb that is shown inside a {@link https://material-ui.com/components/breadcrumb/|MUI breadcrumb component}
 * @function
 */
export const setTitle = (title) => async (dispatch) => {
  dispatch({ type: "UPDATE_TITLE", data: title })
}

export const addQuestion = (question) => async (dispatch) => {
  console.log(question);
  dispatch({ type: "ADD_QUESTION", data: question })
}
