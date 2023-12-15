import { Button, Container } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import WorkerStepBase from './WorkerStepBase'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles'
import ContractOfEmploymentForm from './Forms/ContractOfEmploymentForm'
import SearchFromFileComponent from './SearchFromFileComponent'

const ContractOfEmployment = () => {
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
  <SearchFromFileComponent inputString="worker_step_3" />
     </div>,*/
    <div key='tab0'>
      <ContractOfEmploymentForm />
    </div>,
    <div key='tab1'>
      <SearchFromFileComponent inputString='good_practices_employment_contract_and_general_orientation_array' />
    </div>,
  ]

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className={classes.root}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>
          {t('contract_of_employment')}
        </Typography>
        <WorkerStepBase content={tabContent} />
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
  header: {
    marginLeft: 24,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default ContractOfEmployment
