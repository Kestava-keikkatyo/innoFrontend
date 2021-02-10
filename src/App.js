import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import WorkersPage from './pages/WorkersPage'
import ContractsPage from './pages/ContractsPage'
import PrivateRoute from './components/PrivateRoute'
import ProcessPage from './pages/ProcessPage'
import TasksPage from './pages/TaskPage'
import MessagePage from './pages/MessagePage'
import DocumentPage from './pages/DocumentPage'
import FormsPage from './pages/FormsPage'
import WorkerStatistics from './pages/WorkerStatistics'

import { clearAlert } from './actions/alertActions'
import Role from './utils/role'

import { CssBaseline, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'


/**
 * App component, main react component which acts as a container for all the other components.
 * @exports App
 */
const App = () => {
  const alert = useSelector((state) => state.alert)
  const dispatch = useDispatch()

  const handleSnackbarClose = (_event, reason) => {
    if (reason !== 'clickaway') {
      dispatch(clearAlert())
    }
  }

  // extra toolbar prevents content from going underneath appbar.
  return (
    <>
      <ScrollToTop />
      <CssBaseline />

      <Snackbar open={alert.open} onClose={handleSnackbarClose}>
        <Alert
          onClose={handleSnackbarClose}
          severity={alert.severity}
          variant="filled"
        >
          {alert.message}
        </Alert>
      </Snackbar>
      <Switch>
        <PrivateRoute path="/home" >
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/profile" >
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute path="/tasks" >
          <TasksPage />
        </PrivateRoute>
        <PrivateRoute path="/messages" >
          <MessagePage />
        </PrivateRoute>
        <PrivateRoute path="/documents" >
          <DocumentPage />
        </PrivateRoute>
        <PrivateRoute path="/process" roles={[Role.Worker]} >
          <ProcessPage />
        </PrivateRoute>
        <PrivateRoute path="/fiilismittari" roles={[Role.Worker]} >
          <WorkerStatistics />
        </PrivateRoute>
        <PrivateRoute path="/contracts" roles={[Role.Agency]} >
          <ContractsPage />
        </PrivateRoute>
        <PrivateRoute path="/forms" roles={[Role.Agency]} >
          <FormsPage />
        </PrivateRoute>
        <PrivateRoute path="/workers" roles={[Role.Business, Role.Agency]} >
          <WorkersPage />
        </PrivateRoute>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Redirect from="*" to="/home" />
      </Switch>
    </>
  )
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default App
