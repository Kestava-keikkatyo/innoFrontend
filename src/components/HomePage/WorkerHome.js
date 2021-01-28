import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  Typography,
  Paper,
  List,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,


} from '@material-ui/core'
import {
  Assessment as AssessmentIcon,
  Message as MessageIcon,
  InsertDriveFile as InsertDriveFileIcon,
  Assignment as AssignmentIcon,
  EmojiEmotions as InsertEmoticonIcon,
  SentimentVerySatisfied as SentimentVerySatisfiedIcon,
  SentimentSatisfied as SentimentSatisfiedIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
} from '@material-ui/icons'


const CompanyHome = () => {
  const [open, setOpen] = useState(false)

  const handleClickDialog = () => {
    if (open) {
      setOpen(false)
    }
    else {
      setOpen(true)
    }
  }

  const useStyles = makeStyles(({
    clickableIcon: {
      color: 'black',
      '&:hover': {
        color: 'blue',
      },
      width: 60,
      height: 60,
    },
    clickableIconGreen: {
      color: 'black',
      '&:hover': {
        color: 'green',
      },
      width: 60,
      height: 60,
    },
    textAlignAssignment: {
      width: '5px',
      height: '15px',
      textAlign: 'center',
    },
    emoticonTextAlignment: {
      width: '5px',
      height: '15px',
      textAlign: 'center',
      paddingLeft: '11px'
    },
    alignItemsAndJustifyContent: {
      width: '100%',
      padding: '30px',
      margin: '20px',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  }))

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
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
        </Paper>
      </Card>
      <Grid spacing={8} justify="space-around" container direction="row" mt={5} className={classes.alignItemsAndJustifyContent}>
        <Grid item xs>
          <Link to="/process">
            <AssessmentIcon
              className={classes.clickableIcon}>
            </AssessmentIcon>
          </Link>
          <Typography variant="body1">Perehdytys</Typography>
        </Grid>
        <Grid item xs>
          <Link to="/tasks">
            <AssignmentIcon
              className={classes.clickableIcon}>
            </AssignmentIcon>
          </Link>
          <Typography variant="body1">Tehtävä-lista</Typography>
        </Grid>
        <Grid item xs>
          <Link to="/documents">
            <InsertDriveFileIcon
              className={classes.clickableIcon}>
            </InsertDriveFileIcon>
          </Link>
          <Typography variant="body1">Asiakirjat</Typography>
        </Grid>
        <Grid item xs>
          <Link to="/messages">
            <MessageIcon
              className={classes.clickableIcon}>
            </MessageIcon>
          </Link>
          <Typography variant="body1">Viestit</Typography>
        </Grid>
        <Grid item xs>
          <InsertEmoticonIcon onClick={handleClickDialog}
            className={classes.clickableIcon}>
          </InsertEmoticonIcon>
          <Typography variant="body1">Fiilis</Typography>
        </Grid>
        <Dialog
          aria-labelledby="form-dialog-title"
          open={open}
          onClose={handleClickDialog}
        >
          <DialogTitle className>Fiilismittari</DialogTitle>
          <DialogContent>
            <SentimentVerySatisfiedIcon onClick={handleClickDialog}
              className={classes.clickableIconGreen}>
            </SentimentVerySatisfiedIcon>
            <SentimentSatisfiedIcon onClick={handleClickDialog}
              className={classes.clickableIconGreen}>
            </SentimentSatisfiedIcon>
            <SentimentDissatisfiedIcon onClick={handleClickDialog}
              className={classes.clickableIconGreen}>
            </SentimentDissatisfiedIcon>
            <SentimentVeryDissatisfiedIcon onClick={handleClickDialog}
              className={classes.clickableIconGreen}>
            </SentimentVeryDissatisfiedIcon>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  )
}

export default CompanyHome