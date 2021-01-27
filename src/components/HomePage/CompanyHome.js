import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Card, Typography, Paper, List, Grid } from '@material-ui/core'
import {
  Message as MessageIcon,
  InsertDriveFile as InsertDriveFileIcon,
  Assignment as AssignmentIcon,
  Accessibility as AccessibilityIcon,
} from '@material-ui/icons'

const CompanyHome = () => {
  const useStyles = makeStyles({
    clickableIcon: {
      color: 'black',
      '&:hover': {
        color: 'blue',
      },
      width: 60,
      height: 60,
    },
    textAlignAssignment: {
      width: '5px',
      height: '15px',
      textAlign: 'center',
    },
    alignItemsAndJustifyContent: {
      width: '100%',
      padding: '30px',
      margin: '20px',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  const classes = useStyles()

  return (
    <>
      <Card variant="outlined">
        <Paper
          elevation={5}
          style={{ padding: '5em' }}
          className="paper-container"
        >
          <Typography variant="h6">Tiedotteet</Typography>
          <List m={0.1}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </List>
          <List m={0.1}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </List>
          <List m={0.1}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </List>
          <List m={0.1}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </List>
          <List m={0.1}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </List>
          <List m={0.1}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </List>
          <List m={0.1}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </List>
        </Paper>
      </Card>
      <Grid
        spacing={8}
        justify="space-around"
        container
        direction="row"
        mt={5}
        className={classes.alignItemsAndJustifyContent}
      >
        <Grid item xs>
          <Link to="/workers">
            <AccessibilityIcon
              className={classes.clickableIcon}
            ></AccessibilityIcon>
          </Link>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="body1">Työntekijät</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Link to="/tasks">
            <AssignmentIcon className={classes.clickableIcon}></AssignmentIcon>
          </Link>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="body1">Tehtävä-lista</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Link to="/documents">
            <InsertDriveFileIcon
              className={classes.clickableIcon}
            ></InsertDriveFileIcon>
          </Link>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="body1">Asiakirjat</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Link to="/messages">
            <MessageIcon className={classes.clickableIcon}></MessageIcon>
          </Link>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="body1">Viestit</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Link to="/forms">
            <InsertDriveFileIcon
              className={classes.clickableIcon}
            ></InsertDriveFileIcon>
          </Link>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="body1">Lomakkeet</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CompanyHome
