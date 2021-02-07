import React, { useEffect, useState } from 'react'
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
import ResponsiveDrawer from './components/NewAppBar'

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
      {/* <AppBar handleDrawer={handleDrawer} />
      <Toolbar />
      <Drawer
        open={open}
        handleDrawer={handleDrawer}
        loggedIn={loggedIn}
        role={data.role}
      /> */}
      { loggedIn &&
        <ResponsiveDrawer />
      }
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
        <PrivateRoute path="/fiilismittari" loggedIn={loggedIn}>
          <WorkerStatistics />
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
