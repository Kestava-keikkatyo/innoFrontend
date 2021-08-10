import { Grid, Hidden, Typography } from '@material-ui/core';
import ProgressPieChart from '../../components/ProgressPieChart';
import React from 'react';
import {
  averageFeeling,
  calculateCheer,
  getDataSet,
  getTotalDataSet,
} from '../../utils/feelingUtils';
import { useSelector } from 'react-redux';

/**
 * @component
 */
const AgencyStatisticsSummary: React.FC<any> = () => {
  const { feelings } = useSelector((state: any) => state.feeling);
  console.log('AgencyStatisticsSummary:feelings:', feelings);

  if (!feelings) {
    return (
      <div className="worker-statistics-summary">
        <Typography variant="h5" className="no-data-text">
          Oops! No data.
        </Typography>
      </div>
    );
  }

  return (
    <Grid className="worker-statistics-summary" container spacing={1}>
      <Grid item xs={6}>
        <ProgressPieChart datasets={getDataSet(averageFeeling(feelings))}>
          <Typography variant="h5">
            {averageFeeling(feelings).toString()}
          </Typography>
          <Hidden xsDown>
            <Typography variant="h6">
              {calculateCheer(averageFeeling(feelings), 4)}
            </Typography>
          </Hidden>
        </ProgressPieChart>
        <Typography>Average</Typography>
      </Grid>
      <Grid item xs={6}>
        <ProgressPieChart datasets={getTotalDataSet(feelings.length)}>
          <Typography variant="h5">{feelings.length}</Typography>
          <Hidden xsDown>
            <Typography variant="h6">
              {calculateCheer(feelings.length, 100)}
            </Typography>
          </Hidden>
        </ProgressPieChart>
        <Typography>Total entries</Typography>
      </Grid>
    </Grid>
  );
};

export default AgencyStatisticsSummary;
