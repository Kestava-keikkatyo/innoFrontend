import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me, update } from '../../_actions/userActions'
import Role from '../../_utils/role'

import WorkerProfile from './WorkerProfile'
import CompanyProfile from './CompanyProfile'
import PasswordChange from './PasswordChange'

import { CircularProgress, Typography, Card, CardContent, Box, Button } from '@material-ui/core'

const Profile = () => {
  const [display, setDisplay] = useState(false)
  const { data, ...user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me(data.role))
  }, [dispatch, data.role])

  const updateUser = (updateData) => {
    dispatch(update(updateData, data.role))
  }

  if (user.loading || !user.profile) {
    return <CircularProgress />
  }

  return (
    <Box width="410px">
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
              id: {user.profile.id} <br />
              created: {user.profile.createdAt} <br />
              email: {user.profile.email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box paddingBottom={2}>
        {data.role === Role.Worker &&
          <WorkerProfile profile={user.profile} handleSubmit={updateUser} />}
        {(data.role === Role.Agency ||
          data.role === Role.Business) &&
          <CompanyProfile profile={user.profile} handleSubmit={updateUser} />}
      </Box>
      <Box paddingBottom={2}>
        {display ?
          <PasswordChange handleSubmit={updateUser} hide={() => setDisplay(false)} /> :
          <Button
            style={{ display: 'block', margin: '0 auto' }}
            variant="outlined"
            onClick={() => setDisplay(prevDisplay => !prevDisplay)}>
            change password
          </Button>
        }
      </Box>
    </Box>
  )
}

export default Profile