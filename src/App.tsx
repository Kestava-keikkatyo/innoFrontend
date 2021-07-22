import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import SnackbarNotification from './components/SnackbarNotification';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import WorkersPage from './pages/WorkersPage';
import ContractsPage from './pages/ContractsPage';
import PrivateRoute from './components/PrivateRoute';
import ProcessPage from './pages/ProcessPage';
import TasksPage from './pages/TaskPage';
import DocumentPage from './pages/DocumentPage';
import FormsPage from './pages/FormsPage';
import WorkerStatistics from './pages/WorkerStatistics';
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
import Admin from './pages/AdminPage';
import AdminRoute from './components/AdminRoute';
import AdminDatabank from './pages/AdminPage/AdminDatabank';
import Users from './pages/AdminPage/Users';
import Agency from './pages/AdminPage/Agency';
import UserCompany from './pages/AdminPage/UserCompany';
import BusinessContractPage from './pages/BusinessContractsPage';
import BusinessContractPreviewPage from './pages/BusinessContractPreviewPage';
import BusinessContractFill from './pages/BusinessContractPreviewPage/BusinessContractFill';
import BusinessContractEdit from './pages/BusinessContractPreviewPage/BusinessContractEdit';
import WorkerContractPage from './pages/WorkersPage';
import ContractFormManagerPage from './pages/ContractsPage/ContractFormManagerPage';
import ContractFormPreviewPage from './pages/ContractsPage/ContractFormManagerPage/ContractFormPreviewPage';
import ContractFormEditPage from './pages/ContractsPage/ContractFormManagerPage/ContractFormEditPage';
import ProfilePage from './pages/ProfilePage';
import ProfileViewPage from './pages/BusinessContractsPage/ProfileViewPage';
import ProfileList from './pages/ProfilePage/ProfileList';
import EditProfilePage from './pages/ProfilePage/EditProfilePage';
import JobList from './pages/JobPage';
import WorkOverview from './pages/WorkOverview';
import WorkInfo from './pages/WorkOverview/WorkInfo';

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
        <AdminRoute path="/admin">
          <Admin />
        </AdminRoute>
        <AdminRoute path="/admin/users">
          <Users />
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
        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute path="/profile-list">
          <ProfileList />
        </PrivateRoute>
        <PrivateRoute path="/profile-view">
          <ProfileViewPage />
        </PrivateRoute>
        <PrivateRoute path="/profile-edit">
          <EditProfilePage />
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
        <PrivateRoute path="/sopimukset" roles={[roles.Worker]}>
          <WorkerContractPage />
        </PrivateRoute>
        <PrivateRoute path="/report">
          <ReportPage />
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
          roles={[roles.Business, roles.Agency]}
        >
          <BusinessContractPreviewPage />
        </PrivateRoute>
        <PrivateRoute
          path="/business-contracts/business-contract-fill"
          roles={[roles.Business, roles.Agency]}
        >
          <BusinessContractFill />
        </PrivateRoute>
        <PrivateRoute
          path="/business-contracts/business-contract-edit"
          roles={[roles.Business, roles.Agency]}
        >
          <BusinessContractEdit />
        </PrivateRoute>
        <PrivateRoute path="/business-contracts" roles={[roles.Business]}>
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
        <PrivateRoute path="/work-overview" roles={[roles.Business, roles.Agency]}>
          <WorkOverview />
        </PrivateRoute>
        <PrivateRoute path="/work-info" roles={[roles.Business, roles.Agency,roles.Worker]}>
          <WorkInfo />
        </PrivateRoute>
        <PrivateRoute path="/forms" roles={[roles.Business, roles.Agency]}>
          <FormsPage />
        </PrivateRoute>
        <PrivateRoute path="/workers" roles={[roles.Business, roles.Agency]}>
          <WorkersPage />
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
