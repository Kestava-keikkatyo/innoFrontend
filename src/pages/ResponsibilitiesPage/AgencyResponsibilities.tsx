import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Grid } from '@mui/material'
import SrcFile from './SrcFile'

const AgencyResponsibilities = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <Grid className={classes.root}>
        <Typography variant='h6' style={{ fontWeight: 'bold', marginLeft: '20px' }}>
          {t('responsibilities')}
        </Typography>
        <Typography variant='subtitle1'>
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={0} />
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={1} />
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={2} />
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={3} />
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={4} />
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={5} />
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={6} />
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={7} />
          <SrcFile inputString='agencyResponsibilitiesArray' inputIndex={8} />
        </Typography>
      </Grid>
    </ThemeProvider>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#FDFDFD',
    marginTop: 30,
    padding: '0',
  },
  header: {
    marginLeft: 24,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: 20,
  },
}))

export default AgencyResponsibilities
