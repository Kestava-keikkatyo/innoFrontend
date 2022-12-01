import { Container } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from '../WorkerStepBase';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import WorkerWorkPerformanceForm from '../Forms/WorkerForms/WorkerWorkPerformanceForm';
import SearchFromFileComponent from '../SearchFromFileComponent';

const WorkerWorkPerformance = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const tabContent = [
  /*  <div key="tab0">
      <SearchFromFileComponent inputString="worker_step_5" />
    </div>,*/
    <div key="tab0">
      <WorkerWorkPerformanceForm/>
    </div>,
    <div key="tab1">
       <SearchFromFileComponent inputString="good_practices_work_performance_supervision_and_feedback_array" />
    </div>
  ]

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('work_performance')}
      </Typography>
      <WorkerStepBase content={tabContent} />
    </Container>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 8,
  },
  header: {
    marginLeft: 24,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

export default WorkerWorkPerformance;
