import {
  List,
  ListItem,
  ListItemText,
  Container,
}from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from './WorkerStepBase';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import i18next from 'i18next';
import vastuualueet from '../../../assets/tietopankki/vastuualueet.json';
import vastuualueet_en from '../../../assets/tietopankki/vastuualueet_en.json';

//import FeedbackAndEvaluationGP from './GoodPractices/FeedbackAndEvaluationGP';
import InterActiveListComponent from './GoodPractices/InterActiveListComponent';



const FeedbackAndEvaluation = () => {
  const { t } = useTranslation();
  let Vastuualueet = vastuualueet;
  if(i18next.language == 'en') {
    Vastuualueet = vastuualueet_en;
  } else {
    Vastuualueet = vastuualueet;
  }
  const classes = useStyles();
  const feedbackAndEvaluationGoodPracticeArray = (t('worker_step_6', {returnObjects: true}) as string[]);

  const tabContent = [
    <div key="tab0">
      <p>kontentti siirretty työsuoritus, valvonta ja palaute</p>
    </div>,
    <div key="tab1">
      Tab 1 content for {t('feedback_evaluation')}
    </div>,
    <div key="tab2">
      <p>kontentti siirretty työsuoritus, valvonta ja palaute</p>
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
