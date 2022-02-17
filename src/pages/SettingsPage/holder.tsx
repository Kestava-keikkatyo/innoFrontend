import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { me, update } from '../../actions/userActions';

import WorkerProfile from './WorkerProfile';
import CompanyProfile from './CompanyProfile';
import PageLoading from '../../components/PageLoading';

import {
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  Container,
} from '@mui/material';
import { roles } from '../../types/types';

/**
 * @depricated This component IS NOT in use
 * @component
 * @desc The main profile page component.
 * Container for WorkerProfile, CompanyProfile and PasswordChange components.
 */
const ProfilePage = () => {
  const [display, setDisplay] = useState(false);
  const { data, ...user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, [dispatch, data.role]);

  const updateUser = (updateData: any) => {
    dispatch(update(updateData));
  };

  if (user.loading || !user.profile) {
    return <PageLoading />;
  }

  return (
    <Container maxWidth="sm">
      <Typography style={{ padding: '1rem' }} align="center" variant="h4">
        User information
      </Typography>
      <Box paddingBottom={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h4">
              General
            </Typography>
            <Typography color="textSecondary" variant="body2">
              id: {user.profile._id} <br />
              created: {user.profile.createdAt} <br />
              email: {user.profile.email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box paddingBottom={2}>
        {data.role === roles.Worker && (
          <WorkerProfile profile={user.profile} handleSubmit={updateUser} />
        )}
        {(data.role === roles.Agency || data.role === roles.Business) && (
          <CompanyProfile profile={user.profile} handleSubmit={updateUser} />
        )}
      </Box>
      {/*
      <Box paddingBottom={2}>
        {display ? (
          <PasswordChange
            handleSubmit={updateUser}
            hide={() => setDisplay(false)}
          />
        ) : (
          <Button
            style={{ display: 'block', margin: '0 auto' }}
            variant="outlined"
            onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
          >
            change password
          </Button>
        )}
      </Box>
        */}
    </Container>
  );
};

export default ProfilePage;
