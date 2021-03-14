import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { login, signup } from '../../actions/userActions'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import './landingPage.css'

import { Box, Button, Divider, Grid } from '@material-ui/core'

/**
 * The main landing page component.
 * Container for LogInForm and SignUpForm.
 * @exports components/LandingPage/LandingPage
 */
const LandingPage = () => {
  const [logInForm, setLogInForm] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const loggingIn = useSelector((state: any) => state.user.loading)
  const { t } = useTranslation()

  const signupSubmit = ({ role, ...user }: any) => {
    dispatch(signup(user, role))
  }

  const loginSubmit = ({ role, ...credentials }: any) => {
    const { from }: any = location.state || { from: { pathname: '/home' } }
    dispatch(login(credentials, role, from))
  }

  return (
    <Grid
      container
      justify="center"
      spacing={0}
      alignItems="center"
      style={{ minHeight: 'calc(100vh - 64px)' }}>
      <Box
        display="flex"
        flexDirection="column"
        width="320px">
        <SwitchTransition mode='out-in'>
          <CSSTransition
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false)
            }}
            classNames='fade'>
            <Box paddingBottom={2}>
              {logInForm ?
                <SignUpForm loggingIn={loggingIn} handleSubmit={signupSubmit} /> :
                <LogInForm loggingIn={loggingIn} handleSubmit={loginSubmit} />
              }
            </Box>
          </CSSTransition>
        </SwitchTransition>
        <Grid
          style={{ textAlign: 'center' }}
          container
          alignItems="center">
          <Grid item xs style={{ padding: '0 1em' }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setLogInForm(prevLogInForm => !prevLogInForm)}>
              {logInForm ? t('log_in') : t('sign_up')}
            </Button>
          </Grid>
          <Divider flexItem orientation="vertical" />
          <Grid item xs style={{ padding: '0 1em' }}>
            <Button component={RouterLink} to="/home">
              {t('main_page')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

export default LandingPage