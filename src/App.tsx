import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import SnackbarNotification from './components/SnackbarNotification'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AgencyContractsPage from './pages/AgencyContractsPage'
import UserContractsPage from './pages/UserContractsPage'
import PrivateRoute from './components/PrivateRoute'
import ProcessPage from './pages/ProcessPage'
import FormsPage from './pages/FormsPage'
import WorkerStatistics from './pages/MoodStatistics'
import AgencyStatistics from './pages/MoodStatistics/AgencyStatistics'
import { CssBaseline } from '@mui/material'
import CompanyMaterial from './pages/CompanyMaterialPage'
import NewFormPage from './pages/FormsPage/NewFormPage'
import EditFormPage from './pages/FormsPage/EditFormPage'
import FormPreviewPage from './pages/FormPreviewPage'
import { roles } from './types/types'
import DatabankRoute from './components/DatabankRoute'
import BestPractices from './pages/Databank/BestPractices'
import Faq from './pages/Databank/Faq'
import JobLifeline from './pages/Databank/JobLifeline'
import RoleResponsibilities from './pages/Databank/RoleResponsibilities'
import Databank from './pages/Databank'
import ReportPage from './pages/ReportPage'
import ReportsPage from './pages/ReportPage/ReportsPage'
import BusinessContractPage from './pages/BusinessContractsPage'
import BusinessContractPreviewPage from './pages/BusinessContractPreviewPage'
import BusinessContractFill from './pages/BusinessContractPreviewPage/BusinessContractFill'
import BusinessContractEdit from './pages/BusinessContractPreviewPage/BusinessContractEdit'
import ContractFormManagerPage from './pages/ContractsPage/ContractFormManagerPage'
import ContractFormPreviewPage from './pages/ContractsPage/ContractFormManagerPage/ContractFormPreviewPage'
import ContractFormEditPage from './pages/ContractsPage/ContractFormManagerPage/ContractFormEditPage'
import JobList from './pages/JobPage'
import SettingsPage from './pages/SettingsPage'
import AllUsersList from './pages/AdminPage/AllUsersList'
import CreateUser from './pages/AdminPage/CreateUser'
import ReportList from './pages/AdminPage/ReportList'
import FeedbackList from './pages/AdminPage/FeedbackList'
import FeedbackDetails from './pages/AdminPage/FeedbackDetails'
import FeelingList from './pages/AdminPage/FeeligList'
import ReportDetails from './pages/AdminPage/ReportDetails'
import FeelingDetails from './pages/AdminPage/FeelingDetails'
import Jobs from './pages/JobPage/Jobs'
import JobDetails from './pages/JobPage/JobDetails'
import CreatedJobs from './pages/JobPage/CreatedJobs'
import JobUpdate from './pages/JobPage/JobUpdate'
import CreateJob from './pages/JobPage/CreateJob'
import SendFeedback from './pages/FeedbackPage/SendFeedback'
import Feedbacks from './pages/FeedbackPage/Feedbacks'
import Details from './pages/FeedbackPage/Details'
import FeedbackPage from './pages/FeedbackPage'
import AgencyWorkers from './pages/Profile/AgencyWorkers'
import Workers from './pages/Profile/Workers'
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material/styles'
import UserProfile from './pages/Profile/User'
import Agencies from './pages/Profile/Agencies'
import Application from './pages/JobPage/Application'
import UserUpdate from './pages/Profile/UserUpdate'
import ReportReplyPage from './pages/ReportPage/ReportReplyPage'
import CreateTopic from './pages/Topic/CreateTopic'
import Topics from './pages/Topic/Topics'
import TopicUpdate from './pages/Topic/TopicUpdate'
import SendWorkRequest from './pages/WorkRequestPage/SendWorkRequest'
import WorkRequests from './pages/WorkRequestPage/WorkRequests'
import WorkRequestUpdate from './pages/WorkRequestPage/WorkRequestUpdate'
import FeedbackUpdate from './pages/FeedbackPage/FeedbackUpdate'
import ReceivedWorkRequests from './pages/WorkRequestPage/ReceivedWorkRequests'
import WorkRequestDetails from './pages/WorkRequestPage/WorkRequestDetails'
import SendFeeling from './pages/Feeling/SendFeeling'
import Information from './pages/Topic/Information'
import PasswordChange from './pages/SettingsPage/PasswordChange'
import CreateResponsibility from './pages/Responsibility/CreateResponsibility'
import Responsibilities from './pages/Responsibility/Responsibilities'
import ResponsibilityUpdate from './pages/Responsibility/ResponsibilityUpdate'
import RentalWorkModelPage from './pages/RentalWorkModelPage'
import WorkerResponsibilities from './pages/ResponsibilitiesPage/WorkerResponsibilities'
import AgencyResponsibilities from './pages/ResponsibilitiesPage/AgencyResponsibilities'
import { useTranslation } from 'react-i18next'
import SchedulePage from './pages/SchedulePage'
import BusinessResponsibilities from './pages/ResponsibilitiesPage/BusinessResponsibilities'
import Businesses from './pages/Profile/Businesses'
import ReceivedFeedbacks from './pages/FeedbackPage/ReceivedFeedbacks'
import ReceivedDetails from './pages/FeedbackPage/ReceivedDetails'
import InviteCode from './pages/InviteCodePage'
import EmploymentPage from './pages/AgencyContractsPage/Employment'
import ForgotPassword from './pages/ForgotPasswordPage/ForgotPassword'
import EmailSent from './pages/ForgotPasswordPage/EmailSent'
import TokenError from './pages/ForgotPasswordPage/TokenError'

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
  const { t } = useTranslation()
  // extra toolbar prevents content from going underneath appbar.
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <CssBaseline />
          <SnackbarNotification />
          <Switch>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/forgotpassword'>
              <ForgotPassword />
            </Route>
            <Route exact path='/forgotpassword/requested'>
              <EmailSent />
            </Route>
            <Route exact path='/forgotpassword/error'>
              <TokenError />
            </Route>
            <PrivateRoute path='/userList'>
              <AllUsersList />
            </PrivateRoute>
            <PrivateRoute path='/createUser'>
              <CreateUser />
            </PrivateRoute>
            <PrivateRoute path='/reportList'>
              <ReportList />
            </PrivateRoute>
            <PrivateRoute path='/feedbackList'>
              <FeedbackList />
            </PrivateRoute>
            <PrivateRoute path='/feelingList'>
              <FeelingList />
            </PrivateRoute>
            <PrivateRoute path='/schedule'>
              <SchedulePage />
            </PrivateRoute>
            <PrivateRoute path='/reportDetails/:reportId'>
              <ReportDetails />
            </PrivateRoute>
            <PrivateRoute path='/feedbackDetails/:feedbackId'>
              <FeedbackDetails />
            </PrivateRoute>
            <PrivateRoute path='/feelingDetails/:workerId'>
              <FeelingDetails />
            </PrivateRoute>
            <PrivateRoute path='/jobs/details/:jobId'>
              <JobDetails />
            </PrivateRoute>
            <PrivateRoute path='/jobs' roles={[roles.Worker]}>
              <Jobs />
            </PrivateRoute>
            <PrivateRoute path='/job/application'>
              <Application />
            </PrivateRoute>
            <PrivateRoute path='/jobListForAgency' roles={[roles.Agency]}>
              <CreatedJobs />
            </PrivateRoute>
            <PrivateRoute path='/job/update/:jobId' roles={[roles.Agency]}>
              <JobUpdate />
            </PrivateRoute>
            <PrivateRoute path='/job/create' roles={[roles.Agency]}>
              <CreateJob />
            </PrivateRoute>
            <PrivateRoute path='/job' roles={[roles.Agency]}>
              <JobList />
            </PrivateRoute>
            <PrivateRoute path='/agencies/workRequest/:agencyId' roles={[roles.Business]}>
              <SendWorkRequest />
            </PrivateRoute>
            <PrivateRoute
              path='/receivedWorkRequests/details/:receivedWorkRequestId'
              roles={[roles.Agency]}
            >
              <WorkRequestDetails />
            </PrivateRoute>
            <PrivateRoute path='/receivedWorkRequests' roles={[roles.Agency]}>
              <ReceivedWorkRequests />
            </PrivateRoute>
            <PrivateRoute path='/workRequests' roles={[roles.Business]}>
              <WorkRequests />
            </PrivateRoute>
            <PrivateRoute path='/workRequest/update/:workRequestId' roles={[roles.Business]}>
              <WorkRequestUpdate />
            </PrivateRoute>
            <PrivateRoute path='/topics/create' roles={[roles.Admin]}>
              <CreateTopic />
            </PrivateRoute>
            <PrivateRoute path='/topics/update/:topicId' roles={[roles.Admin]}>
              <TopicUpdate />
            </PrivateRoute>
            <PrivateRoute path='/topics' roles={[roles.Admin]}>
              <Topics />
            </PrivateRoute>
            <PrivateRoute path='/responsibilities/create' roles={[roles.Admin]}>
              <CreateResponsibility />
            </PrivateRoute>
            <PrivateRoute path='/responsibilities/update/:responsibilityId' roles={[roles.Admin]}>
              <ResponsibilityUpdate />
            </PrivateRoute>
            <PrivateRoute path='/responsibilities' roles={[roles.Admin]}>
              <Responsibilities />
            </PrivateRoute>
            <PrivateRoute path='/businessResponsibilities' roles={[roles.Business]}>
              <BusinessResponsibilities />
            </PrivateRoute>
            <PrivateRoute path='/agencyResponsibilities' roles={[roles.Agency]}>
              <AgencyResponsibilities />
            </PrivateRoute>
            <PrivateRoute path='/workerResponsibilities' roles={[roles.Worker]}>
              <WorkerResponsibilities />
            </PrivateRoute>
            <PrivateRoute
              path='/feedback/send'
              roles={[roles.Business, roles.Agency, roles.Worker]}
            >
              <SendFeedback />
            </PrivateRoute>
            <PrivateRoute path='/feedbacks' roles={[roles.Business, roles.Agency, roles.Worker]}>
              <Feedbacks />
            </PrivateRoute>
            <PrivateRoute path='/feedback/details/:feedbackId' roles={[roles.Worker]}>
              <Details />
            </PrivateRoute>
            <PrivateRoute
              path='/feedback/receivedDetails/:feedbackId'
              roles={[roles.Business, roles.Agency]}
            >
              <ReceivedDetails />
            </PrivateRoute>
            <PrivateRoute
              path='/feedback/update/:feedbackId'
              roles={[roles.Business, roles.Agency, roles.Worker]}
            >
              <FeedbackUpdate />
            </PrivateRoute>
            <PrivateRoute path='/feedback' roles={[roles.Business, roles.Agency, roles.Worker]}>
              <FeedbackPage />
            </PrivateRoute>
            <PrivateRoute path='/feeling/send' roles={[roles.Worker]}>
              <SendFeeling />
            </PrivateRoute>
            <PrivateRoute path='/mypassword/change' roles={[roles.Worker]}>
              <PasswordChange />
            </PrivateRoute>
            <PrivateRoute path='/information' roles={[roles.Worker, roles.Business, roles.Agency]}>
              <Information />
            </PrivateRoute>
            <PrivateRoute path='/workers/profile/:userId' roles={[roles.Business, roles.Agency]}>
              <UserProfile />
            </PrivateRoute>
            <PrivateRoute path='/agencyWorkers' roles={[roles.Agency]}>
              <AgencyWorkers />
            </PrivateRoute>
            <PrivateRoute path='/workers' roles={[roles.Business]}>
              <Workers />
            </PrivateRoute>
            <PrivateRoute path='/agencies/profile/:userId' roles={[roles.Business]}>
              <UserProfile />
            </PrivateRoute>
            <PrivateRoute path='/businesses/profile/:userId' roles={[roles.Agency]}>
              <UserProfile />
            </PrivateRoute>
            <PrivateRoute path='/profileView/:userId'>
              <UserProfile />
            </PrivateRoute>
            <PrivateRoute path='/agencies' roles={[roles.Business]}>
              <Agencies />
            </PrivateRoute>
            <PrivateRoute path='/businesses' roles={[roles.Agency]}>
              <Businesses />
            </PrivateRoute>
            <DatabankRoute path='/databank/lifeline'>
              <JobLifeline />
            </DatabankRoute>
            <DatabankRoute path='/databank/responsibilities'>
              <RoleResponsibilities />
            </DatabankRoute>
            <DatabankRoute path='/databank/best-practices'>
              <BestPractices />
            </DatabankRoute>
            <DatabankRoute path='/databank/faq'>
              <Faq />
            </DatabankRoute>
            <DatabankRoute path='/databank'>
              <Databank />
            </DatabankRoute>
            <PrivateRoute path='/settings'>
              <SettingsPage />
            </PrivateRoute>
            <PrivateRoute path='/profile/edit'>
              <UserUpdate myProfile />
            </PrivateRoute>
            <PrivateRoute path='/profile'>
              <UserProfile myProfile />
            </PrivateRoute>
            <PrivateRoute path='/process' roles={[roles.Worker]}>
              <ProcessPage />
            </PrivateRoute>
            <PrivateRoute path='/fiilismittari' roles={[roles.Worker]}>
              <WorkerStatistics />
            </PrivateRoute>
            <PrivateRoute path='/report' roles={[roles.Worker]}>
              <ReportPage />
            </PrivateRoute>
            <PrivateRoute
              path='/rentalWorkModel/customerContract'
              roles={[roles.Worker, roles.Business, roles.Agency]}
            >
              <RentalWorkModelPage path='customer-contract' />
            </PrivateRoute>
            <PrivateRoute
              path='/rentalWorkModel/orderingEmployee'
              roles={[roles.Worker, roles.Business, roles.Agency]}
            >
              <RentalWorkModelPage path='ordering-employee' />
            </PrivateRoute>
            <PrivateRoute
              path='/rentalWorkModel/contractOfEmployment'
              roles={[roles.Worker, roles.Business, roles.Agency]}
            >
              <RentalWorkModelPage path='contract-of-employment' />
            </PrivateRoute>
            <PrivateRoute
              path='/rentalWorkModel/guidanceToWork'
              roles={[roles.Worker, roles.Business, roles.Agency]}
            >
              <RentalWorkModelPage path='guidance-to-work' />
            </PrivateRoute>
            <PrivateRoute
              path='/rentalWorkModel/workPerformance'
              roles={[roles.Worker, roles.Business, roles.Agency]}
            >
              <RentalWorkModelPage path='work-performance' />
            </PrivateRoute>
            <PrivateRoute
              path='/rentalWorkModel'
              roles={[roles.Worker, roles.Business, roles.Agency]}
            >
              <RentalWorkModelPage path='rental-work-model' />
            </PrivateRoute>
            <PrivateRoute path='/receivedFeedbacks' roles={[roles.Agency, roles.Business]}>
              <ReceivedFeedbacks />
            </PrivateRoute>
            <PrivateRoute path='/reports/answer' roles={[roles.Business, roles.Agency]}>
              <ReportReplyPage />
            </PrivateRoute>
            <PrivateRoute path='/reports' roles={[roles.Business, roles.Agency, roles.Worker]}>
              <ReportsPage />
            </PrivateRoute>
            <PrivateRoute
              path='/contracts/contract-form-manager/contract-form-preview'
              roles={[roles.Agency]}
            >
              <ContractFormPreviewPage />
            </PrivateRoute>
            <PrivateRoute
              path='/contracts/contract-form-manager/contract-form-edit'
              roles={[roles.Agency]}
            >
              <ContractFormEditPage />
            </PrivateRoute>
            <PrivateRoute path='/contracts/contract-form-manager' roles={[roles.Agency]}>
              <ContractFormManagerPage />
            </PrivateRoute>
            <PrivateRoute path='/inviteCodes' roles={[roles.Agency]}>
              <InviteCode />
            </PrivateRoute>
            <PrivateRoute path='/agencyContracts' roles={[roles.Agency]}>
              <AgencyContractsPage />
            </PrivateRoute>
            <PrivateRoute path='/employment' roles={[roles.Agency]}>
              <EmploymentPage />
            </PrivateRoute>
            <PrivateRoute
              path='/businessContracts/business-contract-preview'
              roles={[roles.Business, roles.Agency, roles.Worker]}
            >
              <BusinessContractPreviewPage />
            </PrivateRoute>
            <PrivateRoute
              path='/businessContracts/business-contract-fill'
              roles={[roles.Business, roles.Agency, roles.Worker]}
            >
              <BusinessContractFill />
            </PrivateRoute>
            <PrivateRoute
              path='/business-contracts/business-contract-edit'
              roles={[roles.Business, roles.Agency, roles.Worker]}
            >
              <BusinessContractEdit />
            </PrivateRoute>
            <PrivateRoute path='/businessContracts' roles={[roles.Business, roles.Worker]}>
              <BusinessContractPage />
            </PrivateRoute>
            <PrivateRoute path='/userContracts' roles={[roles.Business, roles.Worker]}>
              <UserContractsPage />
            </PrivateRoute>
            <PrivateRoute path='/forms/newform/preview' roles={[roles.Business, roles.Agency]}>
              <FormPreviewPage />
            </PrivateRoute>
            <PrivateRoute path='/forms/edit-form/preview' roles={[roles.Business, roles.Agency]}>
              <FormPreviewPage />
            </PrivateRoute>
            <PrivateRoute path='/forms/newform' roles={[roles.Business, roles.Agency]}>
              <NewFormPage />
            </PrivateRoute>
            <PrivateRoute path='/forms/edit-form' roles={[roles.Business, roles.Agency]}>
              <EditFormPage />
            </PrivateRoute>
            <PrivateRoute
              path='/forms/preview'
              roles={[roles.Business, roles.Agency, roles.Worker]}
            >
              <FormPreviewPage />
            </PrivateRoute>
            <PrivateRoute path='/forms' roles={[roles.Business, roles.Agency]}>
              <FormsPage />
            </PrivateRoute>
            <PrivateRoute
              path='/companyMaterial'
              roles={[roles.Business, roles.Agency, roles.Worker]}
            >
              <CompanyMaterial />
            </PrivateRoute>
            <PrivateRoute path='/home'>
              <HomePage />
            </PrivateRoute>
            <Route path='/'>
              <LandingPage />
            </Route>
            <Redirect from='*' to='/login' />
          </Switch>
        </ThemeProvider>
      </StyledEngineProvider>
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
