import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { login } from '../../actions/userActions';

import AdminLogInForm from './AdminLogInForm';
import '../LoginPage/landingPage.css';

import { Box, Button, Divider, Grid } from '@material-ui/core';

/**
 * @component
 * @desc The main landing page component.
 * Container for AdminLogInForm.
 */
const AdminLoginPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const loginSubmit = ({ role, ...credentials }: any) => {
    const { from }: any = location.state || { from: { pathname: '/home' } };
    dispatch(login(credentials, role, from));
  };

  return (
    <Grid
      container
      justify="center"
      spacing={0}
      alignItems="center"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <Box display="flex" flexDirection="column" width="320px">
        <SwitchTransition mode="out-in">
          <CSSTransition
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames="fade"
          >
            <Box paddingBottom={2}>
                <AdminLogInForm handleSubmit={loginSubmit} />
            </Box>
          </CSSTransition>
        </SwitchTransition>
      </Box>
    </Grid>
  );
};

export default AdminLoginPage;
