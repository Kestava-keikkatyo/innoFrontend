import React, { useEffect } from "react"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"
import SnackbarNotification from "./components/SnackbarNotification"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import ContractsPage from "./pages/ContractsPage"
import PrivateRoute from "./components/PrivateRoute"
import ProcessPage from "./pages/ProcessPage"
import FormsPage from "./pages/FormsPage"
import WorkerStatistics from "./pages/MoodStatistics"
import AgencyStatistics from "./pages/MoodStatistics/AgencyStatistics"
import { CssBaseline } from "@mui/material"
import NewFormPage from "./pages/FormsPage/NewFormPage"
import EditFormPage from "./pages/FormsPage/EditFormPage"
import FormPreviewPage from "./pages/FormPreviewPage"
import { roles } from "./types/types"
import DatabankRoute from "./components/DatabankRoute"
import BestPractices from "./pages/Databank/BestPractices"
import JobLifeline from "./pages/Databank/JobLifeline"
import RoleResponsibilities from "./pages/Databank/RoleResponsibilities"
import Databank from "./pages/Databank"
import ReportPage from "./pages/ReportPage"
import ReportsPage from "./pages/ReportPage/ReportsPage"
import BusinessContractPage from "./pages/BusinessContractsPage"
import BusinessContractPreviewPage from "./pages/BusinessContractPreviewPage"
import BusinessContractFill from "./pages/BusinessContractPreviewPage/BusinessContractFill"
import BusinessContractEdit from "./pages/BusinessContractPreviewPage/BusinessContractEdit"
import ContractFormManagerPage from "./pages/ContractsPage/ContractFormManagerPage"
import ContractFormPreviewPage from "./pages/ContractsPage/ContractFormManagerPage/ContractFormPreviewPage"
import ContractFormEditPage from "./pages/ContractsPage/ContractFormManagerPage/ContractFormEditPage"
import ProfilePage from "./pages/ProfilePage"
import ProfileViewPage from "./pages/ProfilePage/ProfileViewPage"
import EditProfilePage from "./pages/ProfilePage/EditProfilePage"
import JobList from "./pages/JobPage"
import SettingsPage from "./pages/SettingsPage"
import BusinessWorkRequest from "./pages/BusinessWorkOverview"
import WorkInfo from "./pages/BusinessWorkOverview/WorkInfo"
import WorkRequest from "./pages/GigRequest"
import WorkerJobs from "./pages/WorkerWorkOverview"
import ProfileList from "./pages/AdminPage/ProfileList"
import AllUsersList from "./pages/AdminPage/AllUsersList"
import User from "./pages/AdminPage/user/User"
import FAQIndex from "./pages/FAQPage/index"
import CreateUser from "./pages/AdminPage/CreateUser"
import ReportList from "./pages/AdminPage/ReportList"
import FeedbackList from "./pages/AdminPage/FeedbackList"
import FeedbackDetails from "./pages/AdminPage/FeedbackDetails"
import FeelingList from "./pages/AdminPage/FeeligList"
import ReportDetails from "./pages/AdminPage/ReportDetails"
import FeelingDetails from "./pages/AdminPage/FeelingDetails"
import NewJobList from "./pages/JobPage/newJobList"
import JobDetails from "./pages/JobPage/JobDetails"
import JobListForAgency from "./pages/JobPage/JobListForAgency"
import JobUpdate from "./pages/JobPage/JobUpdate"
import CreateJobForAgency from "./pages/JobPage/CreateJobForAgency"
import SendFeedback from "./pages/FeedbackPage/SendFeedback"
import Feedbacks from "./pages/FeedbackPage/Feedbacks"
import Details from "./pages/FeedbackPage/Details"
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material/styles';



import makeStyles from '@mui/styles/makeStyles';




declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}




/**
 * @component
 * App component, main react component which acts as a container for all the other components.
 */
