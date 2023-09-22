import React, { useState } from 'react'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

import { Grid } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../utils/store'
import { updateFeeling } from '../../../actions/feelingActions'

const MoodStepOne: React.FC = () => {
  const { data } = useSelector((state: IRootState) => state.user)

  //  if(data.role === "worker") {
  const useStyles1 = makeStyles({
    clickableIcon: {
      color: '#2386CC',
      '&:hover': {
        color: '#444',
      },
      width: 50,
      height: 50,
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
    },
  })

  //} else {

  const useStyles = makeStyles({
    clickableIcon: {
      color: '#ccc',
      '&:hover': {
        color: '#444',
      },
      width: 50,
      height: 50,
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
    },
  })

  //}

  const classes = useStyles()

  const dispatch: any = useDispatch()

  let initialClickedValues = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  }
  const [clicked, setClicked] = useState(initialClickedValues)

  const currentFeeling: any = useSelector<IRootState>((state) => state.feeling.currentFeeling)

  const updateMood = (v: any) => {
    setClicked({ ...initialClickedValues, [v]: true })
    dispatch(updateFeeling({ ...currentFeeling, value: v }))
  }

  if (data.role === 'worker') {
    return (
      <>
        <Grid container className='mood-step-one' justifyContent='center'>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentVeryDissatisfiedIcon
              onClick={() => updateMood(0)}
              className={`${classes.clickableIcon} ${clicked[0] ? 'mood-icon' : null}`}
            />
          </Grid>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentDissatisfiedIcon
              onClick={() => updateMood(1)}
              className={`${classes.clickableIcon} ${clicked[1] ? 'mood-icon' : null}`}
            />
          </Grid>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentSatisfiedIcon
              onClick={() => updateMood(2)}
              className={`${classes.clickableIcon} ${clicked[2] ? 'mood-icon' : null}`}
            />
          </Grid>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentSatisfiedAltIcon
              onClick={() => updateMood(3)}
              className={`${classes.clickableIcon} ${clicked[3] ? 'mood-icon' : null}`}
            />
          </Grid>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentVerySatisfiedIcon
              onClick={() => updateMood(4)}
              className={`${classes.clickableIcon} ${clicked[4] ? 'mood-icon' : null}`}
            />
          </Grid>
        </Grid>
      </>
    )
    //        };
  } else {
    return (
      <>
        <Grid container className='mood-step-one' justifyContent='center'>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentVeryDissatisfiedIcon
              onClick={() => updateMood(0)}
              className={`${classes.clickableIcon} ${clicked[0] ? 'mood-icon' : null}`}
            />
          </Grid>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentDissatisfiedIcon
              onClick={() => updateMood(1)}
              className={`${classes.clickableIcon} ${clicked[1] ? 'mood-icon' : null}`}
            />
          </Grid>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentSatisfiedIcon
              onClick={() => updateMood(2)}
              className={`${classes.clickableIcon} ${clicked[2] ? 'mood-icon' : null}`}
            />
          </Grid>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentSatisfiedAltIcon
              onClick={() => updateMood(3)}
              className={`${classes.clickableIcon} ${clicked[3] ? 'mood-icon' : null}`}
            />
          </Grid>
          <Grid item className={classes.flexCenter} xs={2}>
            <SentimentVerySatisfiedIcon
              onClick={() => updateMood(4)}
              className={`${classes.clickableIcon} ${clicked[4] ? 'mood-icon' : null}`}
            />
          </Grid>
        </Grid>
      </>
    )
    //        };
  }
}
export default MoodStepOne

/*const classes = useStyles();

  const dispatch: any = useDispatch();

  let initialClickedValues = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  };
  const [clicked, setClicked] = useState(initialClickedValues);

  const currentFeeling: any = useSelector<IRootState>(
    (state) => state.feeling.currentFeeling
  );

  const updateMood = (v: any) => {
    setClicked({ ...initialClickedValues, [v]: true });
    dispatch(updateFeeling({ ...currentFeeling, value: v }));
  };

  return (
    <>
      <Grid container className="mood-step-one" justify="center">
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentVeryDissatisfiedIcon
            onClick={() => updateMood(0)}
            className={`${classes.clickableIcon} ${
              clicked[0] ? 'mood-icon' : null
            }`}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentDissatisfiedIcon
            onClick={() => updateMood(1)}
            className={`${classes.clickableIcon} ${
              clicked[1] ? 'mood-icon' : null
            }`}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentSatisfiedIcon
            onClick={() => updateMood(2)}
            className={`${classes.clickableIcon} ${
              clicked[2] ? 'mood-icon' : null
            }`}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentSatisfiedAltIcon
            onClick={() => updateMood(3)}
            className={`${classes.clickableIcon} ${
              clicked[3] ? 'mood-icon' : null
            }`}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentVerySatisfiedIcon
            onClick={() => updateMood(4)}
            className={`${classes.clickableIcon} ${
              clicked[4] ? 'mood-icon' : null
            }`}
          />
        </Grid>
      </Grid>
    </>
  );
};
*/
//}
//export default MoodStepOne;
