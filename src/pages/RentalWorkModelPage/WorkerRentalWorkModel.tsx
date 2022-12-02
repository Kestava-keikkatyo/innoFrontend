import React from 'react'
import { useSelector } from 'react-redux';
import PageLoading from '../../components/PageLoading';
import { RentalWorkModelSteps } from './index';
import WorkerOverview from './WorkerSteps/WorkersSteps/WorkerOverview';
import WorkerContractOfEmployment from './WorkerSteps/WorkersSteps/WorkerContractOfEmployment';
import WorkerGuidanceToWork from './WorkerSteps/WorkersSteps/WorkerGuidanceToWork';
import WorkerWorkPerformance from './WorkerSteps/WorkersSteps/WorkerWorkPerformance';

const WorkerRentalWorkModel = (props: RentalWorkModelSteps) => {
  const { data, ...user } = useSelector((state: any) => state.user);

  if (user.loading) {
    return <PageLoading />;
  }

  const getContent = ({ path }: RentalWorkModelSteps) => {
    switch (path) {
      case 'contract-of-employment':
        return <WorkerContractOfEmployment />
      case 'guidance-to-work':
        return <WorkerGuidanceToWork />
      case 'work-performance':
        return <WorkerWorkPerformance />
      case 'rental-work-model':
      default:
        return <WorkerOverview />
    }
  }

  return getContent(props)
}

export default WorkerRentalWorkModel;
