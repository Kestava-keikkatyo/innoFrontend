import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import SnackbarNotification from './components/SnackbarNotification'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import WorkersPage from './pages/WorkersPage'
import ContractsPage from './pages/ContractsPage'
import PrivateRoute from './components/PrivateRoute'
import ProcessPage from './pages/ProcessPage'
import TasksPage from './pages/TaskPage'
import DocumentPage from './pages/DocumentPage'
import FormsPage from './pages/FormsPage'
import WorkerStatistics from './pages/WorkerStatistics'
import ReportPage from './pages/ReportPage'
import { CssBaseline } from '@material-ui/core'
import NewFormPage from './pages/FormsPage/NewFormPage'
import FormPreviewPage from './pages/FormPreviewPage'
import { roles } from './types/types'
import InductionPage from './pages/InductionPage'
import DatabankRoute from './components/DatabankRoute'
import BestPractices from './pages/Databank/BestPractices'
import JobLifeline from './pages/Databank/JobLifeline'
import RoleResponsibilities from './pages/Databank/RoleResponsibilities'
import Databank from './pages/Databank'

/**
 * @component
 * App component, main react component which acts as a container for all the other components.
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
        <DatabankRoute path="/databank/lifeline">
          <JobLifeline />
        </DatabankRoute>
        <DatabankRoute path="/databank/responsibilities">
          <RoleResponsibilities />
        </DatabankRoute>
        <DatabankRoute path="/databank/best-practices">
          <BestPractices />
        </DatabankRoute>
        <DatabankRoute path="/databank">
          <Databank />
        </DatabankRoute>
        <PrivateRoute path="/induction">
          <InductionPage />
        </PrivateRoute>
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
        <PrivateRoute path="/report">
          <ReportPage />
        </PrivateRoute>
        <PrivateRoute path="/contracts" roles={[roles.Agency]}>
          <ContractsPage />
        </PrivateRoute>
        <PrivateRoute
          path="/forms/newform/preview"
          roles={[roles.Business, roles.Agency]}
        >
          <FormPreviewPage />
        </PrivateRoute>
        <PrivateRoute
          path="/forms/newform"
          roles={[roles.Business, roles.Agency]}
        >
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
