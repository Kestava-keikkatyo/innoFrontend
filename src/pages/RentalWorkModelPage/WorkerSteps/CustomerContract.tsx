import { Button, Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import WorkerStepBase from './WorkerStepBase'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles'
import CustomerContractForm from './Forms/CustomerContractForm'
import SearchFromFileComponent from './SearchFromFileComponent'

const CustomerContract = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      allVariants: {
        color: 'black',
      },
    },
  })

  const tabContent = [
    /* <div key="tab0">
      <SearchFromFileComponent inputString="worker_step_1" />
    </div>,*/

    <div key='tab0'>
      <CustomerContractForm />
    </div>,
    <div key='tab1'>
      <SearchFromFileComponent inputString='good_practices_customer_contract_array' />
    </div>,
  ]

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className={classes.root}>
        <Typography variant='h6' style={{ fontWeight: 'bold', marginTop: '30px' }}>
          {t('customer_contract')}
        </Typography>
        <WorkerStepBase content={tabContent} />
        <Button style={{ backgroundColor: '#F47D20', color: 'black', marginTop: '20px' }}>
          {t('print')}
        </Button>
      </Container>
    </ThemeProvider>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#FDFDFD',
    marginTop: '30px',
  },
}))

export default CustomerContract
