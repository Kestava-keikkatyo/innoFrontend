/**
 * Redux breadcrumb reducer
 * @module
 */
const initialState = {
  links: [
    //{name: 'Home', link: 'home'}
  ]
}

/**
 * breadcrumb reducer that controls breadcrumb state
 * @function
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const breadcrumbReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state
      }
    case 'SET':
      return {
        ...state,
        links: action.data
      }
    case 'ADD':
      return {
        ...state,
        links: [...state.links, action.data]
      }
    default:
      return state
  }
}

export default breadcrumbReducer