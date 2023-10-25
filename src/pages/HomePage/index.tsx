import React from 'react'
import { useSelector } from 'react-redux'
import WorkerHome from './WorkerHome'
import PageLoading from '../../components/PageLoading'
import { Container } from '@mui/material'
import { roles } from '../../types/types'
import AdminHome from './AdminHome'
import BusinessOrAgencyHome from './BusinessOrAgencyHome'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { data, ...user } = useSelector((state: any) => state.user)
  const { t } = useTranslation()

  if (user.loading) {
    return <PageLoading />
  }

  const getContent = () => {
    switch (data.role) {
      case roles.Admin:
        return <AdminHome />
      case roles.Business:
        return <BusinessOrAgencyHome welcomeText={t('welcomeTextAgency')} />
      case roles.Agency:
        return <BusinessOrAgencyHome welcomeText={t('welcomeTextBusiness')} />
      case roles.Worker:
        return <WorkerHome />
      default:
        return <></>
    }
  }
  return (
    <Container
      maxWidth={false}
      sx={{
        paddingBottom: '100px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {getContent()}
    </Container>
  )
}

export default Home
