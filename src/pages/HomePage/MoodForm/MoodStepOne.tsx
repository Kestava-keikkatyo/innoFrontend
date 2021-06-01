import React from 'react'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import { Grid, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from "../../../utils/store"
import {updateFeeling}  from '../../../actions/feelingActions'


const MoodStepOne: React.FC = () => {
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

  const dispatch:any = useDispatch()

  const currentFeeling:any = useSelector<IRootState>(state => state.feeling.currentFeeling)

  const updateMood = (v:any) => {
    currentFeeling.value = v
    console.log('MoodStepOne:currentFeeling:', currentFeeling)
    dispatch(updateFeeling(currentFeeling))
  };


  return (
    <>
      <Grid container className="mood-step-one" justify="center">
        <Grid item className={classes.flexCenter} xs={3}>
          <SentimentVeryDissatisfiedIcon
            onClick={() => updateMood(0)}
            className={classes.clickableIconGreen}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={3}>
          <SentimentDissatisfiedIcon
            onClick={() => updateMood(1)}
            className={classes.clickableIconGreen} />
        </Grid>
        <Grid item className={classes.flexCenter} xs={3}>
          <SentimentSatisfiedIcon
            onClick={() => updateMood(2)}
            className={classes.clickableIconGreen} />
        </Grid>
        <Grid item className={classes.flexCenter} xs={3}>
          <SentimentSatisfiedAltIcon
            onClick={() => updateMood(3)}
            className={classes.clickableIconGreen} />
        </Grid>
      </Grid>
    </>
  )
}

export default MoodStepOne
