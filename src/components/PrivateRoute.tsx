import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import AppNavigation from './NavigationComponents'
import ActiveLastBreadcrumb from './ActiveLastBreadcrumb'
import { setBreadcrumb } from '../actions/breadcrumbActions'
import pathConverter from '../utils/pathConverter'
import { PrivateRouteProps, roles } from '../types'

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
const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles, children, path, ...rest }) => {
  const { loggedIn, data } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(setBreadcrumb(pathConverter(path)))
  }, [dispatch, path])
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) => {
        if (!loggedIn || !data) {
          return <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        }

        /**
         * @todo refactor this
         */
        //data.role && roles.indexOf(data.role) === -1
        if (!data.role) {
          return <Redirect
            to={{
              pathname: '/home',
              state: { from: location }
            }}
          />
        }

        return (
          <AppNavigation>
            <ActiveLastBreadcrumb />
            {children}
          </AppNavigation>
        )
      }}
    />
  )
}

PrivateRoute.defaultProps = {
  roles: [roles.Worker, roles.Business, roles.Agency]
}

export default PrivateRoute