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
import { IRootState } from '../../utils/store';
import { useTranslation } from 'react-i18next'

/**
 * @component
 * Shows summary of workers feelings statistics.
 * Shows an error message when feelings list is empty or
 * not found. Summary uses utils to calculate data. Data
 * is shown in Doughnut charts.
 */
const WorkerStatisticsSummary = () => {
  const feelings = useSelector((state: IRootState) => state.feeling?.feelings);
  const { t } = useTranslation()
  console.log('StatsSummary:feelings', feelings);

  if (!feelings) {
    return (
      <div className="worker-statistics-summary">
        <Typography variant="h5" className="no-data-text">
          {t('no_data')}
        </Typography>
        <Typography className="no-data-text">
          {t('no_entries')}
        </Typography>
      </div>
    );
  }

  return (
    <Grid className="worker-statistics-summary" container spacing={1}>
      <Grid item xs={4}>
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
        <Typography>{t('average')}</Typography>
      </Grid>
      <Grid item xs={4}>
        <ProgressPieChart
          datasets={getDataSet(feelings[feelings.length - 1]?.value)}
        >
          <Typography variant="h5">
            {feelings[feelings.length - 1]?.value}
          </Typography>
          <Hidden xsDown>
            <Typography variant="h6">
              {calculateCheer(feelings[feelings.length - 1]?.value, 4)}
            </Typography>
          </Hidden>
        </ProgressPieChart>
        <Typography>{t('current_mood')}</Typography>
      </Grid>
      <Grid item xs={4}>
        <ProgressPieChart datasets={getTotalDataSet(feelings.length)}>
          <Typography variant="h5">{feelings.length}</Typography>
          <Hidden xsDown>
            <Typography variant="h6">
              {calculateCheer(feelings.length, 100)}
            </Typography>
          </Hidden>
        </ProgressPieChart>
        <Typography>{t('total')}</Typography>
      </Grid>
    </Grid>
  );
};

export default WorkerStatisticsSummary;
