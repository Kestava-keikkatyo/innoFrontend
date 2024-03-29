import { Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import WorkerStepBase from '../WorkerStepBase'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles'
import WorkerGuidanceToWorkForm from '../Forms/WorkerForms/WorkerGuidanceToWorkForm'
import SearchFromFileComponent from '../SearchFromFileComponent'

const WorkerGuidanceToWork = () => {
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
       <SearchFromFileComponent inputString="worker_step_4" />
     </div>,*/
    <div key='tab0'>
      <WorkerGuidanceToWorkForm />
    </div>,
    <div key='tab1'>
      <SearchFromFileComponent inputString='good_practices_guidance_on_work_and_working_conditions_array' />
    </div>,
  ]

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className={classes.root}>
        <Typography variant='h1' className={classes.header}>
          {t('guidance_to_work')}
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
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default WorkerGuidanceToWork
