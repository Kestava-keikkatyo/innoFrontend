import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'
import AppNavigation from './NavigationComponents'

/**
 * Private route component. Renders the child components if the user is logged in
 * (and in an authorized role for the route). If the user isn't logged in they are
 * redirected to the landing page (login/signup). If the user is logged in but doesn't have
 * the correct role, they are redirected to the home page. Used inside Switch component that is imported from 'react-router-dom'.
 * @exports components/PrivateRoute
 * @param {Object} props
 * @param {(boolean | undefined)} props.loggedIn User's loggedIn status. Can be undefined if user isn't loggedIn.
 * @param {string} props.path Route's path
 * @param {node} props.children Components that the route renders.
 * @param {string} [props.role] Required if private route is role specific. User's current role.
 * @param {("worker"|"business"|"agency")} [props.roles] Required if private route is role specific.
 * Roles that are authorized.
 * @example
 * <Switch>
 *  <PrivateRoute path="/profile" loggedIn={ loggedIn }>
 *    <ProfilePage />
 *  </PrivateRoute>
 *  <PrivateRoute
 *    path="/workers"
 *    role={ data ? data.role : undefined }
 *    roles={ [Role.Business, Role.Agency] }
 *    loggedIn={ loggedIn }>
 *    <WorkersPage />
 *  </PrivateRoute>
 * </Switch>
 */
const PrivateRoute = ({ roles, children, ...rest }) => {
  const { loggedIn, data } = useSelector((state) => state.user)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!loggedIn || !data) {
          return <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        }

        if (data.role && roles.indexOf(data.role) === -1) {
          return <Redirect
            to={{
              pathname: '/home',
              state: { from: location }
            }}
          />
        }

        return (
          <AppNavigation>
            {children}
          </AppNavigation>
        )
      }}
    />
  )
}

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  role: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.oneOf(['worker', 'business', 'agency']))
}

PrivateRoute.defaultProps = {
  roles: ['worker', 'business', 'agency']
}

export default PrivateRoute