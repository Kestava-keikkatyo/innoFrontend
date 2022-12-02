import React from 'react'
import { useSelector } from 'react-redux';
import PageLoading from '../../components/PageLoading';
import { RentalWorkModelSteps } from './index';
import CustomerContract from './WorkerSteps/CustomerContract';
import OrderingEmployee from './WorkerSteps/OrderingEmployee';
import ContractOfEmployment from './WorkerSteps/ContractOfEmployment';
import GuidanceToWork from './WorkerSteps/GuidanceToWork';
import WorkPerformance from './WorkerSteps/WorkPerformance';
import Overview from './WorkerSteps/Overview';

const RentalWorkModel = (props: RentalWorkModelSteps) => {
  const { data, ...user } = useSelector((state: any) => state.user);

  if (user.loading) {
    return <PageLoading />;
  }

  const getContent = ({ path }: RentalWorkModelSteps) => {
    switch (path) {
      case 'customer-contract':
        return <CustomerContract />
      case 'ordering-employee':
        return <OrderingEmployee />
      case 'contract-of-employment':
        return <ContractOfEmployment />
      case 'guidance-to-work':
        return <GuidanceToWork />
      case 'work-performance':
        return <WorkPerformance />
      case 'rental-work-model':
      default:
        return <Overview />
    }
  }

  return getContent(props)
}

export default RentalWorkModel;
