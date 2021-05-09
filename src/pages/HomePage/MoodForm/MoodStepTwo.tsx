import React from 'react'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import { Grid, makeStyles } from '@material-ui/core'

const MoodStepTwo: React.FC = () => {
  const useStyles = makeStyles({
    clickableIconGreen: {
      color: '#ccc',
      '&:hover': {
        color: '#444',
      },
      width: 60,
      height: 60,
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
    },
  })

  const classes = useStyles()

  return (
    <>
      <Grid container className="mood-step-one" justify="center">
        <Grid item className={classes.flexCenter} xs={3}>
          <SentimentVeryDissatisfiedIcon
            className={classes.clickableIconGreen}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={3}>
          <SentimentDissatisfiedIcon className={classes.clickableIconGreen} />
        </Grid>
        <Grid item className={classes.flexCenter} xs={3}>
          <SentimentSatisfiedIcon className={classes.clickableIconGreen} />
        </Grid>
        <Grid item className={classes.flexCenter} xs={3}>
          <SentimentSatisfiedAltIcon className={classes.clickableIconGreen} />
        </Grid>
      </Grid>
    </>
  )
}

export default MoodStepTwo
