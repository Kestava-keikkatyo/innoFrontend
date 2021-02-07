import { Container } from '@material-ui/core';
import Chart from './Chart';
import Table from './Table';
import WorkerStatisticsButtonRow from './WorkerStatisticsButtonRow';
import WorkerStatisticsSummary from './WorkerStatisticsSummary';
import React from 'react'

const WorkerStatistics = () => {
  return (
    <Container className="worker-statistics">
      <WorkerStatisticsButtonRow />
      <WorkerStatisticsSummary />
      <Chart />
      <Table />
    </Container>
  );
}

export default WorkerStatistics;
