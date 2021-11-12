import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import SnackbarNotification from './components/SnackbarNotification';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ContractsPage from './pages/ContractsPage';
import PrivateRoute from './components/PrivateRoute';
import ProcessPage from './pages/ProcessPage';
import FormsPage from './pages/FormsPage';
import WorkerStatistics from './pages/MoodStatistics';
import AgencyStatistics from './pages/MoodStatistics/AgencyStatistics';
import { CssBaseline } from '@material-ui/core';
import NewFormPage from './pages/FormsPage/NewFormPage';
import EditFormPage from './pages/FormsPage/EditFormPage';
import FormPreviewPage from './pages/FormPreviewPage';
import { roles } from './types/types';
import DatabankRoute from './components/DatabankRoute';
import BestPractices from './pages/Databank/BestPractices';
import JobLifeline from './pages/Databank/JobLifeline';
import RoleResponsibilities from './pages/Databank/RoleResponsibilities';
import Databank from './pages/Databank';
import ReportPage from './pages/ReportPage';
import ReportsPage from './pages/ReportPage/ReportsPage';
import AdminRoute from './components/AdminRoute';
import AdminDatabank from './pages/AdminPage/AdminDatabank';
import Users from './pages/AdminPage/Users';
import Agency from './pages/AdminPage/Agency';
import UserCompany from './pages/AdminPage/UserCompany';
import BusinessContractPage from './pages/BusinessContractsPage';
import BusinessContractPreviewPage from './pages/BusinessContractPreviewPage';
import BusinessContractFill from './pages/BusinessContractPreviewPage/BusinessContractFill';
import BusinessContractEdit from './pages/BusinessContractPreviewPage/BusinessContractEdit';
import ContractFormManagerPage from './pages/ContractsPage/ContractFormManagerPage';
import ContractFormPreviewPage from './pages/ContractsPage/ContractFormManagerPage/ContractFormPreviewPage';
import ContractFormEditPage from './pages/ContractsPage/ContractFormManagerPage/ContractFormEditPage';
import ProfilePage from './pages/ProfilePage';
import ProfileViewPage from './pages/ProfilePage/ProfileViewPage';
import ProfilesPage from './pages/ProfilePage/ProfilesPage';
import EditProfilePage from './pages/ProfilePage/EditProfilePage';
import JobList from './pages/JobPage';
import SettingsPage from './pages/SettingsPage';
import BusinessWorkRequest from './pages/BusinessWorkOverview';
import WorkInfo from './pages/BusinessWorkOverview/WorkInfo';
import WorkRequest from './pages/AgencyWorkRequest';
import WorkerJobs from './pages/WorkerWorkOverview';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminHome from './pages/AdminPage/AdminHome';
import AgencyWorkAdd from './pages/AgencyWorkAddPage';
import ProfileList from './pages/AdminPage/ProfileList';
import AllUsersList from './pages/AdminPage/AllUsersList';
import User from './pages/AdminPage/user/User';

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
          <LoginPage />
        </Route>
        <AdminRoute path="/admin/users">
          <Users />
        </AdminRoute>
        <Route path="/adminloginpage">
          <AdminLoginPage />
        </Route>
        <AdminRoute path="/admin/home">
          <AdminHome />
        </AdminRoute>
        <AdminRoute path="/profileList">
          <ProfileList />
        </AdminRoute>
        <AdminRoute path="/userList">
          <AllUsersList />
        </AdminRoute>
        <AdminRoute path="/user/:profileId">
          <User />
        </AdminRoute>
        <AdminRoute path="/admin/usercompany">
          <UserCompany />
        </AdminRoute>
        <AdminRoute path="/admin/agency">
          <Agency />
        </AdminRoute>
        <AdminRoute path="/admin/admindatabank">
          <AdminDatabank />
        </AdminRoute>
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
        <PrivateRoute path="/profiles">
          <ProfilesPage />
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
        <PrivateRoute path="/create-job" roles={[roles.Agency]}>
          <AgencyWorkAdd />
        </PrivateRoute>
        <PrivateRoute path="/reports" roles={[roles.Business, roles.Agency]}>
          <ReportsPage />
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
        <PrivateRoute path="/job-list" roles={[roles.Worker]}>
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
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
