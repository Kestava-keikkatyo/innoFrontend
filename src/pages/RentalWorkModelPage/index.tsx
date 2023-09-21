import React from 'react'
import { useSelector } from 'react-redux'

import PageLoading from '../../components/PageLoading'

import { roles } from '../../types/types'
import RentalWorkModel from './RentalWorkModel'
import WorkerRentalWorkModel from './WorkerRentalWorkModel'

export interface RentalWorkModelSteps {
  path:
    | 'rental-work-model'
    | 'customer-contract'
    | 'ordering-employee'
    | 'contract-of-employment'
    | 'guidance-to-work'
    | 'work-performance'
}

const RentalWorkModelPage = ({ path }: RentalWorkModelSteps) => {
  const { data, ...user } = useSelector((state: any) => state.user)

  if (user.loading) {
    return <PageLoading />
  }

  const getContent = () => {
    switch (data.role) {
      case roles.Business:
      case roles.Agency:
        return <RentalWorkModel path={path} />
      case roles.Worker:
        return <WorkerRentalWorkModel path={path} />
      case roles.Admin:
      default:
        return null
    }
  }

  return getContent()
}

export default RentalWorkModelPage