const App: React.FC = () => {

  const theme = createTheme()

  const useStyles = makeStyles((theme) => {
    root: {
      // some CSS that access to theme
    }
  })

  // extra toolbar prevents content from going underneath appbar.
  return <>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <CssBaseline />

        <SnackbarNotification />
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/profileList">
            <ProfileList />
          </PrivateRoute>
          <PrivateRoute path="/userList">
            <AllUsersList />
          </PrivateRoute>
          <PrivateRoute path="/user/:profileId">
            <User />
          </PrivateRoute>
          <PrivateRoute path="/createUser">
            <CreateUser />
          </PrivateRoute>
          <PrivateRoute path="/reportList">
            <ReportList />
          </PrivateRoute>
          <PrivateRoute path="/feedbackList">
            <FeedbackList />
          </PrivateRoute>
          <PrivateRoute path="/feelingList">
            <FeelingList />
          </PrivateRoute>
          <PrivateRoute path="/reportDetails/:reportId">
            <ReportDetails />
          </PrivateRoute>
          <PrivateRoute path="/feedbackDetails/:feedbackId">
            <FeedbackDetails />
          </PrivateRoute>
          <PrivateRoute path="/feelingDetails/:workerId">
            <FeelingDetails />
          </PrivateRoute>
          <PrivateRoute path="/jobs">
            <NewJobList />
          </PrivateRoute>
          <PrivateRoute path="/job-details/:jobId">
            <JobDetails />
          </PrivateRoute>
          <PrivateRoute path="/jobListForAgency" roles={[roles.Agency]}>
            <JobListForAgency />
          </PrivateRoute>
          <PrivateRoute path="/job/update" roles={[roles.Agency]}>
            <JobUpdate />
          </PrivateRoute>
          <PrivateRoute path="/create-job" roles={[roles.Agency]}>
            <CreateJobForAgency />
          </PrivateRoute>
          <PrivateRoute path="/send-feedback" roles={[roles.Business, roles.Agency, roles.Worker]}>
            <SendFeedback />
          </PrivateRoute>
          <PrivateRoute path="/feedbacks" roles={[roles.Business, roles.Agency, roles.Worker]}>
            <Feedbacks />
          </PrivateRoute>
          <PrivateRoute path="/feedback-details/:feedbackId" roles={[roles.Business, roles.Agency, roles.Worker]}>
            <Details />
          </PrivateRoute>
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
          <PrivateRoute path="/settings">
            <SettingsPage />
          </PrivateRoute>
          <PrivateRoute path="/profiles/profile-view">
            <ProfileViewPage />
          </PrivateRoute>
          <PrivateRoute path="/profile/edit-profile">
            <EditProfilePage />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <ProfilePage />
          </PrivateRoute>
          <PrivateRoute path="/my-work" roles={[roles.Worker]}>
            <WorkerJobs />
          </PrivateRoute>
          <PrivateRoute path="/process" roles={[roles.Worker]}>
            <ProcessPage />
          </PrivateRoute>
          <PrivateRoute path="/fiilismittari" roles={[roles.Worker]}>
            <WorkerStatistics />
          </PrivateRoute>
          <PrivateRoute path="/report" roles={[roles.Worker]}>
            <ReportPage />
          </PrivateRoute>
          <PrivateRoute path="/mood-stats" roles={[roles.Agency]}>
            <AgencyStatistics />
          </PrivateRoute>
          <PrivateRoute path="/reports" roles={[roles.Business, roles.Agency]}>
            <ReportsPage />
          </PrivateRoute>
          <PrivateRoute path="/faq" roles={[roles.Worker]}>
            <FAQIndex />
          </PrivateRoute>
          <PrivateRoute
            path="/contracts/contract-form-manager/contract-form-preview"
            roles={[roles.Agency]}
          >
            <ContractFormPreviewPage />
          </PrivateRoute>
          <PrivateRoute
            path="/contracts/contract-form-manager/contract-form-edit"
            roles={[roles.Agency]}
          >
            <ContractFormEditPage />
          </PrivateRoute>
          <PrivateRoute
            path="/contracts/contract-form-manager"
            roles={[roles.Agency]}
          >
            <ContractFormManagerPage />
          </PrivateRoute>
          <PrivateRoute path="/contracts" roles={[roles.Agency]}>
            <ContractsPage />
          </PrivateRoute>
          <PrivateRoute
            path="/business-contracts/business-contract-preview"
            roles={[roles.Business, roles.Agency, roles.Worker]}
          >
            <BusinessContractPreviewPage />
          </PrivateRoute>
          <PrivateRoute
            path="/business-contracts/business-contract-fill"
            roles={[roles.Business, roles.Agency, roles.Worker]}
          >
            <BusinessContractFill />
          </PrivateRoute>
          <PrivateRoute
            path="/business-contracts/business-contract-edit"
            roles={[roles.Business, roles.Agency, roles.Worker]}
          >
            <BusinessContractEdit />
          </PrivateRoute>
          <PrivateRoute
            path="/business-contracts"
            roles={[roles.Business, roles.Worker]}
          >
            <BusinessContractPage />
          </PrivateRoute>
          <PrivateRoute
            path="/forms/newform/preview"
            roles={[roles.Business, roles.Agency]}
          >
            <FormPreviewPage />
          </PrivateRoute>
          <PrivateRoute
            path="/forms/edit-form/preview"
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
          <PrivateRoute
            path="/forms/edit-form"
            roles={[roles.Business, roles.Agency]}
          >
            <EditFormPage />
          </PrivateRoute>
          <PrivateRoute
            path="/forms/preview"
            roles={[roles.Business, roles.Agency]}
          >
            <FormPreviewPage />
          </PrivateRoute>
          <PrivateRoute path="/work-overview" roles={[roles.Business]}>
            <BusinessWorkRequest />
          </PrivateRoute>
          <PrivateRoute path="/work-request" roles={[roles.Agency]}>
            <WorkRequest />
          </PrivateRoute>
          <PrivateRoute
            path="/work-info"
            roles={[roles.Business, roles.Agency, roles.Worker]}
          >
            <WorkInfo />
          </PrivateRoute>
          <PrivateRoute path="/forms" roles={[roles.Business, roles.Agency]}>
            <FormsPage />
          </PrivateRoute>
          <PrivateRoute path="/jobs" roles={[roles.Worker]}>
            <JobList />
          </PrivateRoute>
          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>
          <Route path="/">
            <LandingPage />
          </Route>
          <Redirect from="*" to="/login" />
        </Switch>
      </ThemeProvider>
    </StyledEngineProvider>
  </>;
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default App
