import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import AppNavigation from './NavigationComponents'
import { setBreadcrumb } from '../actions/breadcrumbActions'
import pathConverter from '../utils/pathConverter'
import { roles } from '../types/types'
import { PrivateRouteProps } from '../types/props'
import { IRootState } from '../utils/store'
import { me } from '../actions/userActions'

/**
 * @component
 * @desc Private route component. Renders the child components if the user is logged in
 * (and in an authorized role for the route). If the user isn't logged in they are
 * redirected to the landing page (login/signup). If the user is logged in but doesn't have
 * the correct role, they are redirected to the home page. Used inside Switch component that is imported from 'react-router-dom'.
 * @param {PrivateRouteProps} props
 * @param {string} props.path Route's path
 * @param {node} props.children Components that the route renders.
 * @param {roles[]} [props.roles] Required if private route is role specific.
 * @example
 * <Switch>
 *  <PrivateRoute path="/profile" loggedIn={ loggedIn }>
 *    <ProfilePage />
 *  </PrivateRoute>
 *  <PrivateRoute
 *    path="/workers"
 *    roles={ [Role.Business, Role.Agency] }>
 *    <WorkersPage />
 *  </PrivateRoute>
 * </Switch>
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles, children, path, ...rest }) => {
  const { loggedIn, data } = useSelector((state: IRootState) => state.user)
  const dispatch = useDispatch()

  // Can be used as a user validation (validates token and user role)
  // Run if user has a role
  // Should be switched out when there is actual data to be retrieved
  useEffect(() => {
    if (data.role) {
      dispatch(me())
    }
  }, [dispatch, data.role])

  useEffect(() => {
    dispatch(setBreadcrumb(pathConverter(path)))
  }, [dispatch, path])
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) => {
        if (!loggedIn || !data) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
        /*
         Redirect the user to home page if he does not have
        the right to access a specific route.
        For example agency should not access '/work-overview' route.
        */
        if (!roles?.includes(data.role)) {
          return (
            <Redirect
              to={{
                pathname: '/home',
                state: { form: location },
              }}
            />
          )
        }
        return <AppNavigation>{children}</AppNavigation>
      }}
    />
  )
}

PrivateRoute.defaultProps = {
  roles: [roles.Worker, roles.Business, roles.Agency, roles.Admin],
}

export default PrivateRoute
