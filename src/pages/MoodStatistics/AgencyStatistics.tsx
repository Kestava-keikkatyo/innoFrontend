import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
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
    <Container maxWidth="lg" className={classes.container}>
      <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Typography variant="h4" color="primary">
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
