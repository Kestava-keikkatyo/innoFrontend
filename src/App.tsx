import React, { useEffect } from "react"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"

import SnackbarNotification from "./components/SnackbarNotification"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import WorkersPage from "./pages/WorkersPage"
import ContractsPage from "./pages/ContractsPage"
import PrivateRoute from "./components/PrivateRoute"
import ProcessPage from "./pages/ProcessPage"
import TasksPage from "./pages/TaskPage"
import DocumentPage from "./pages/DocumentPage"
import FormsPage from "./pages/FormsPage"
import WorkerStatistics from "./pages/WorkerStatistics"
import { CssBaseline } from "@material-ui/core"
import NewFormPage from "./pages/FormsPage/NewFormPage"
import FormPreviewPage from "./pages/FormPreviewPage"
import { roles } from "./types"

/**
 * App component, main react component which acts as a container for all the other components.
 * @exports App
 */
const App: React.FC = () => {
  // extra toolbar prevents content from going underneath appbar.
  return (
    <>
      <ScrollToTop />
      <CssBaseline />

      <SnackbarNotification />
      <Switch>
        <Route exact path="/login">
          <LandingPage />
        </Route>
        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute path="/tasks">
          <TasksPage />
        </PrivateRoute>
        <PrivateRoute path="/documents">
          <DocumentPage />
        </PrivateRoute>
        <PrivateRoute path="/process" roles={[roles.Worker]}>
          <ProcessPage />
        </PrivateRoute>
        <PrivateRoute path="/fiilismittari" roles={[roles.Worker]}>
          <WorkerStatistics />
        </PrivateRoute>
        <PrivateRoute path="/contracts" roles={[roles.Agency]}>
          <ContractsPage />
        </PrivateRoute>
        <PrivateRoute path="/forms/newform/preview" roles={[roles.Business, roles.Agency]}>
          <FormPreviewPage />
        </PrivateRoute>
        <PrivateRoute path="/forms/newform" roles={[roles.Business, roles.Agency]}>
          <NewFormPage />
        </PrivateRoute>
        <PrivateRoute path="/forms" roles={[roles.Business, roles.Agency]}>
          <FormsPage />
        </PrivateRoute>
        <PrivateRoute path="/workers" roles={[roles.Business, roles.Agency]}>
          <WorkersPage />
        </PrivateRoute>
        <PrivateRoute path="/">
          <HomePage />
        </PrivateRoute>
        <Redirect from="*" to="/login" />
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
