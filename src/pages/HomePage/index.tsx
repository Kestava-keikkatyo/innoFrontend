import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me } from '../../actions/userActions'

import WorkerHome from './WorkerHome'
import CompanyHome from './CompanyHome'
import VisitorHome from './VisitorHome'
import PageLoading from '../../components/PageLoading'


import {
  Container
} from '@material-ui/core'
import { roles } from '../../types/types'
import { IRootState } from '../../utils/store'

const Home = () => {
  const { data, ...user } = useSelector((state: any) => state.user)

  const dispatch = useDispatch()

  // Can be used as a user validation (validates token and user role)
  // Run if user has a role
  // Should be switched out when there is actual data to be retrieved
  useEffect(() => {
    if (data.role) {
      dispatch(me(data.role))
    }
  }, [dispatch, data.role])


  if (user.loading) {
    return <PageLoading />
  }

  return (
    <Container maxWidth="md" disableGutters>
      {data.role === roles.Worker &&
        <WorkerHome />}
      {(data.role === roles.Agency ||
        data.role === roles.Business) &&
        <CompanyHome />}
      {!data.role &&
        <VisitorHome />
      }
    </Container>
  )
}

export default Home