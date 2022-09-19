import React, { useEffect } from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next'
import FeedbackCategory from './feedbackCategory';
import { useDispatch } from 'react-redux';
import AgencyStatisticsSummary from './AgencyStatisticsSummary';
import allUsersService from '../../services/allUsersService';
import { addFeelings } from '../../actions/feelingActions';
import PieChart from './PieChart';

const AgencyStatistics = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { t } = useTranslation()

  useEffect(() => {
    allUsersService.getAgencyWorkers().then((res: any) => {
      const agencyWorkers = res.data;
      agencyWorkers.map((worker: any) => {
        return dispatch(addFeelings(worker.feelings));
      });
    });
  }, [dispatch]);

  return (
    <Container maxWidth="lg" id="maxContainer" className={classes.container}>
      <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Typography variant="h1" className='header' color="primary">
          {t('mood_stats')}
        </Typography>
        <AgencyStatisticsSummary />
        <FeedbackCategory />
        <PieChart />
      </Box>
    </Container>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginTop: 10,
      paddingBottom: 20,
    },
  })
);

export default AgencyStatistics;
