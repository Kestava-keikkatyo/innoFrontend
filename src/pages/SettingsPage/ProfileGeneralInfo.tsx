import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me, update } from '../../actions/userActions'
import PageLoading from '../../components/PageLoading'

import {
  Typography,
  Card,
  CardContent,
  Box,
  Container
} from '@material-ui/core'


/**
 * @component
 * @desc The main profile page component.
 * Container for WorkerProfile, CompanyProfile and PasswordChange components.
 */
const ProfilePage = () => {
  const { data, ...user } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me(data.role))
  }, [dispatch, data.role])

  if (user.loading || !user.profile) {
    return (
      <PageLoading />
    )
  }

  return (
    <Container maxWidth="sm">
      <Box paddingBottom={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h4">
              Yleistä
            </Typography>
            <Typography color="textSecondary" variant="body2">
              id: {user.profile._id} <br />
              created: {user.profile.createdAt} <br />
              email: {user.profile.email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default ProfilePage