import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from './WorkerStepBase';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Container } from '@mui/material';

const FeedbackAndEvaluation = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const tabContent = [
    <div key="tab0">
      Tab 0 content for {t('feedback_evaluation')}
    </div>,
    <div key="tab1">
      Tab 1 content for {t('feedback_evaluation')}
    </div>,
    <div key="tab2">
      Tab 2 content for {t('feedback_evaluation')}
    </div>
  ]

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('feedback_evaluation')}
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

export default FeedbackAndEvaluation;
