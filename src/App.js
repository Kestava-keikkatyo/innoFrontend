import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import WorkersPage from './components/WorkersPage'
import ContractsPage from './components/ContractsPage'
import PrivateRoute from './components/PrivateRoute'
import ProcessPage from './components/ProcessPage'
import TasksPage from './components/TaskPage'
import MessagePage from './components/MessagePage'
import DocumentPage from './components/DocumentPage'
import FormsPage from './components/FormsPage'
import Drawer from './components/Drawer'
import AppBar from './components/AppBar'

import { clearAlert } from './actions/alertActions'
import Role from './utils/role'

import { CssBaseline, Snackbar, Toolbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

/**
 * App component, main react component which acts as a container for all the other components.
 * @exports App
 */
const App = () => {
  const { loggedIn, data } = useSelector((state) => state.user)
  const alert = useSelector((state) => state.alert)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleSnackbarClose = (_event, reason) => {
    if (reason !== 'clickaway') {
      dispatch(clearAlert())
    }
  }

  /**
   * Function for opening and closing drawer component.
   * Passed as prop to [AppBar]{@link module:components/AppBar} and
   * [Drawer]{@link module:components/Drawer}.
   * @function
   */
  const handleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  // extra toolbar prevents content from going underneath appbar.
  return (
    <>
      <ScrollToTop />
      <CssBaseline />
      <AppBar handleDrawer={handleDrawer} />
      <Toolbar />
      <Drawer
        open={open}
        handleDrawer={handleDrawer}
        loggedIn={loggedIn}
        role={data.role}
      />
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
        <Route exact path="/">
          {loggedIn ? <Redirect to="/home" /> : <LandingPage />}
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <PrivateRoute path="/profile" loggedIn={loggedIn}>
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute
          path="/contracts"
          role={data.role}
          roles={[Role.Agency]}
          loggedIn={loggedIn}
        >
          <ContractsPage />
        </PrivateRoute>
        <PrivateRoute
          path="/workers"
          role={data.role}
          roles={[Role.Business, Role.Agency]}
          loggedIn={loggedIn}
        >
          <WorkersPage />
        </PrivateRoute>
        <PrivateRoute
          path="/process"
          role={data.role}
          roles={[Role.Worker]}
          loggedIn={loggedIn}
        >
          <ProcessPage />
        </PrivateRoute>
        <PrivateRoute
          path="/tasks"
          role={data.role}
          roles={[Role.Worker, Role.Agency, Role.Business]}
          loggedIn={loggedIn}
        >
          <TasksPage />
        </PrivateRoute>
        <PrivateRoute
          path="/messages"
          role={data.role}
          roles={[Role.Worker, Role.Agency, Role.Business]}
          loggedIn={loggedIn}
        >
          <MessagePage />
        </PrivateRoute>
        <PrivateRoute
          path="/documents"
          role={data.role}
          roles={[Role.Worker, Role.Agency, Role.Business]}
          loggedIn={loggedIn}
        >
          <DocumentPage />
        </PrivateRoute>
        <PrivateRoute
          path="/forms"
          role={data.role}
          roles={[Role.Agency]}
          loggedIn={loggedIn}
        >
          <FormsPage />
        </PrivateRoute>
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
