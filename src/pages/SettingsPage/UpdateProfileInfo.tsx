import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me, update } from '../../actions/userActions'
import WorkerProfile from './WorkerProfile'
import CompanyProfile from './CompanyProfile'
import PageLoading from '../../components/PageLoading'

import {
  Card,
  Box,
  Container
} from '@mui/material'
import { roles } from '../../types/types'

/**
 * @component
 * @desc The main profile page component.
 * Container for WorkerProfile, CompanyProfile and PasswordChange components.
 */
const UpdateProfileInformation = () => {
  const [display, setDisplay] = useState(false)
  const { data, ...user } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [dispatch, data.role])

  const updateUser = (updateData: any) => {
    dispatch(update(updateData))
  }

  if (user.loading || !user.profile) {
    return (
      <PageLoading />
    )
  }

  return (
    <Container maxWidth="sm">   
      <Box paddingBottom={2}>
        <Card variant="outlined">
        </Card>
      </Box>
      <Box paddingBottom={2}>
        {data.role === roles.Worker &&
          <WorkerProfile profile={user.profile} handleSubmit={updateUser} />}
        {(data.role === roles.Agency ||
          data.role === roles.Business) &&
          <CompanyProfile profile={user.profile} handleSubmit={updateUser} />}
      </Box>
    </Container>
  )
}

export default UpdateProfileInformation