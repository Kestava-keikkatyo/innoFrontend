import React from 'react'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { Container, Grid } from '@mui/material'
import PasswordChange from './PasswordChange'
/**
 * @desc Renders setting page
 */
const SettingsPage = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='lg' className={classes.root}>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        style={{ marginTop: 10, marginBottom: 10 }}
      ></Grid>
      <div style={{ marginTop: '1rem' }}>
        {/* ChangePassword component */}
        <PasswordChange />
      </div>
    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 24,
  },
  button: {
    margin: theme.spacing(1),
    border: '1px solid #CC4E00 !important',
  },
}))

export default SettingsPage
