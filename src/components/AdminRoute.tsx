import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBreadcrumb } from '../actions/breadcrumbActions';
import pathConverter from '../utils/pathConverter';
import { roles } from '../types/types';
import { PrivateRouteProps } from '../types/props';
import { IRootState } from '../utils/store';
import AppNavigation from './NavigationComponents';

const AdminRoute: React.FC<PrivateRouteProps> = ({
  roles,
  children,
  path,
  ...rest
}) => {
  const { loggedIn, data } = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBreadcrumb(pathConverter(path)));
  }, [dispatch, path]);
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) => {
        if (!loggedIn || !data) {
          return (
            <Redirect
              to={{
                pathname: '/adminloginpage',
                state: { from: location },
              }}
            />
          );
        }
        if (!roles?.includes(data.role)) {
          return (
            <Redirect
              to={{
                pathname: '/home',
                state: { form: location },
              }}
            />
          );
        }
        return <AppNavigation>{children}</AppNavigation>;
      }}
    />
  );
};

AdminRoute.defaultProps = {
  roles: [roles.Admin],
};



export default AdminRoute;
