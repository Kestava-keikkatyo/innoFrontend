import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { login, signup } from '../../actions/userActions';
import { fetchAgencyContacts, fetchBusinessContacts, fetchWorkerContacts } from '../../actions/usersActions';

import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import './landingPage.css';

import { Box, Button, Divider, Grid } from '@mui/material';
import { loadUser } from '../../utils/storage';

/**
 * @component
 * @desc The main landing page component.
 * Container for LogInForm and SignUpForm.
 */
const LoginPage = () => {
  const [logInForm, setLogInForm] = useState<any>(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const signupSubmit = ({ role, ...user }: any) => {
    dispatch(signup({ ...user, userType: role }));
  };

  const loginSubmit = async ({ ...credentials }: any) => {
    const { from }: any = location.state || { from: { pathname: '/home' } };
    await dispatch(login(credentials, from));
    switch(loadUser().role) {
      case "agency":
        dispatch(fetchAgencyContacts())
        break
      case "business":
        dispatch(fetchBusinessContacts())
        break
      case "worker":
        dispatch(fetchWorkerContacts())
        break
      case "admin":
        break
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={0}
      alignItems="center"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <Box display="flex" flexDirection="column" width="320px">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={logInForm}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames="fade"
          >
            <Box paddingBottom={2}>
              {logInForm ? (
                <SignUpForm handleSubmit={signupSubmit} />
              ) : (
                <LogInForm handleSubmit={loginSubmit} />
              )}
            </Box>
          </CSSTransition>
        </SwitchTransition>
        <Grid style={{ textAlign: 'center' }} container alignItems="center">
          <Grid item xs style={{ padding: '0 1em' }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setLogInForm(!logInForm)}
            >
              {logInForm ? t('log_in') : t('sign_up')}
            </Button>
          </Grid>
          <Divider flexItem orientation="vertical" />
          <Grid item xs style={{ padding: '0 1em' }}>
            <Button component={RouterLink} to="/">
              {t('main_page')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default LoginPage;