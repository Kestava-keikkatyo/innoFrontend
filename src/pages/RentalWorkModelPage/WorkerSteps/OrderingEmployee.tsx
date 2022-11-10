import {
  List,
  ListItem,
  ListItemText,
  Container
}from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from './WorkerStepBase';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import OrderingEmployeeGP from './GoodPractices/OrderingEmployeeGP';
import WorkerResponsibility from './WorkerResponsibility';

const OrderingEmployee = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const tabContent = [
    <div key="tab0">
      <WorkerResponsibility inputString="worker_step_2" />
    </div>,
    <div key="tab1">
      Tab 1 content for {t('worker_order')}
    </div>,
    <div key="tab2">
      <OrderingEmployeeGP/>
    </div>
  ]

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('worker_order')}
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

export default OrderingEmployee;
