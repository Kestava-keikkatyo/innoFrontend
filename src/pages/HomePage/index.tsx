import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '../../actions/userActions';

import WorkerHome from './WorkerHome';
import PageLoading from '../../components/PageLoading';

import { Container, Typography } from '@material-ui/core';
import { roles } from '../../types/types';
import BusinessHome from './BusinessHome';
import AgencyHome from './AgencyHome';
import { useTranslation } from 'react-i18next';
import AdminHome from '../AdminPage/AdminHome';

const Home = () => {
  const { data, ...user } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Can be used as a user validation (validates token and user role)
  // Run if user has a role
  // Should be switched out when there is actual data to be retrieved
  useEffect(() => {
    if (data.role) {
      dispatch(me(data.role));
    }
  }, [dispatch, data.role]);

  if (user.loading) {
    return <PageLoading />;
  }

  const getContent = () => {
    switch (data.role) {
      case roles.Admin:
        return <AdminHome />;
      case roles.Business:
        return <BusinessHome />;
      case roles.Agency:
        return <AgencyHome />;
      case roles.Worker:
        return <WorkerHome />;
      default:
        return <></>;
    }
  };
  return (
    <Container style={{ marginTop: 24 }}>
      <Typography variant="h4" color="primary">
        {t('home')}
      </Typography>
      {getContent()}
    </Container>
  );
};

export default Home;
