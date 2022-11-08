import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from './WorkerStepBase';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchRentalWorkModel, updateCustomerContract } from '../../../actions/rentalWorkModelActions';
import { StepRequest } from '../../../types/types';

const CustomerContract = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();

  const tabContent = [
    <div key="tab0">
      Tab 0 content for {t('customer_contract')}
    </div>,
    <div key="tab1">
      Tab 1 content for {t('customer_contract')}
    </div>,
    <div key="tab2">
      Tab 2 content for {t('customer_contract')}
    </div>
  ]

  const handleCheckboxUpdate = (step: number, checked: boolean) => {
    const stepRequest: StepRequest = { step, checked }
    dispatch(updateCustomerContract(stepRequest))
    dispatch(fetchRentalWorkModel())
  }

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('customer_contract')}
      </Typography>
      <WorkerStepBase content={tabContent} handleCheckboxUpdate={handleCheckboxUpdate} />
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

export default CustomerContract;
