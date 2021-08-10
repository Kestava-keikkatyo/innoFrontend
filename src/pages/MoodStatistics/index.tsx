import { Container } from '@material-ui/core';
import LineChart from './LineChart';
import PieChart from './PieChart';
import Table from './Table';
import WorkerStatisticsButtonRow from './WorkerStatisticsButtonRow';
import WorkerStatisticsSummary from './WorkerStatisticsSummary';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeelings } from '../../actions/feelingActions';

/**
 * @component
 * Renders Feel-o-meter page. Contains {@link Chart},
 * {@link NewFeelingEntryModal}, {@link Table}, {@link WorkerStatisticsButtonRow}, {@link WorkerStatistics}, {@link LineChart}
 * and {@link PieChart}
 */
const WorkerStatistics = () => {
  const feelings = useSelector((state: any) => state.feeling?.feelings);
  console.log('feelings index', feelings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeelings());
  }, [dispatch]);

  console.log('### index:feelings:', feelings);

  return (
    <Container className="worker-statistics">
      <WorkerStatisticsButtonRow />
      <WorkerStatisticsSummary />
      {feelings && feelings?.length > 0 ? (
        <>
          <LineChart />
          <PieChart />
          <Table />
        </>
      ) : null}
    </Container>
  );
};

export default WorkerStatistics;
