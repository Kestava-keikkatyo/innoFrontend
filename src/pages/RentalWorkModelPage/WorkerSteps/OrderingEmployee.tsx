import { Button, Container } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkerStepBase from './WorkerStepBase';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import OrderingEmployeeForm from './Forms/OrderingEmployeeForm';
import SearchFromFileComponent from './SearchFromFileComponent';

const OrderingEmployee = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      allVariants: {
        color: "black"
      },
    },
  });

  const tabContent = [
    /* <div key="tab0">
       <SearchFromFileComponent inputString="worker_step_2" />
     </div>,*/
    <div key="tab0">
      <OrderingEmployeeForm />
    </div>,
    <div key="tab1">
      <SearchFromFileComponent inputString="good_practices_order_and_selection_of_the_employee_array" />
    </div>
  ]

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" className={classes.root}>
        <Typography variant="h1" className="header">
          {t('worker_order')}
        </Typography>
        <WorkerStepBase content={tabContent} />
        <Button style={{ backgroundColor: '#F47D20', color: 'black', marginTop: '20px' }}>
          {t('print')}
        </Button>
      </Container>
    </ThemeProvider>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#FDFDFD',
    marginTop: '30px',
  },
  header: {
    marginLeft: 24,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

export default OrderingEmployee;
