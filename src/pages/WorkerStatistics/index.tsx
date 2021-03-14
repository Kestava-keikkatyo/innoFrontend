import { Container } from '@material-ui/core';
import Chart from './Chart';
import Table from './Table';
import WorkerStatisticsButtonRow from './WorkerStatisticsButtonRow';
import WorkerStatisticsSummary from './WorkerStatisticsSummary';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeelings } from '../../actions/feelingActions';

const WorkerStatistics = () => {
  const feelings = useSelector((state: any) => state.feeling?.feelings)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchFeelings())
  }, [dispatch])
  
  return (
    <Container className="worker-statistics">
      <WorkerStatisticsButtonRow />
      <WorkerStatisticsSummary />
      {feelings && feelings.length > 0 &&
      <>
        <Chart />
        <Table />
      </>
      }
    </Container>
  );
}

export default WorkerStatistics;
