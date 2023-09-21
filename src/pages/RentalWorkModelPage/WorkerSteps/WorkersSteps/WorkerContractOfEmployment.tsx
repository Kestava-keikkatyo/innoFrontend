import { Container } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import WorkerStepBase from '../WorkerStepBase'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles'
import WorkerContractOfEmploymentForm from '../Forms/WorkerForms//WorkerContractOfEmploymentForm'
import SearchFromFileComponent from '../SearchFromFileComponent'

const WorkerContractOfEmployment = () => {
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
      <WorkerContractOfEmploymentForm />
    </div>,
    <div key='tab1'>
      <SearchFromFileComponent inputString='good_practices_employment_contract_and_general_orientation_array' />
    </div>,
  ]

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className={classes.root}>
        <Typography variant='h1' className={classes.header}>
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
    backgroundColor: 'FDFDFD',
    marginTop: 30,
  },
  header: {
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default WorkerContractOfEmployment
