import { Grid, Hidden, Typography } from '@mui/material';
import ProgressPieChart from '../../components/ProgressPieChart';
import React from 'react';
import {
  averageFeeling,
  calculateCheer,
  getDataSet,
  getTotalDataSet,
} from '../../utils/feelingUtils';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'
/**
 * @component
 */
const AgencyStatisticsSummary: React.FC<any> = () => {
  const { feelings } = useSelector((state: any) => state.feeling);
  console.log('AgencyStatisticsSummary:feelings:', feelings);
  const { t } = useTranslation()
  if (!feelings) {
    return (
      <div className="worker-statistics-summary">
        <Typography variant="h5" className="no-data-text">
         {t('no_data')}
        </Typography>
      </div>
    );
  }

  return (
    <Grid className="worker-statistics-summary" container >
      <Grid item style={{padding: "0"}}>
        <ProgressPieChart datasets={getDataSet(averageFeeling(feelings))}>
          <Typography variant="h2" className='header2'>
            {averageFeeling(feelings).toString()}
          </Typography>
          <Hidden smDown>
            <Typography variant="h3" className='header4'>
              {calculateCheer(averageFeeling(feelings), 4)}
            </Typography>
          </Hidden>
        </ProgressPieChart>
        <Typography>{t('average')}</Typography>
      </Grid>
      <Grid item style={{padding: "0"}}>
        <ProgressPieChart datasets={getTotalDataSet(feelings.length)}>
          <Typography variant="h2" className='header2'>{feelings.length}</Typography>
          <Hidden smDown>
            <Typography variant="h3" className='header4'>
              {calculateCheer(feelings.length, 100)}
            </Typography>
          </Hidden>
        </ProgressPieChart>
        <Typography>{t('total')}</Typography>
      </Grid>
    </Grid>
  );
};

export default AgencyStatisticsSummary;
