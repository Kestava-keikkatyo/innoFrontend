import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '../../actions/userActions';

import WorkerHome from './WorkerHome';
import PageLoading from '../../components/PageLoading';

import { Container, Typography } from '@mui/material';
import { roles } from '../../types/types';
import BusinessHome from './BusinessHome';
import AgencyHome from './AgencyHome';
import { useTranslation } from 'react-i18next';
import AdminHome from './AdminHome';

const Home = () => {
  const { data, ...user } = useSelector((state: any) => state.user);

  const { t } = useTranslation();

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
      <Typography variant="h1" color="primary" className="header">
        {t('home')}
      </Typography>
      {getContent()}
    </Container>
  );
};

export default Home;
