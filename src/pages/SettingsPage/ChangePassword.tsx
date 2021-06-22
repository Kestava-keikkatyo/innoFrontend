import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me, update } from '../../actions/userActions'

import PasswordChange from './PasswordChange'
import PageLoading from '../../components/PageLoading'

import {
  Box,
  Button,
  Container
} from '@material-ui/core'


/**
 * @component
 * @desc The main profile page component.
 * Container for WorkerProfile, CompanyProfile and PasswordChange components.
 */
const ProfilePage = () => {
  const [display, setDisplay] = useState(false)
  const { data, ...user } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me(data.role))
  }, [dispatch, data.role])

  const updateUser = (updateData: any) => {
    dispatch(update(updateData, data.role))
  }

  if (user.loading || !user.profile) {
    return (
      <PageLoading />
    )
  }

  return (
    <Container maxWidth="sm">
      <Box paddingBottom={2}>
          <PasswordChange handleSubmit={updateUser} hide={() => setDisplay(false)} /> 
      </Box>
    </Container>
  )
}

export default ProfilePage